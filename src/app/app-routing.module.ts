import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';


const routes : Routes = [
  {
      path: '',
      component: MoviesComponent
  }
]
// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
