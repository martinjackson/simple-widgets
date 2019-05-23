#!/bin/bash

# replace css-box-model's parse() with maj modified to handle empty string when running in Jest
cd /c/projects/simple-widgets
cp /c/projects/css-box-model/dist/* node_modules/css-box-model/dist/
cp /c/projects/css-box-model/src/* node_modules/css-box-model/src/

