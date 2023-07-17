#!/bin/bash

rm -Rf ./*lock* node_modules

npm cache clean --force

npm install --legacy-peer-deps --silent
npx npm-force-resolutions
npm audit
