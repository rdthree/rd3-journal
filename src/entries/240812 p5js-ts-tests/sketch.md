---
layout: layout.njk
title: "240812 p5.js-ts-sketches"
---
# p5.js sketch, ts to js

This document demonstrates how p5.js sketches are implemented using TypeScript and embedded in our digital journal.

## TypeScript Implementation and Global Declarations

1. **globals.d.ts**: This file is crucial for TypeScript to recognize globally loaded libraries:

   
   import p5 from 'p5';

   declare global {
       var p5: typeof p5;
   }

   export {};
   

2. **Type Declaration**: We use `function mySketch(p: typeof p5)` to declare our sketch function. This allows us to use p5 methods and properties with proper TypeScript support, without needing to import p5 explicitly.

3. **Global p5**: We rely on p5 being available globally, which is how it's typically included in web projects.

4. **Instance Creation**: At the end of each sketch file, we create a new p5 instance with `const mySketchInstance = new p5(mySketch, 'mySketch');`. This binds our sketch to a specific HTML element.

function mySketch(p: typeof p5) {
  // Sketch code here
}

const mySketchInstance = new p5(mySketch, 'mySketch');

## Shortcodes and Eleventy Configuration

Our .eleventy.js file contains crucial configurations that make embedding sketches possible:

1. **sketchContainer Shortcode**: This custom shortcode is defined as:


eleventyConfig.addShortcode("sketchContainer", function (src, id) {
    return `
      <div id="${id}" class="p5js-container"></div>
      ${loadLibrary('p5')}
      <script src="../${src}"></script>
    `;
});


This shortcode creates a container div, loads the p5 library, and includes our sketch script.

loadLibrary Function: This function dynamically loads the p5 library and dispatches an event when it's ready:


function loadLibrary(library) {
// ... (library details)
let scriptTag = `
    <script
    src="${lib.src}"
    integrity="${lib.integrity}"
    crossorigin="${lib.crossorigin}"
    referrerpolicy="${lib.referrerpolicy}"
    ></script>
`;
scriptTag += `
    <script>
    window.${library}ScriptLoaded = true;
    window.dispatchEvent(new Event('${library}Loaded'));
    </script>
`;
return new nunjucks.runtime.SafeString(scriptTag);
}


From TypeScript to Embedded Sketch
TypeScript Compilation: Our build process compiles sketch_p5.ts to sketch_p5.js.
Markdown Integration: We use the shortcode in our Markdown: {% sketchContainer "sketch_p5.js", "mySketch" %}
Eleventy Processing: Eleventy processes the shortcode, generating the necessary HTML and script tags.
Runtime: When the page loads, p5 is loaded, and our sketch is initialized and bound to its container.
Here's our first sketch in action:

mySketch {% sketchContainer "sketch_p5.js", "mySketch" %}

And here are two more examples:

mySketch2 {% sketchContainer "sketch_p5_2.js", "mySketch2" %}

mySketch3 {% sketchContainer "sketch_p5_3.js", "mySketch3" %}

Each sketch is defined in its own TypeScript file, compiled to JavaScript, and seamlessly embedded in our journal entry using this powerful shortcode system.


This explanation now accurately reflects your TypeScript implementation, the role of the shortcodes, and how the entire system works together to embed p5.js sketches in your digital journal.