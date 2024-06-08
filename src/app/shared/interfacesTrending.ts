export interface ApiTrendingMovieResult {
  page:          number;
  results:       MovieTrending[];
  total_pages:   number;
  total_results: number;
}

export interface MovieTrending {
  backdrop_path:     string;
  id:                number;
  original_title:    string;
  overview:          string;
  poster_path:       string;
  media_type:        string;
  adult:             boolean;
  title:             string;
  original_language: string;
  genre_ids:         number[];
  popularity:        number;
  release_date:      Date;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}
