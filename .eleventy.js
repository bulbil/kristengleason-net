export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("assets/css");

  /**
   * Global settings
   */
  return {
    dir: {
      input: ".",
      output: "dist",
      layouts: "layouts",
      includes: "includes",
      images: "assets/img",
      css: "assets/css",
    },
    templateFormats: ["html", "liquid", "md", "njk"],
    markdownTemplateEngine: "njk",
  };
};
