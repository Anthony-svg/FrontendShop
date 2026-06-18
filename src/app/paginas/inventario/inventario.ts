import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  imports: [ReactiveFormsModule],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class Inventario {
  private readonly formBuilder = inject(FormBuilder);
  httpClient=inject(HttpClient)

  form = this.formBuilder.group({
    productoId:"",
    productoNombre:"",
    stockDisponible:0,
    reponerStock:0
  }
  )

  guardarInventario(){
   console.log(this.form.value)
  }

}
