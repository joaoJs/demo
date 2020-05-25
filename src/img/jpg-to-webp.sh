#!/bin/sh
for f in *.jpg ; do
        basename "$f"
        original="$(basename -- $f)"
        new="${original/jpg/webp}"
        cwebp $original -o webp/$new ;
        done