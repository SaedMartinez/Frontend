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
    this.router.navigate(['/actualizar',id]);
  }

  empleadoInfo(id: number){
    this.router.navigate(['/detalle',id]);
  }

  empleadoDelete(id: number) {
    this.eService.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato)
      this.obtenerEmpleados();
    });
  }
}
