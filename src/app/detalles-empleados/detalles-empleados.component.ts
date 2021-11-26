import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-detalles-empleados',
  templateUrl: './detalles-empleados.component.html',
  styleUrls: ['./detalles-empleados.component.css']
})
export class DetallesEmpleadosComponent implements OnInit {

  id: number;
  empleado: Empleado;

  constructor(private route: ActivatedRoute, private eService: EmpleadosService, private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.obtenerInfoEmploy(this.id);
  }

  obtenerInfoEmploy(inID: number) {
    this.eService.buscarEmpleadoID(inID).subscribe(dato => {
      this.empleado = dato;
    });
  }



}
