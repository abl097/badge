import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { SampleComponent } from './sample/sample.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:"", component:LandingPageComponent},
  {path:"about", component:AboutComponent},
  {path:"sample", component:SampleComponent},
  {path:"contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
