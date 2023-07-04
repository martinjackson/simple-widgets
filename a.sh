#!/bin/bash

npm run build

PF=$(pwd)

cd ../rtp
. ./bb.sh
cd $PF
