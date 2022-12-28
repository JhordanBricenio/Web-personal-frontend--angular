import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'services', component:ServicesComponent, pathMatch: 'full' },
  { path: 'proyectos', component:ProyectosComponent, pathMatch: 'full' },
  { path: 'blog', component:BlogComponent, pathMatch: 'full' },
  { path: 'contacto', component:ContactoComponent, pathMatch: 'full' },
  { path: 'nosotros', component:NosotrosComponent, pathMatch: 'full' }

];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
