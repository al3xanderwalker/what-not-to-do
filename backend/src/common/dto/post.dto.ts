import { IsString, Length } from 'class-validator';

export class PostDto {
  @IsString()
  @Length(1, 127)
  title: string;

  @IsString()
  @Length(1, 127)
  content: string;
}
