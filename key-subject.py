# -*- coding: utf-8 -*-
"""把音响产品主体从浅色影棚背景里抠出来（容差漫填去背 + 羽化），供首屏主视觉做微动效"""
from PIL import Image, ImageFilter, ImageChops
import os, sys
from collections import deque

ROOT = r"C:\Users\DELL\WorkBuddy\2026-09-15-09-57-46\portfolio\public"
STEREO = os.path.join(ROOT, "stereo")


def key_out(path, out, tol=40, feather=1.2, pad=14, max_w=1400):
    im = Image.open(path).convert("RGB")
    w, h = im.size
    px = im.tobytes()
    n = w * h

    def col(i):
        j = i * 3
        return px[j], px[j + 1], px[j + 2]

    # 背景基准色：四角中位数近似
    corners = [col(0), col(w - 1), col((h - 1) * w), col(h * w - 1)]
    seed = tuple(sorted(c[k] for c in corners)[len(corners) // 2] for k in range(3))

    bg = bytearray(n)  # 1 = 背景
    done = bytearray(n)
    q = deque()
    for x in range(0, w, 6):
        for y in (0, h - 1):
            i = y * w + x
            if not done[i]:
                done[i] = 1
                q.append(i)
    for y in range(0, h, 6):
        for x in (0, w - 1):
            i = y * w + x
            if not done[i]:
                done[i] = 1
                q.append(i)

    while q:
        i = q.popleft()
        r, g, b = col(i)
        if abs(r - seed[0]) > tol or abs(g - seed[1]) > tol or abs(b - seed[2]) > tol:
            continue
        bg[i] = 255
        x = i % w
        y = i // w
        if x > 0 and not done[i - 1]:
            done[i - 1] = 1
            q.append(i - 1)
        if x < w - 1 and not done[i + 1]:
            done[i + 1] = 1
            q.append(i + 1)
        if y > 0 and not done[i - w]:
            done[i - w] = 1
            q.append(i - w)
        if y < h - 1 and not done[i + w]:
            done[i + w] = 1
            q.append(i + w)

    bgmask = Image.frombytes("L", (w, h), bytes(bg))
    alpha = ImageChops.invert(bgmask).filter(ImageFilter.GaussianBlur(feather))

    orig = Image.open(path).convert("L")
    dark = orig.point(lambda v: 255 if v < 90 else 0)
    eaten = ImageChops.multiply(dark, bgmask)
    eaten_px = sum(1 for p in eaten.getdata() if p > 0)
    dark_px = sum(1 for p in dark.getdata() if p > 0)
    opaque = sum(1 for p in alpha.getdata() if p > 128)
    print(f"{os.path.basename(path)} {w}x{h} seed={seed} tol={tol} opaque={opaque/n:.1%} darkEaten={eaten_px}/{dark_px}")

    rgba = Image.open(path).convert("RGBA")
    rgba.putalpha(alpha)
    bbox = rgba.getchannel("A").getbbox()
    if bbox:
        bbox = (max(0, bbox[0] - pad), max(0, bbox[1] - pad), min(w, bbox[2] + pad), min(h, bbox[3] + pad))
        rgba = rgba.crop(bbox)
    if rgba.width > max_w:
        rgba = rgba.resize((max_w, int(rgba.height * max_w / rgba.width)), Image.LANCZOS)
    rgba.save(out)
    print("  saved", out, rgba.size)


if __name__ == "__main__":
    name = sys.argv[1] if len(sys.argv) > 1 else "s-front.jpg"
    tol = int(sys.argv[2]) if len(sys.argv) > 2 else 40
    src = os.path.join(STEREO, name) if not name.startswith("stereo-") else os.path.join(ROOT, name)
    dst = os.path.join(STEREO, "s-subject.png")
    key_out(src, dst, tol=tol)
