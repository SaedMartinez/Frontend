import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpleadosComponent } from './actualizar-empleados/actualizar-empleados.component';
import { CrearEmpleadosComponent } from './crear-empleados/crear-empleados.component';
import { DetallesEmpleadosComponent } from './detalles-empleados/detalles-empleados.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';

const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'crear', component: CrearEmpleadosComponent},
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
  { path: 'actualizar/:id', component: ActualizarEmpleadosComponent},
  { path: 'detalle/:id', component: DetallesEmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
