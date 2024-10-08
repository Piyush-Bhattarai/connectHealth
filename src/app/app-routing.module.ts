import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [

  { path: '', redirectTo: '/home',pathMatch:'full' }, // default component path
  { path: 'home', component: HomeComponent },   
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent},
  { path:'gallery', component: GalleryComponent},
  { path:'contact', component: ContactComponent},
  { path: '**', redirectTo: '/home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
