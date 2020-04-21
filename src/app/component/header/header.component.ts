import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/Service/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPagina: InfoPaginaService,
              private router: Router) { }

  ngOnInit() {
  }

  buscarProducto( termino: string) {
    if (termino.length < 1) {
      return;
    }
    // console.log(termino);
    this.router.navigate(['/search', termino]);
  }
}
