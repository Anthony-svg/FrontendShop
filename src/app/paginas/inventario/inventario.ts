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
    ProductoId:0,
    ProductoNombre:"",
    StockDisponible:0,
    ReponerStock:0
  }
  )

  obtenerInventario(){

  }
  
  guardarInventario(){
    console.log(this.form.value)
    const datosinventario = this.form.value as InventarioModel
    console.log(datosinventario)
    this.inventario.crear(datosinventario).subscribe(()=>{
      this.router.navigate(["/"])
    }) 
  }

}
