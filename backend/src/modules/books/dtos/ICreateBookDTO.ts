export interface ICreateBookDTO {
  id?: string;
  title: string;
  description: string;
  numberPages: number;
  language: string;
  code: string;
  quantity?: number;
  category_id?: string;
  author_id?: string;
}
