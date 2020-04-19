import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  carga = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

   private cargarInfo() {
    // Leer el Archivo .json
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.info = resp;
      this.carga = true;
      console.log(resp);
    });
  }

  private cargarEquipo() {
    // this.http.get('https://angular-web-84077.firebaseio.com/equipo.json')
    this.http.get('assets/data/data-firebase.json')
    .subscribe( (resp: any[]) => {
      this.equipo = resp;
      this.carga = true;
      console.log(resp);
    });
  }
}
