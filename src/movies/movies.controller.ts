import { CreateMovieDto } from './dto/create-movie.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getMovies(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  searchMovies(@Query('title') title: string) {
    return `search movies with title ${title}`;
  }

  @Get('/:id(\\d+)')
  getMovie(@Param('id') movieId: number): Movie {
    return this.moviesService.getMovie(movieId);
  }

  @Post()
  createMovie(@Body() movieData: CreateMovieDto) {
    return this.moviesService.createMovie(movieData);
  }

  @Delete('/:id(\\d+)')
  deleteMovie(@Param('id') movieId: number) {
    return this.moviesService.deleteMovie(movieId);
  }

  @Patch('/:id(\\d+)')
  updateMovie(@Param('id') movieId: number, @Body() movieData) {
    return this.moviesService.updateMovie(movieId, movieData);
  }
}
