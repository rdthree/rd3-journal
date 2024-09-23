// .eleventy.js
const nunjucks = require("nunjucks"); // Import Nunjucks
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // Passthrough copy for styles, scripts, and favicon
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/entries/**/*.js");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // Watch targets
  eleventyConfig.addWatchTarget("src/styles/");
  eleventyConfig.addWatchTarget("src/scripts/");
  eleventyConfig.addWatchTarget("src/entries/");
  eleventyConfig.addWatchTarget("src/entries/**/*.js"); //sketches

  // README.md
  eleventyConfig.addPassthroughCopy({ "README.md": "README.md" });

  // get the folder data from the folder names
  function extractFolderInfo(data) {
    const filePathStem = data.page.filePathStem;
    const parts = filePathStem.split('/');
    const folderName = parts.length > 1 ? parts[parts.length - 2] : '';
    return {
      folderName,
      date: folderName.substring(0, 6)
    };
  }

  eleventyConfig.addGlobalData("eleventyComputed", {
    layout: data => data.layout || "layout.njk",
    title: data => data.title || extractFolderInfo(data).folderName || 'Home',
    date: data => data.date || extractFolderInfo(data).date
  });

  // Shortcode to include external JS libraries conditionally
  function loadLibrary(library) {
    const libraries = {
      p5: {
        src: "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/p5.min.js",
        integrity: "sha512-lvddmeF7aHRJwdbJeYThWd5kWSjTrXBzCRF/jYROiHzmhMJ1dEXfGH5Q7ft0yhizXTopAETG03s5ajTflauijA==",
        crossorigin: "anonymous",
        referrerpolicy: "no-referrer"
      },
      d3: {
        src: "https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js",
        integrity: "sha512-vc58qvvBdrDR4etbxMdlTt4GBQk1qjvyORR2nrsPsFPyrs+/u5c3+1Ct6upOgdZoIl7eq6k3a1UPDSNAQi/32A==",
        crossorigin: "anonymous",
        referrerpolicy: "no-referrer"
      }
    };

    const lib = libraries[library];
    if (!lib) return '';

    // Create the script tag with integrity, crossorigin, referrerpolicy
    let scriptTag = `
      <script
        src="${lib.src}"
        ${lib.integrity ? `integrity="${lib.integrity}"` : ''}
        ${lib.crossorigin ? `crossorigin="${lib.crossorigin}"` : ''}
        ${lib.referrerpolicy ? `referrerpolicy="${lib.referrerpolicy}"` : ''}
      ></script>
    `;

    if (library === 'p5' || library === 'd3') {
      // Dispatch event after library is loaded
      scriptTag += `
        <script>
          window.${library}ScriptLoaded = true;
          window.dispatchEvent(new Event('${library}Loaded'));
        </script>
      `;
    }

    // Return as SafeString to prevent HTML escaping
    return new nunjucks.runtime.SafeString(scriptTag);
  }

  // Shortcode for p5.js sketches
  eleventyConfig.addShortcode("sketchContainer", function (src, id) {
    return `
      <div id="${id}" class="p5js-container"></div>
      ${loadLibrary('p5')}
      <script src="../${src}"></script>
    `;
  });

  // Shortcode for D3.js sketches
  eleventyConfig.addShortcode("d3Container", function (src, id) {
    return `
      <div id="${id}" class="d3-container"></div>
      ${loadLibrary('d3')}
      <script src="../${src}"></script>
    `;
  });

  // Shortcode for Three.js sketches
  eleventyConfig.addShortcode("threeContainer", function (src, id) {
    return `
      <div id="${id}" class="three-container"></div>
      <!-- Doesn't need loadLibrary, this is modular and loaded within scripts -->
      <script type="module" src="../${src}"></script>
    `;
  });

  // Set Markdown library to allow HTML
  const markdownItOptions = {
    html: true,
  };
  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));

  // Collections for navigation
  eleventyConfig.addCollection("entries", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/entries/**/*.md");
  });

  // filter to extract date from MMDDYY folder name
  eleventyConfig.addFilter("extractDate", function (inputPath) {
    const folderName = inputPath.split('/').pop();
    return folderName.substring(0, 6);
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
