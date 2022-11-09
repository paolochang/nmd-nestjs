import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getMovie(id: number): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }

  createMovie(movieData: Movie) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  deleteMovie(id: number): boolean {
    this.movies = this.movies.filter((movie) => movie.id !== +id);
    return true;
  }
}
