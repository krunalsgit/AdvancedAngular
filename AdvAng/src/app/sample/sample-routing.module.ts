import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authchildGuard } from '../services/authchild.guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { authdeactivateGuard } from '../services/authdeactivate.guard';
import { authGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivateChild: [authchildGuard], children: [
      { path: 'about', component: AboutComponent },
    ]
  },
  { path: 'contact', component: ContactComponent, canActivate: [authGuard], canDeactivate: [authdeactivateGuard] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
