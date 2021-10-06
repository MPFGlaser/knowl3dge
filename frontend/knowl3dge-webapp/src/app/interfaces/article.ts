export interface Article {
  id: number;
  authorId: number;
  title: string;
  content: string;
  creationDate: string;
  editDate: string;
  visible: boolean;
}

export const articles = [
  {
    id: 1,
    authorId: 1,
    title: 'title here',
    content: 'article content lorem ipsum dolor sit amet',
    creationDate: '0',
    editDate: '0',
    visible: true,
  },
  {
    id: 2,
    authorId: 1,
    title: 'title2 here',
    content: 'article content lorem ipsum dolor sit amet',
    creationDate: '0',
    editDate: '0',
    visible: true,
  },
  {
    id: 3,
    authorId: 2,
    title: 'title3 here',
    content: 'article content lorem ipsum dolor sit amet',
    creationDate: '0',
    editDate: '0',
    visible: true,
  },
];
