import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authchildGuard } from '../services/authchild.guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivateChild: [authchildGuard], children: [
      { path: 'about', component: AboutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
