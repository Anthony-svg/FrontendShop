import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { InventarioService } from '../../inventario-service';
import { InventarioModel } from '../../models/inventario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario',
  imports: [ReactiveFormsModule],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class Inventario {
  private readonly formBuilder = inject(FormBuilder);
  inventario=inject(InventarioService)
  router= inject(Router)

  form = this.formBuilder.group({
    productoId:"",
    productoNombre:"",
    stockDisponible:0,
    reponerStock:0
  }
  )

  obtenerInventario(){

  }
  
  guardarInventario(){
    let inventario = this.form.value as InventarioModel
    this.inventario.crear(inventario).subscribe(()=>{
      this.router.navigate(["inventario"])
    }) 
  }

}
