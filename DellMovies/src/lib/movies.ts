import axios from 'axios';
import MoviesListDTO from '../dtos/movies/MoviesListDTO';
import MoviesListParamsDTO from '../dtos/movies/MoviesListParamsDTO';

export default {
  async findMovieList(params: MoviesListParamsDTO): Promise<MoviesListDTO> {
    console.log({aquiiiiii: params})
    const { data } = await axios.get<MoviesListDTO>(
      `https://api.themoviedb.org/3/discover/movie/`, 
      {
        params
      }
    );
    if (data.error) {
      throw Error('Lista não encontrada');
    }

    return data;
  },
};
