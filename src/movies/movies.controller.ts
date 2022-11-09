import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getMovies() {
    return 'This will return all movies';
  }

  @Get('/:id(\\d+)')
  getMovie(@Param('id') movieId: number) {
    return `This will return a movie with the id: ${movieId}`;
  }

  @Post()
  createMovie() {
    return 'This will create a movie';
  }

  @Delete('/:id(\\d+)')
  deleteMovie(@Param('id') movieId: number) {
    return `This will delete a movie with thd id: ${movieId}`;
  }

  @Patch('/:id(\\d+)')
  updateMovie(@Param('id') movieId: number) {
    return `This will update a movie with the id: ${movieId}`;
  }
}
