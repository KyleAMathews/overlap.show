// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("C:\\Users\\Craticula\\Documents\\Websites\\overlap.show\\.cache\\dev-404-page.js")),
  "page-component---src-pages-index-js": preferDefault(require("C:\\Users\\Craticula\\Documents\\Websites\\overlap.show\\src\\pages\\index.js"))
}

exports.json = {
  "dev-404-page.json": require("C:\\Users\\Craticula\\Documents\\Websites\\overlap.show\\.cache\\json\\dev-404-page.json"),
  "index.json": require("C:\\Users\\Craticula\\Documents\\Websites\\overlap.show\\.cache\\json\\index.json")
}

exports.layouts = {
  "index": preferDefault(require("C:\\Users\\Craticula\\Documents\\Websites\\overlap.show\\src\\layouts\\index"))
}