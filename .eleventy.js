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

/** @h/t https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#rules **/
// Remember the old renderer if overridden, or proxy to the default renderer.
const defaultRender =
  md.renderer.rules.link_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  // Add a new `target` attribute, or replace the value of the existing one.
  tokens[idx].attrSet("target", "_blank");

  // Pass the token to the default renderer.
  return defaultRender(tokens, idx, options, env, self);
};

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
