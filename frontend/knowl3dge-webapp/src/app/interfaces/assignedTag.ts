import { Article } from './article';
import { Tag } from './tag';
export interface AssignedTag {
  id?: number;
  tagId?: Tag;
  articleId?: Article;
}
