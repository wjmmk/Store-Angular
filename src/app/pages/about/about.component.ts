import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/Service/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoPagina: InfoPaginaService) { }

  ngOnInit() {
  }

}
