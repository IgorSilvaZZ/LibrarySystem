import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../infra/typeorm/entities/Category";

export interface ICategoriesRepository {
  create({ name }: ICreateCategoryDTO): Promise<Category>;
  list(): Promise<Category[]>;
  findByNameCategory(name: string): Promise<Category>;
}
