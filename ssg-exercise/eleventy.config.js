module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles.css");
    eleventyConfig.addPassthroughCopy("theme.js");
    eleventyConfig.addPassthroughCopy("cat-facts.js");
};