import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicianComponent } from './musician/musician.component';
import { PhotographerComponent } from './photographer/photographer.component';


import { WelcomeComponent } from './welcome/welcome.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
      path: '',
      component: WelcomeComponent
    },
    {
      path: 'photos',
      component: PhotographerComponent
    },
    {
      path: 'flutes',
      component: MusicianComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
