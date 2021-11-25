import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  sendWorkerF: Empleado = new Empleado();
  empleados: Empleado[];
  constructor(private eService: EmpleadosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }


  private obtenerEmpleados() {
    this.eService.obtenerListaEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

  empleadoEdit(id: number) {
    this.eService.buscarEmpleadoID(id).subscribe(dato => {
      this.sendWorkerF = dato;
    });
    this.router.navigate(['/actualizar']);

  }

  empleadoDelete(id: number) {
    this.eService.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato)
      this.obtenerEmpleados();
    });
  }
}
