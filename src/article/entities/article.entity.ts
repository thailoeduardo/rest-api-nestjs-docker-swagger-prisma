import { ApiProperty } from "@nestjs/swagger";
import { Article } from "@prisma/client";
import { UsersEntity } from "src/users/entities/user.entity";

export class ArticleEntity implements Article {
	@ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
  
	@ApiProperty()
  body: string;

  @ApiProperty()
  published: boolean;

	@ApiProperty()
  createdAt: Date;

	@ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  authorId: number | null;

  @ApiProperty({ required: false, type: UsersEntity })
  author?: UsersEntity;

  constructor({ author, ...data }: Partial<ArticleEntity>) {
    Object.assign(this, data);

    if (author) {
      this.author = new UsersEntity(author);
    }
  }
}
