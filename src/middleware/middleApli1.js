function Mapl1(req, res, next) {
  console.log("Ejecuto un Middleware transversal a toda la aplicación: M1");

  next();
}

module.exports = Mapl1;