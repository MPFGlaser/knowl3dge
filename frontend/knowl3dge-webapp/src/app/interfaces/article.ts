export interface Article {
  id: number;
  authorId: number;
  title: string;
  content: string;
  creationDate?: number;
  editDate?: number;
  visible: boolean;
}
