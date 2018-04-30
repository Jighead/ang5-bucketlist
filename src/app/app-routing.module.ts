import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// our home component
import { HomeComponent } from './home/home.component';
// our about component
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {  path: '',
    component: HomeComponent
  },
  {  path: 'about/:id',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
