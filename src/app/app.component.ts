import { Component } from '@angular/core';
import { InfoPaginaService } from './Service/info-pagina.service';
import { ProductosService } from './Service/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';

  constructor(public infoPagina: InfoPaginaService,
              public productoService: ProductosService) {}
}
