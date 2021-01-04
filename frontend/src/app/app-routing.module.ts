import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { AdminAddjobComponent } from './admin-addjob/admin-addjob.component';
import { AdminJoblistComponent } from './admin-joblist/admin-joblist.component';

const routes: Routes = [{
  path:'',
  redirectTo:'/home',
  pathMatch:'full'
},{
  path:'home',
  component:HomeComponent
},{
  path:'addjob',
  component:AdminAddjobComponent
},{
  path:'joblist',
  component: AdminJoblistComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
