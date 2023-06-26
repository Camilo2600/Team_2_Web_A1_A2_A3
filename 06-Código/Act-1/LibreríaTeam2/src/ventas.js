// Array de productos
var productos = [
    { nombre: "Producto 1", precio: 100 },
    { nombre: "Producto 2", precio: 200 },
    { nombre: "Producto 3", precio: 300 }
  ];
  
  // Función para aumentar el 12% al precio de un producto
  function aumentarIVA() {
    var iva = 0.12; // Porcentaje del IVA (12% en este ejemplo)
  
    // Recorrer los productos y actualizar el precio
    for (var i = 0; i < productos.length; i++) {
      var producto = productos[i];
      producto.precio = producto.precio + (producto.precio * iva);
    }
  
    // Actualizar la tabla en el HTML
    var productosTable = document.getElementById("productosTable");
    var tableBody = productosTable.getElementsByTagName("tbody")[0];
    
    // Limpiar la tabla antes de actualizar los datos
    tableBody.innerHTML = "";
  
    // Agregar filas a la tabla con los productos actualizados
    for (var i = 0; i < productos.length; i++) {
      var producto = productos[i];
  
      var row = tableBody.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
  
      cell1.innerHTML = producto.nombre;
      cell2.innerHTML = producto.precio.toFixed(2); // Limitar a 2 decimales
    }
  }
  
  // Llamar a la función para mostrar los productos en la tabla
  aumentarIVA();