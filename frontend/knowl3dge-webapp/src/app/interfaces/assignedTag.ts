import { Article } from './article';
import { Tag } from './tag';
export interface AssignedTag {
  id?: number;
  tag?: Tag;
  article?: Article;
}
