import {Category} from "../../domain/entities/category";
import CategoryRepository from "../../domain/repository/category.repository";
import {InMemorySearchableRepository} from "../../../@seedwork/domain/repository/in-memory.repository";

export default class CategoryInMemoryRepository extends InMemorySearchableRepository<Category> implements CategoryRepository {

}