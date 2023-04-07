#!/bin/bash

rm -f lib/index.js* lib/index.mjs*
cd src && node buildIndex.js