#!/bin/bash

find . -type f -newer simple-widgets-1.33.11.tgz | grep -v '\.git'

