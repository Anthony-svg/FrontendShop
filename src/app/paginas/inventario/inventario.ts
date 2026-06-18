import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-inventario',
  imports: [],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class Inventario {

  httpClient=inject(HttpClient)

  InventarioData={
    productoId:"",
    productoNombre:"",
    stockDisponible:0,
    reponerStock:0
  }

  onSubmit(){
    let apiInventory=environment.apiURL+'/api/Inventario'
    this.httpClient.post(apiInventory,this.InventarioData).subscribe((result)=>{
      
    })
    alert('form submitted'+JSON.stringify(this.InventarioData))
  }
}
