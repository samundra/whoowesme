import { Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';

interface ApiResponse {
  data: string;
}

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): ApiResponse {
    return {
      data: 'This action returns all cats',
    };
  }

  @Post()
  createCat(@Res() response: Response) {
    response.header('Cache-control', 'none');
    response.header('Accept-language', 'en');
    response.send({
      data: 'Cat has been created',
    });
  }

  @Get('docs')
  // @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action requires a #${params.id} cat`;
  }
}
