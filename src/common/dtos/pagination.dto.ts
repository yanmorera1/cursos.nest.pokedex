import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator'

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  @ApiProperty({ required: false })
  limit?: number
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @ApiProperty({ required: false })
  offset?: number
}
