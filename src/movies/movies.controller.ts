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

@Controller('movies')
export class MoviesController {
  @Get()
  getMovies() {
    return 'This will return all movies';
  }

  @Get('search')
  searchMovies(@Query('title') title: string) {
    return `search movies with title ${title}`;
  }

  @Get('/:id(\\d+)')
  getMovie(@Param('id') movieId: number) {
    return `This will return a movie with the id: ${movieId}`;
  }

  @Post()
  createMovie(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete('/:id(\\d+)')
  deleteMovie(@Param('id') movieId: number) {
    return `This will delete a movie with thd id: ${movieId}`;
  }

  @Patch('/:id(\\d+)')
  updateMovie(@Param('id') movieId: number, @Body() movieData) {
    return {
      movieId,
      ...movieData,
    };
  }
}
