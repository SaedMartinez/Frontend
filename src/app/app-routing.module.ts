import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpleadosComponent } from './actualizar-empleados/actualizar-empleados.component';
import { CrearEmpleadosComponent } from './crear-empleados/crear-empleados.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';

const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'crear', component: CrearEmpleadosComponent},
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
  { path: 'actualizar', component: ActualizarEmpleadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
