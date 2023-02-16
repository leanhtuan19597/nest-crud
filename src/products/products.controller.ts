import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UpdateProductInput } from "./dto";
import { CreateProductInput } from "./dto/create-product.input";
import { ProductsService } from "./products.service";


@Controller('product')
export class ProductController{
    constructor(private productService: ProductsService){}

    @Post()
    create(@Body() CreateProductDto: CreateProductInput){
        return this.productService.create(CreateProductDto);
    }

    @Get()
    findAll(){
        return this.productService.findAll();
    }

    @Get('allactive')
    findAllActive(){
        return this.productService.findAllActive();
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.productService.findOne(+id);
    }

    @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateProductInput: UpdateProductInput) {
    return this.productService.update(+id, UpdateProductInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}