# imSold URL helpers

imSold URL helpers for generating links on the website, front-end and backend.

## Installation
```
npm install --save https://github.com/imSold/IMS_nodejs-url-helper/archive/v0.0.3.tar.gz
```
<sup>- v0.0.3 can be any version that was released.<br/>- Make sure you have the rights to access this repository.</sup>

## Require example
```
> var Helpers = require("@imsold/url-helpers");
> var helpers = new Helpers();
> console.log(helpers.version);
// return 0.0.x
```

### slug
Parameters in the constructor is optional

```
> var helpers = new Helpers();
> var slug = helpers.slug('The "quick" / \'brown\' fox / jumps:over / the lazy & ugly dog.$');
> console.log(slug);
// the-quick--brown-fox--jumps:over--the-lazy-and-ugly-dog.$
```

### url
Parameters in the constructor are required

```
> var routes = {'category.get': '/category/:categoryName/all-subcategories'};
> var baseUrl = 'https://www.imsold.com';

> var helpers = new Helpers(routes, baseUrl);
> var newUrl = helpers.url('category.get', {'categoryName': helpers.slug('men\'s collection')});
> console.log(newUrl);
// return https://www.imsold.com/category/mens-collection/all-subcategories;

```

### version
Simply get package version

```
> var helpers = new Helpers();
> console.log(helpers.version)
// return 0.0.x
```

## Browserify
So it can be used in the browser!

### To distribute as browser code
```
# Do this first, npm install -g browserify
> browserify index.js -o url-helpers.js
```

### To minify
```
# Do this first, npm install -g uglify-js
> browserify index.js | uglifyjs > url-helpers.min.js
```
