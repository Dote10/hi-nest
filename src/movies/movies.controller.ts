import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

  @Get('/:id')
  getOne(@Param('id') movieId:string){
    return `This will return one movie with the id${movieId}`;
  }

  @Post()
  create(@Body() movieData){
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId){
    return `This will delete a movie with the id${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId:string, @Body()updateData){
    return {
      updateMovie: movieId,
      ...updateData
    }
  }

}
