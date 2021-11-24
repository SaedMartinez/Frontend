import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-crear-empleados',
  templateUrl: './crear-empleados.component.html',
  styleUrls: ['./crear-empleados.component.css']
})
export class CrearEmpleadosComponent implements OnInit {

  empleado: Empleado = new Empleado();

  constructor(private eService: EmpleadosService, private router: Router) { }

  ngOnInit(): void {
  }


  guardarEmpleado() {
    this.eService.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.redirectTo();
    });
  }

  redirectTo() {
    this.router.navigate(['/empleados']);
  }
 
  onSubmit() {
    this.guardarEmpleado();
  }

}
