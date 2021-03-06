import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';


import { ActivatedRoute, Router, Routes } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _servicio: InfoPaginaService,
              route:ActivatedRoute ,private router:Router) { }

              //private route:ActivatedRoute,private router:Router
  ngOnInit(): void {
  }
  buscarProducto( termino: string){
    if(termino.length < 1){
      return; //esta parte es por que si solo se aprieta enter, entonces no hace nada.
    }

    this.router.navigate(['/search', termino]);
   // this.router.n(['/search', termino]);
    console.log(termino);
  }
}
