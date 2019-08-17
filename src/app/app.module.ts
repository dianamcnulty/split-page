import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/routing'.

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MusicianComponent } from './musician/musician.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@NgModule({
  declarations: [
    AppComponent,
    MusicianComponent,
    PhotographerComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
