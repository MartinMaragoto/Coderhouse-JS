let respuesta = prompt('Debe ser mayor para ingresar a esta página')
    console.log (respuesta)

    if (respuesta < "18") {

        alert('Recuerda que solo los adultos pueden comprar en esta página. ¿Cómo te llamas?')

    } else {

        alert('Bienvenido... ¿Cómo te llamas?')
    }

function logIn() {
    let nombreUsuario = prompt ('Ingresa tu nombre de usuario')
    alert (`tu nombre de usuario es ${nombreUsuario}. Ahora sí, a comprar!`)
}
logIn()

let calcularCosto = prompt ('Ingrese el producto elegido');
while (calcularCosto !='ok') {

    alert ('Usted ingresó' + " " + calcularCosto + ". ¡Es una gran elección!");
    calcularCosto = prompt('ingrese otro producto o apriete ok para finalizar')
}





    
    // class Producto {
    //     constructor(nombre, precio, imagen, cantidad) {
    //       this.nombre = nombre;
    //       this.precio = precio;
    //       this.imagen = imagen;
    //       this.cantidad = cantidad;
    //     }
      
    //     vender() {
    //       this.cantidad -= 1; // this.cantidad = this.cantidad - 1
    //     }
    
    //     reponerMercadería() {
    //         this.cantidad += 5
    
    //     }
    //   }
      
    //   const producto1 = new Producto(
    //     "RECOMENDADO Monitor gamer curvo Samsung C27R500FHL",
    //     867212,
    //     "http://asjkfdgh",
    //     5
    //   );
    //   const producto2 = new Producto(
    //     "Guantes Gamer VSX F1000",
    //     30000,
    //     "http://guantes.merc",
    //     14
    //   );
      
    //   console.log(producto1);
    //   producto1.vender();
    //   producto1.vender();
    //   producto1.vender();
    //   console.log(producto1);
    
    //   console.log(producto2)
    //   producto2.vender()
    //   producto2.vender()
    //   producto2.vender()
    //   producto2.reponerMercadería()
    //   console.log(producto2)