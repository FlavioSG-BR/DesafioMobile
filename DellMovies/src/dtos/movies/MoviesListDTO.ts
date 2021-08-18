import MoviesDTO from './MoviesDTO';

export default interface MoviesListDTO {
  page: number;
  results: MoviesDTO[];
  total_pages: number;
  total_results: number;
  error: string;
};
