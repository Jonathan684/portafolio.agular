import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';




@Component({
  selector: 'app-sistemasoperativos',
  templateUrl: './sistemasoperativos.component.html',
  styleUrls: ['./sistemasoperativos.component.css']
})
export class SistemasoperativosComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

constructor( private route: ActivatedRoute,
              public productoService: ProductosService ) { }

ngOnInit(){
      this.route.params
        .subscribe( parametros => {
          // console.log(parametros['id']);
          this.productoService.getProducto(parametros['id'])
                .subscribe( (producto: ProductoDescripcion) => {
                  this.id = parametros['id'];
                  //console.log("ESTE ES ..>"+ producto.desc1
                  //);

                });
        });
      }
    }

