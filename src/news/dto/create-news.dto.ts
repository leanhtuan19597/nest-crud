import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
  

export class CreateNewsDto {
    
    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

}
