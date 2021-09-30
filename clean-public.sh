#!/bin/bash

cd public

find . -maxdepth 1 -mindepth 1 -type d ! \( -name 'assets' -or -name 'icons' -or -name 'en' -or -name 'ru' \) -exec rm -r "{}" \;
rm *.{js,json,css,txt,png}

