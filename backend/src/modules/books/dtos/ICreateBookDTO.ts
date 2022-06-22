export interface ICreateBookDTO {
  id?: string;
  title: string;
  author: string;
  description: string;
  numberPages: number;
  language: string;
  code: string;
  quantity: number;
  category_id: string;
}
