import Productos from "../models/Productos";

export const renderProductos = async (req, res) => {
  const productos = await Productos.find().lean(); //para ver la lista de libros almacenado y el lean para pasar lista a formato java

  res.render("index", { productos: productos });
};

export const createProductos = async (req, res) => {
  try {
    const productos = Productos(req.body);
    await productos.save(); //para ver en consola
    //console.log(productoAlmacenado);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderEditProducto = async (req, res) => {
  try {
    const productos = await Productos.findById(req.params.id).lean(); //busca por id
    res.render("editar", { productos });
  } catch (error) {
    console.log(error.message);
  }
};


export const iva = async (req, res) => {
  try {
    const producto = await Productos.findById(req.params.id).lean(); // busca por id

    res.render("venta", { producto });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProductos = async (req, res) => {
  const { id } = req.params;
  await Productos.findByIdAndUpdate(id, req.body); //encuentra por id y actualiza

  res.redirect("/");
};

export const deleteProductos = async (req, res) => {
  const { id } = req.params;
  await Productos.findByIdAndDelete(id); //eliminapor id y actualiza

  res.redirect("/");
};

export const statusProductos = async (req, res) => {
  const { id } = req.params;
  const productos = await Productos.findById(id); //busca por id
  // se manda a traer propiedad ipcion que esta en modelo
  productos.opcion = !productos.opcion;
  await productos.save();
  res.redirect("/");
};
