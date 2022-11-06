#!/usr/bin/env sh

rm -rf dist

# abort on errors
set -e

# build
npm run build

surge --domain https://jiahau-keli-2022.surge.sh --project dist
