// .eleventy.js
module.exports = function (eleventyConfig) {
  // Passthrough copy for images, scripts, and styles
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/entries/**/*.js");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // Watch targets
  eleventyConfig.addWatchTarget("src/styles/");
  eleventyConfig.addWatchTarget("src/scripts/");
  eleventyConfig.addWatchTarget("src/entries/");

  // Ensure p5.js is only loaded once
  eleventyConfig.addShortcode("loadP5", function () {
    return `
      <script>
        (function() {
          if (typeof p5 === 'undefined') {
            var script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/p5.min.js';
            script.async = true;
            document.head.appendChild(script);
          }
        })();
      </script>
    `;
  });
  

  // Shortcode to include external JS files
  eleventyConfig.addShortcode("scriptSrc", function (src) {
    const sketchName = src.replace('.js', '');
    return `<div id="${sketchName}-container"></div>
            <script src="../${src}"></script>
            <script>
              document.currentScript.onload = function() {
                new p5(window['${sketchName}'], '${sketchName}-container');
              };
            </script>`;
  });

  eleventyConfig.addShortcode("loadSketch", function(sketchPath, containerId, width = "100%", height = "400px") {
    const sketchName = sketchPath.replace('.js', '');
    return `
      <div id="${containerId}" style="width: ${width}; height: ${height}; position: relative;"></div>
      <script>
        (function() {
          var script = document.createElement('script');
          script.src = '../${sketchPath}';
          script.onload = function() {
            if (typeof p5 !== 'undefined' && window['${sketchName}']) {
              new p5(window['${sketchName}'], '${containerId}');
            } else {
              console.error('p5 or sketch function not found for ${sketchName}');
            }
          };
          document.body.appendChild(script);
        })();
      </script>
    `.replace(/\n/g, '').replace(/\s+/g, ' ').trim();
  });
  
  
  

  // Set Markdown library to allow HTML
  const markdownIt = require("markdown-it");
  const markdownItOptions = {
    html: true,
  };
  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));

  // Collections for navigation
  eleventyConfig.addCollection("entries", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/entries/**/*.md");
  });



  eleventyConfig.addTransform("debugOutput", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      console.log(`Generated HTML for ${outputPath}:`);
      console.log(content);
    }
    return content;
  });

  // Configure input and output directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
  };
};