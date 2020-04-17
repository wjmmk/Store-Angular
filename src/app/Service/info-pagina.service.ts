import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  carga = false;

  constructor(private http: HttpClient) {

    console.log('Servicio de "data-pagina.json" listo !!!');

    // Leer el Archivo .json
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

      this.info = resp;
      this.carga = true;
      console.log(resp);
    });
  }
}
