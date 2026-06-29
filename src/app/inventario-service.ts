import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { InventarioModel } from './models/inventario.model';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  private http =inject(HttpClient);
  private urlBase = environment.apiURL+"/api/inventario";
  private refresh = new Subject<void>();
  
  refresh$=this.refresh.asObservable();

  crear (inventario:InventarioModel){
    return this.http.post(this.urlBase,inventario).pipe(
      tap(()=>this.refresh.next())
    );
  }

  obtenerTodos():Observable<InventarioModel[]>{
    return this.http.get<InventarioModel[]>(this.urlBase); 
  }
}
