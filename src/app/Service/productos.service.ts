import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemProductos } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productoIdx: ItemProductos[] = [];
  carga = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
      this.http.get('https://angular-web-84077.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ItemProductos[]) => {
         this.productoIdx = resp;
         setTimeout(() => {
          this.carga = false;
         }, 2000);
         console.log(resp);
      });
  }
}
