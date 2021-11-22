import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];
  constructor(private empService: EmpleadosService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }


  private obtenerEmpleados() {
    this.empService.obtenerListaEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }
}
