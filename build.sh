#!/bin/bash

npm run build

rm -rf /dist/*

cp -r ./dist/* /dist/