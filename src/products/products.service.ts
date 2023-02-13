import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService){}


  async create( CreateProductInput: CreateProductInput) {
    const product = await this.prisma.create({
      data: {
        ...CreateProductInput
      },
    });
    return product;
  }

  findAll() {
    return this.prisma.product.findMany({});
  }

  findOne(productId: number){
    return this.prisma.findFirst({
      where: {
        productId: productId,
      }
    })
  }

  async update(productId: number, UpdateProductInput: UpdateProductInput) {
    const product = await this.prisma.findFirst({
      where:{
        productId: productId
      },
    });
    
    if(!product){
      throw new ForbiddenException(
        'Access to resources denied',
      );
    }
    return this.prisma.update({
      where: {
        productId: productId,
      },
      data:{
        ...UpdateProductInput
      }
    })
  }
  async remove(productId: number) {
    const product = await this.prisma.findFirst({
      where:{
        productId: productId
      },
    });
    
    if(!product){
      throw new ForbiddenException(
        'Access to resources denied',
      );
    }
    return this.prisma.update({
      where: {
        productId: productId,
      }
    })
  }
}
