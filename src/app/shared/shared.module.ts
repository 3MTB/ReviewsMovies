import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TmdbService } from '../services/tmdb.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,

  ],
  providers: [TmdbService]
})
export class SharedModule { }
