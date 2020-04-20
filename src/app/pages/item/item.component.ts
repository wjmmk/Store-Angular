import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/Service/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/product-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productoItem: ProductoDescripcion;
  id: string;

  constructor(private route: ActivatedRoute,
              private productoService: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe( parametros => {
      // console.log(parametros.id);
        this.productoService.getProducto(parametros.id)
          .subscribe( (producto: ProductoDescripcion) => {
              console.log(producto);
              this.productoItem = producto;
              this.id = parametros.id;
          });
      });
  }
}
