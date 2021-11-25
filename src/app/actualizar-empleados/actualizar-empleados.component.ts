import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualizar-empleados',
  templateUrl: './actualizar-empleados.component.html',
  styleUrls: ['./actualizar-empleados.component.css']
})
export class ActualizarEmpleadosComponent implements OnInit {


  id: number;

  empleado:Empleado = new Empleado();

  constructor(private eService:EmpleadosService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.obtenerInfoEmploy(this.id);
  }

  obtenerInfoEmploy(inID:number){
    this.eService.buscarEmpleadoID(inID).subscribe( dato => {
      this.empleado=dato;
    });
  }

  onSubmit(){
    
  }


  
}
