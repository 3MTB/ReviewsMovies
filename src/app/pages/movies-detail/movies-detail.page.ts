import { TmdbService } from 'src/app/services/tmdb.service';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/interfaces';
import { environment as env } from 'src/environments/environment';
@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.page.html',
  styleUrls: ['./movies-detail.page.scss'],
})
export class MoviesDetailPage implements OnInit {


  movie: Movie = {
    adult: false,
    backdrop_path: '',
    belongs_to_collection:
    {
      id: 0,
      name: '',
      poster_path: '',
      backdrop_path: ''
    },
    budget: 0,
    genres: [],
    homepage: '',
    id: 0,
    imdb_id: '',
    origin_country: [],
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [],
    production_countries: [],
    release_date: new Date(Date.now()),
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  }
  readonly image = "http://image.tmdb.org/t/p/w500/";

  constructor(private rutaActual: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let idPelicula = parseInt(this.rutaActual.snapshot.params['id']);
    this.obtenerPelicula(idPelicula);
  }

  obtenerPelicula(id: number) {
    this.getMovieById(id).subscribe(res => {
      this.movie = res;
    });
  }

  getMovieById(idMovie: number) {
    const url = `${env.tmdbUrl}/movie/${idMovie}`;
    return this.http.get<Movie>(url, {
      params: {
        api_key: env.apiKey,
        language: 'es-ES'
      }
    });
  }
  getImageUrl(): string {
    return `${this.image}${this.movie.poster_path}`;
  }
  getGenres(): string {
    return this.movie.genres.map(g => g.name).join(' • ');
  }
}
