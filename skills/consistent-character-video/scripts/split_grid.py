#!/usr/bin/env python3
"""Split an N x M storyboard grid image into individual numbered frames.

The image models in this workflow can return the whole storyboard as one grid
image (e.g. a 4x4 of 16 shots). This script is only for the intentional
individual-I2V / shot-pair route. The default R2V storyboard route uploads the
whole board directly and does not need cropping. When cropping is wanted, this
does it deterministically in reading order (left-to-right, top-to-bottom):
frame_01, frame_02, ...

Usage:
    python split_grid.py grid.png --rows 4 --cols 4 --out frames/
    python split_grid.py grid.png --rows 4 --cols 4 --border 6   # trim gutters

Requires Pillow:  pip install pillow
"""
import argparse
import os
import sys


def split_grid(image_path, rows, cols, out_dir, border=0):
    try:
        from PIL import Image
    except ImportError:
        sys.exit("Pillow is required. Install with:  pip install pillow")

    img = Image.open(image_path)
    w, h = img.size
    cell_w = w // cols
    cell_h = h // rows

    os.makedirs(out_dir, exist_ok=True)
    n = 0
    for r in range(rows):
        for c in range(cols):
            left = c * cell_w + border
            upper = r * cell_h + border
            right = (c + 1) * cell_w - border
            lower = (r + 1) * cell_h - border
            if right <= left or lower <= upper:
                sys.exit("border too large for this cell size; reduce --border")
            frame = img.crop((left, upper, right, lower))
            n += 1
            path = os.path.join(out_dir, f"frame_{n:02d}.png")
            frame.save(path)
            print(f"wrote {path}  ({right - left}x{lower - upper})")
    print(f"\nDone: {n} frames from a {rows}x{cols} grid -> {out_dir}/")
    print("Next: inspect each frame as a single-shot still, then animate one at a "
          "time in Seedance only when you intentionally chose the I2V route.")


def main():
    p = argparse.ArgumentParser(description="Split a storyboard grid into frames.")
    p.add_argument("image", help="path to the grid image")
    p.add_argument("--rows", type=int, required=True, help="number of rows")
    p.add_argument("--cols", type=int, required=True, help="number of columns")
    p.add_argument("--out", default="frames", help="output directory (default: frames/)")
    p.add_argument("--border", type=int, default=0,
                   help="pixels to trim off each cell edge to drop gutters/borders")
    args = p.parse_args()
    split_grid(args.image, args.rows, args.cols, args.out, args.border)


if __name__ == "__main__":
    main()
