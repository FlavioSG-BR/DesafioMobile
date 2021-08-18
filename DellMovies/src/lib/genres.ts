import axios from 'axios';
import GenresListDTO from '../dtos/genres/GenresListDTO';
import GenresListParamsDTO from '../dtos/genres/GenresListParamsDTO';

export default {
  async findGenresList(params: GenresListParamsDTO): Promise<GenresListDTO> {
    const {data} = await axios.get<GenresListDTO>(
      'https://api.themoviedb.org/3/genre/movie/list',
      {
        params,
      },
    );
    if (data.error) {
      throw Error('Lista não encontrada');
    }

    return data;
  },
};
