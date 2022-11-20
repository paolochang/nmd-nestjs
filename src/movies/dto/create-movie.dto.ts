import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

/** DTO: Data Transfer Object */
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  @Min(1900)
  @Max(2022)
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
