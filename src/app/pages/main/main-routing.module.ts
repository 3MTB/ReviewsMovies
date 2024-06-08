import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';
import { TmdbService } from 'src/app/services/tmdb.service';
import { MoviePage } from '../movie/movie.page';
import { MoviePageModule } from '../movie/movie.module';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
