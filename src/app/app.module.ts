import { AgmCoreModule } from '@agm/core';


import { FooterComponent } from './home/footer/footer.component';
import { ContainerComponent } from './home/container/container.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule, FormControlName } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventbyspaceComponent } from './eventbyspace/eventbyspace.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventByVilleComponent } from './event-by-ville/event-by-ville.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { SpaceComponent } from './space/space.component';
import { ForgetComponent } from './forget/forget.component';
import { Erreur404Component } from './erreur404/erreur404.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EventbyspaceComponent,
    EventListComponent,
    EventByVilleComponent,
    ArtisteComponent,
    SpaceComponent,
    ForgetComponent,
    Erreur404Component,



  ],
  imports: [
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWnLEvgdiPhRHa-fmD6KIDO7PnaJY4cmY', libraries: ['places']
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
