import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { InventarioService } from '../../inventario-service';
import { InventarioModel } from '../../models/inventario.model';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { startWith, switchMap } from 'rxjs';

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
  inventarios = toSignal(
  this.inventario.refresh$.pipe(
    startWith(null),
    switchMap(() =>
      this.inventario.obtenerTodos()
    )
  ),
  { initialValue: [] }
);

  form = this.formBuilder.group({
    ProductoId:0,
    ProductoNombre:"",
    StockDisponible:0,
    ReponerStock:0
  }
  )

  
  guardarInventario(){
    const datosinventario = this.form.value as InventarioModel
    this.inventario.crear(datosinventario).subscribe(()=>{
      this.router.navigate(["inventario"])
    }) 
  }

}
