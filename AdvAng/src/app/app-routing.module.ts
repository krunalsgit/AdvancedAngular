import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sample/home/home.component';
import { authGuard } from './services/auth.guard';
import { SampleModule } from './sample/sample.module';

const routes: Routes = [
  { path: 'admin', canActivate: [authGuard], loadChildren: () => import('./sample/sample.module').then(() => SampleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
