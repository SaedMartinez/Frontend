import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualizar-empleados',
  templateUrl: './actualizar-empleados.component.html',
  styleUrls: ['./actualizar-empleados.component.css']
})
export class ActualizarEmpleadosComponent implements OnInit {

@Input() receiveworkerF:any;

  empleado:Empleado = new Empleado();

  constructor(private eService:EmpleadosService, router: Router) { }

  ngOnInit(): void {
  }




  
}
