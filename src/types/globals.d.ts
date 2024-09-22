// src/types/globals.d.ts

//for some reason, this doesn't work for d3, need to fix 

import p5 from 'p5';
//import * as d3 from 'd3'; // If you intend to use D3.js globally

// Declare p5 and d3 as global variables
declare global {
    var p5: typeof p5;
    //var d3: typeof d3;
}

// This file needs to be a module to avoid global scope pollution
export {};