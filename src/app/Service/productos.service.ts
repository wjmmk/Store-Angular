import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemProductos } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  carga = true;
  productoIdx: ItemProductos[] = [];
  productoFiltrado: ItemProductos[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise( (respuesta) => {

      this.http.get('https://angular-web-84077.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ItemProductos[]) => {
         this.productoIdx = resp;
         this.carga = false;
         console.log(resp);
         respuesta();
      });
    });

  }

  getProducto(id: string) {
    return  this.http.get(`https://angular-web-84077.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto( termino: string) {

    if (this.productoIdx.length === 0) {
      // Carga de Productos
      this.cargarProductos().then( () => {
        // Esto se ejecuta después de terner los Productos
        this.filtralProductos(termino);
      });
    } else {
      // Aplicar el Filtro
      this.filtralProductos(termino);
    }
  }

  private filtralProductos(termino: string) {
     // console.log(this.productoIdx);
    this.productoFiltrado = []; // Se purga el arreglo para que no muestre los productos repetidos

    termino = termino.toLocaleLowerCase(); // Coloca en minuscula el valor que venga en la variable
                                          // (termino) para hacer una busqueda mas exacta.

    this.productoIdx.forEach( prodFil => {
      const tituloLower = prodFil.titulo.toLocaleLowerCase();
      if (prodFil.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productoFiltrado.push(prodFil);
      }
    });
  }
}
