import { Routes } from '@angular/router';
import { Home } from './paginas/home/home';
import { Inventario } from './paginas/inventario/inventario';
import { Cliente } from './paginas/cliente/cliente';
import { Facturacion } from './paginas/facturacion/facturacion';

export const routes: Routes = [
    {path: '',redirectTo:'home',pathMatch:'full'},
    {path: 'home',component:Home},
    //{path: '**',redirectTo:'home'},
    {path: 'inventario',component:Inventario},
    {path: 'clientes',component:Cliente},
    {path: 'facturacion',component:Facturacion},
];
