# imSold URL helpers

imSold URL helpers for generating links on the website, front-end and backend.

## slug
Parameters in the constructor is optional

```
var helpers = new Helpers();
var slug = helpers.slug('The "quick" / \'brown\' fox / jumps:over / the lazy & ugly dog.$');
console.log(slug);
// the-quick--brown-fox--jumps:over--the-lazy-and-ugly-dog.$
```

## url
Parameters in the constructor are required

```
var routes = {'category.get': '/category/:categoryName/all-subcategories'};
var baseUrl = 'https://www.imsold.com';

var helpers = new Helpers(routes, baseUrl);
var newUrl = helpers.url('category.get', {'categoryName': helpers.slug('men\'s collection')});
console.log(newUrl);
// return https://www.imsold.com/category/mens-collection/all-subcategories;

```

## version
Simply get package version

```
var helpers = new Helpers();
console.log(helpers.version)
// return 0.0.x
```

@todo installation instruction, browserify instruction
