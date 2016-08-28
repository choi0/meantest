import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
