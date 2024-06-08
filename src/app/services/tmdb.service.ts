import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment as env } from 'src/environments/environment.prod';
import { ApiResultGenre, Genre, ResultAPIMovie } from '../shared/interfaces';
import { Observable, map } from 'rxjs';
import { ApiTrendingMovieResult } from '../shared/interfacesTrending';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  constructor(private http: HttpClient) {

  }

  getMoviesTrending(page: number = 1) {
    const url = `${env.tmdbUrl}/trending/movie/day`;
    return this.http.get<ApiTrendingMovieResult>(url, {
      params: {
        page: page.toString()
      }
    });
  }
  searchMovie(query: string, page: number = 1) {
    const url = `${env.tmdbUrl}/search/movie`;
    return this.http.get<ApiTrendingMovieResult>(url, {
      params: {
        query,
        page: page.toString()
      }
    });
  }
  getAllGenres() {
    const url = `${env.tmdbUrl}/genre/movie/list`;
    return this.http.get<ApiResultGenre>(url);
  }
}
