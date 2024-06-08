import { Component, Input, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service';
import { Genre, Movie } from 'src/app/shared/interfaces';
import { MovieTrending } from 'src/app/shared/interfacesTrending';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage /* implements OnInit  */ {

  @Input({ required: true }) movie!: MovieTrending;
  @Input({ required: true }) genres!: string;

  readonly image = "http://image.tmdb.org/t/p/w92/";

  allGeneros: Genre[] = [];

  constructor() {
  }
  /* ngOnInit(): void {

  } */

  getImageUrl(): string {
    return `${this.image}${this.movie.poster_path}`;
  }
}
