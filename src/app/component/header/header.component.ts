import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/Service/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPagina: InfoPaginaService) { }

  ngOnInit() {
  }

}
