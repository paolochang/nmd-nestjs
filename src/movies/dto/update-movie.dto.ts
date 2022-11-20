import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

/**
 * PartialType: returns a type (class) with all the properties of
 *              the input type set to optional
 * */
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
