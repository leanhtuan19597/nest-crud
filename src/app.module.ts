import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
  }),
  ProductsModule,
  PrismaModule,
],
providers: [AppService],
})
export class AppModule {}
