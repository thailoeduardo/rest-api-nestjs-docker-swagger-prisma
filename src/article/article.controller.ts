import { 
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticleEntity } from './entities/article.entity';

@Controller('article')
@ApiTags('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @ApiCreatedResponse({ type: ArticleEntity })
  async create(@Body() createArticleDto: CreateArticleDto) {
    return new ArticleEntity(
      await this.articleService.create(createArticleDto),
    );
  }

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  async findAll() {
    const articles = await this.articleService.findAll();
    return articles.map((article) => new ArticleEntity(article));
  }

  // @Get('drafts')
  // @ApiOkResponse({ type: ArticleEntity, isArray: true })
  // async findDrafts() {
  //   const drafts = await this.articleService.findDrafts();
  //   return drafts.map((draft) => new ArticleEntity(draft));
  // }

  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    // return this.articleService.findOne(id);
    // return new ArticleEntity(await this.articleService.findOne(id));
    return new ArticleEntity(await this.articleService.findOne(id));
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ArticleEntity })
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateArticleDto: UpdateArticleDto
  ) {
    // return this.articleService.update(id, updateArticleDto);
    return new ArticleEntity(
      await this.articleService.update(id, updateArticleDto),
    );
  }

  // @Delete(':id')
  // @ApiOkResponse({ type: ArticleEntity })
  // remove(@Param('id', ParseIntPipe) id: number) {
  //   return this.articleService.remove(+id);
  // }

  @Delete(':id')
  @ApiOkResponse({ type: ArticleEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new ArticleEntity(await this.articleService.remove(id));
  }
}
