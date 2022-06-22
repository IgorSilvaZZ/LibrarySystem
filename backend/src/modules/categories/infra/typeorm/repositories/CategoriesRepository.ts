import { ICreateCategoryDTO } from "@modules/categories/dtos/ICreateCategoryDTO";
import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";
import { getRepository, Repository } from "typeorm";
import { Category } from "../entities/Category";

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create(data: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create(data);

    await this.repository.save(category);

    return category;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async findByNameCategory(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });

    return category;
  }
}
