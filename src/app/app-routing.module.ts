import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
ContactComponent

const routes: Routes = [

  {path :"", redirectTo:"login",pathMatch:"full"},
  { path :"login", component: LoginComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Home", component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"Contact",component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
