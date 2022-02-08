#!/bin/bash

grep import ./src/forms/*.js | awk -F ' from ' '{ print  $2 }' | grep -v '\"\./' | grep -v './' | sort -u

