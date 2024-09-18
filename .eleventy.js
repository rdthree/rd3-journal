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

  eleventyConfig.addGlobalData("eleventyComputed", {
    layout: data => data.layout || "layout.njk",
    title: data => {
      if (data.title) {
        return data.title;
      }
      // Compute the title based on the folder name
      const filePathStem = data.page.filePathStem;
      const parts = filePathStem.split('/');
      const folderName = parts.length > 1 ? parts[parts.length - 2] : '';
      return folderName || 'Home';
    }
  });

  // Shortcode to include external JS files
  eleventyConfig.addShortcode("scriptSrc", function (src) {
    return `<script src="../${src}"></script>`;
  });

  // New shortcode for sketch container and script
  eleventyConfig.addShortcode("sketchContainer", function (src, id) {
    return `<div id="${id}"></div>
      <script src="../${src}"></script>`;
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