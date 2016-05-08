var package = require('./package.json');

/**
 * imSold URL helpers for back-end and front-end codes
 */
function Helpers(routes, baseUrl){
  /**
  * All available routes, example
  * routes = {'ad.view.get': '/ad/:id/:title'};
  */
  this.routes = routes;

  /**
  * Websites base URL, no trailing slash at the end (http://mywebsite.com)
  */
  this.baseUrl = baseUrl;
};

/**
  * Convert routeName and it's parameters to a URL
  *
  * @param  {String} routeName
  * @param  {Object} params
  * @return {String}
  */
Helpers.prototype.url = function(routeName, params) {
  if (typeof this.routes === "undefined") throw new Error('routes is required as first argument');
  if (typeof this.routes !== "object") throw new Error('Routes should be JSON objects');
  if (Object.keys(this.routes).length===0) throw new Error('There are no items in your routes');

  if (typeof this.baseUrl === "undefined") throw new Error('baseUrl is required as second argument');

  params = params || '';
  var url = this.baseUrl + this.routes[routeName];

  for (param in params) {
    url = url.replace(':'+param, params[param]);
  }
  return url;
};

/**
* Make a slug out of a string
*
* @param  {String} string
* @return {String}
*/
Helpers.prototype.slug = function(string) {
  if (typeof string === "undefined") throw new Error('slug string is required');

  return string.toLowerCase()
    .replace(/\&/g, 'and') /* replace & with and */
    .replace(/\s+/g, '-') /* replace spaces with - */
    .replace(/\'/g, '') /* replace single quote with nothing */
    .replace(/\"/g, '') /* replace double quote with nothing */
    .replace(/\//g, ''); /* replace slash with nothing */
};

Helpers.prototype.version = package.version;

module.exports = Helpers;
