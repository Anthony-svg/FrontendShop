import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { InventarioModel } from './models/inventario.model';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
    private http =inject(HttpClient);
  private urlBase = environment.apiURL+"api/inventario";

  public crear (inventario:InventarioModel){
    return this.http.post(this.urlBase,inventario);
  }
}
