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

  findAllActive() {
    return this.prisma.products.findMany({
      where:{
        is_delete: false,
      }
    });
  }

  findOne(productId: number){
    return this.prisma.products.findFirst({
      where: {
        productId: productId,
        is_delete: false, 
      }
    })
  }

  async update(productId: number, UpdateProductInput: UpdateProductInput) {
    const product = await this.prisma.products.findFirst({
      where:{
        productId: productId
      }
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
        ...UpdateProductInput,
        is_delete: true,
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
        is_delete: true,
      }
    })
  }
}
