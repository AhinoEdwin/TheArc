import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'',component:HomeComponent},
  {path:'artist',component:ArtistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
