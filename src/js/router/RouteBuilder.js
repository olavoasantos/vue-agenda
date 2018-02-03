const get = (name, uri, controllerString) => {
  let route = {
    path: uri
  };
  let [controller, method] = controllerString.split('@');

  route.component = require(`../controllers/${controller}`)[method]();

  if(name) route.name = name;

  return route;
}

export default { get };