
module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/img")
    eleventyConfig.addPassthroughCopy({"src/root": "/"})
    eleventyConfig.addPassthroughCopy("netlify.toml")

    return {
        dir: {
            input: "src",
        }
    }
}