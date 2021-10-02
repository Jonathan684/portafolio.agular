import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { SistemasoperativosComponent } from './pages/sistemasoperativos/sistemasoperativos/sistemasoperativos.component';

const app_routes: Routes = [
 {path: 'home', component: PortafolioComponent},
 {path: 'about',component: AboutComponent},
 {path: 'item/:id',component: ItemComponent},
 {path: 'search/:termino',component: SearchComponent },
 {path: 'sistemasoperativos/:id',component: SistemasoperativosComponent},
 {path: '**', pathMatch: 'full',redirectTo:'home' }
 //Lo ultimo es apra que cualquier otra direccion redireccione al home
];
@NgModule({
  imports: [RouterModule.forRoot(app_routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
