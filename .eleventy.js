import MarkdownIt from "markdown-it";
import MarkdownItAttrs from "markdown-it-attrs";

// set markdown it options
const mdOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
};
// adds support for inline html attributes (i.e., {.class} )
const md = new MarkdownIt(mdOptions);
md.use(MarkdownItAttrs);

export default (eleventyConfig) => {
  /**
   * Render settings for markdown parser
   */
  // markdown
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy("assets/css");
  eleventyConfig.addPassthroughCopy("assets/font");
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("assets/favicon");

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
      fonts: "assets/font",
    },
    templateFormats: ["html", "liquid", "md", "njk"],
    markdownTemplateEngine: "njk",
  };
};
