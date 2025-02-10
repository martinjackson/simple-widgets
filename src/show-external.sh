#!/bin/bash

rg 'import ' | grep -v css | grep -v react | grep -v svg | grep -v "from '\." | grep -v '.md:'

