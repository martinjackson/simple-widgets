#!/bin/bash

rg 'import ' | sort | grep -v css | grep -v react | grep -v svg | grep -v 'index.js' | grep -v forms

# SearchSortTable.js:import pdfMake from "pdfmake/build/pdfmake";
# generalStore.js:import { create } from 'zustand'        // zustand 1.4k  vs Recoil 1740k (1.74M)

