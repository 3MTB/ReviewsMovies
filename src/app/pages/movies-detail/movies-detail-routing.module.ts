import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesDetailPage } from './movies-detail.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TmdbService } from 'src/app/services/tmdb.service';

const routes: Routes = [
  {
    path: '',
    component: MoviesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class MoviesDetailPageRoutingModule { }
