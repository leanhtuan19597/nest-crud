import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateProductInput } from 'src/products/dto';

export class UpdateProductInput extends PartialType(CreateProductInput) {
        
    @IsNotEmpty()
    user_id

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

}
function InputType() {
  throw new Error('Function not implemented.');
}

