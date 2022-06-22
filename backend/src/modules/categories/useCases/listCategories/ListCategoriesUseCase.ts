import { Category } from "@modules/categories/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}
