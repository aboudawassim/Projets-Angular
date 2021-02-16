import { EventbyspaceComponent } from './eventbyspace/eventbyspace.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './home/container/container.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventByVilleComponent } from './event-by-ville/event-by-ville.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { ForgetComponent } from './forget/forget.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [ {
  path:'home', component:HomeComponent , canActivate : [AuthGuard],
  children : [
  {path:'',component:ContainerComponent},
  {path:'eventlist', component:EventListComponent },
  {path:'space', component:EventbyspaceComponent},
  {path:'ville', component:EventByVilleComponent },

]
},


{path:'reg', component:RegisterComponent},
  {path:'', component:LoginComponent },
    {path:'forget', component:ForgetComponent},
      {path:'**', component: Erreur404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],




exports: [RouterModule]
})
export class AppRoutingModule { }
