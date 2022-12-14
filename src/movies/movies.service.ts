import { CreateMovieDto } from './dto/create-movie.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getMovie(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  createMovie(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  deleteMovie(id: number) {
    this.getMovie(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  updateMovie(id: number, movieData: UpdateMovieDto) {
    const movieIndex = this.movies.findIndex((movie: Movie) => movie.id === id);
    this.movies[movieIndex] = { ...this.movies[movieIndex], ...movieData };
    return this.movies[movieIndex];
  }
}
