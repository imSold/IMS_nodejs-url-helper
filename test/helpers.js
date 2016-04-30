var should = require('chai').should();
var Helpers = require("../helpers");

var routes = {
              'home.get': '/',
              'category.get': '/category/:categoryName/all-subcategories',
              'ad.view.get': '/ad/:id/:title',
             };
var baseUrl = 'https://www.imsold.com';

describe('Helper Class', function(){
  it('should tell route is required', function(){
    try {
      var helpers = new Helpers();
      helpers.url('home.get', {});
    }catch(e){
      e.message.should.equal('routes is required as first argument');
    }
  });

  it('should tell routes are JSON objects', function(){
    try {
      var helpers = new Helpers('hello');
      helpers.url('home.get', {});
    }catch(e){
      e.message.should.equal('Routes should be JSON objects');
    }
  });

  it('should tell that no routes are given', function(){
    try {
      var helpers = new Helpers({});
      helpers.url('home.get', {});
    }catch(e){
      e.message.should.equal('There are no items in your routes');
    }
  });

  it('should tell that baseUrl is required', function(){
    try {
      var helpers = new Helpers(routes);
      helpers.url('home.get', {});
    }catch(e){
      e.message.should.equal('baseUrl is required as second argument');
    }
  });
});

describe('URL helper', function(){
  it('should return url link for home', function(){
    var helpers = new Helpers(routes, baseUrl);
    var newUrl = helpers.url('home.get', {});
    newUrl.should.equal('https://www.imsold.com/');
  });

  it('should return url link for category', function(){
    var helpers = new Helpers(routes, baseUrl);
    var newUrl = helpers.url('category.get', {'categoryName': helpers.slug('men\'s collection')});
    newUrl.should.equal('https://www.imsold.com/category/mens-collection/all-subcategories');
  });

  it('should return url link for home', function(){
    var helpers = new Helpers(routes, baseUrl);
    var newUrl = helpers.url('home.get', {});
    newUrl.should.equal('https://www.imsold.com/');
  });
});

describe('Slug helper', function(){
  it('should translate string with symbols', function(){
    var helpers = new Helpers();
    var slug = helpers.slug('The "quick" / \'brown\' fox / jumps:over / the lazy & ugly dog.$');
    slug.should.equal('the-quick--brown-fox--jumps:over--the-lazy-and-ugly-dog.$');
  });

  it('should translate plain string', function(){
    var helpers = new Helpers();
    var slug = helpers.slug('The QUICK brown fox jumps over the lazy and ugly dog');
    slug.should.equal('the-quick-brown-fox-jumps-over-the-lazy-and-ugly-dog');
  })
});

describe('Property', function(){
  it('"version" should return 0.0.2', function(){
    var helpers = new Helpers();
    helpers.version.should.equal('0.0.2');
  });
})
