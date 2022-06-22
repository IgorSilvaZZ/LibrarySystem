import { ICreateCategoryDTO } from "@modules/categories/dtos/ICreateCategoryDTO";
import { Category } from "@modules/categories/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name }: ICreateCategoryDTO): Promise<Category> {
    const categoryAlreadyExists =
      await this.categoriesRepository.findByNameCategory(name);

    if (categoryAlreadyExists) {
      throw new Error("Categoria já existente!");
    }

    const category = await this.categoriesRepository.create({ name });

    return category;
  }
}
