import { IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    userId!: number;

    @IsString()
    name!: string;
}
