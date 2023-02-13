import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService){}

 async create( createNewsDto: CreateNewsDto) {
    const news = await this.prisma.news.create({
      data: {
        ...createNewsDto
      },
    });
    return news;
  }

  findAll() {
    return this.prisma.news.findMany({
      where: {
        is_delete: false
      }
    });
  }

  findOne(blog_id: number) {
    return this.prisma.news.findFirst({
      where: {
        blog_id: blog_id,
        is_delete: false
      }
    });
  }

  async update(blog_id: number, updateNewsDto: UpdateNewsDto) {
    const news = await this.prisma.news.findFirst({
      where:{
        blog_id: blog_id
      },
    });
    
    if(!news){
      throw new ForbiddenException(
        'Access to resources denied',
      );
    }
    return this.prisma.news.update({
      where: {
        blog_id: blog_id,
      },
      data:{
        ...updateNewsDto
      }
    })
  }
  async remove(blog_id: number) {
    const news = await this.prisma.news.findFirst({
      where:{
        blog_id: blog_id
      },
    });
    
    if(!news){
      throw new ForbiddenException(
        'Access to resources denied',
      );
    }
    return this.prisma.news.update({
      where: {
        blog_id: blog_id,
      },
      data:{
        is_delete: true
      }
    })
  }
}
