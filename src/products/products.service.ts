import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService){}


  async create( CreateProductInput: CreateProductInput) {
    const product = await this.prisma.products.create({
      data: {
        ...CreateProductInput
      },
    });
    return product;
  }

  findAll() {
    return this.prisma.products.findMany({});
  }

  findOne(productId: number){
    return this.prisma.products.findFirst({
      where: {
        productId: productId,
      }
    })
  }

  async update(productId: number, UpdateProductInput: UpdateProductInput) {
    const product = await this.prisma.products.findFirst({
      where:{
        productId: productId
      },
    });
    
    if(!product){
      throw new ForbiddenException(
        'Access to resources denied',
      );
    }
    return this.prisma.products.update({
      where: {
        productId: productId,
      },
      data:{
        ...UpdateProductInput
      }
    })
  }
  async remove(productId: number) {
    const product = await this.prisma.products.findFirst({
      where:{
        productId: productId
      },
    });
    
    if(!product){
      throw new ForbiddenException(
        'Access to resources denied',
      );
    }
    return this.prisma.products.update({
      where: {
        productId: productId,
      },
      data:{
        
      }
    })
  }
}
