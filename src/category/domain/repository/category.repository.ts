import {SeachableRepositoryInterface} from "../../../@seedwork/domain/repository/repository-contracts";
import {Category} from "../entities/category";

export default interface CategoryRepository extends SeachableRepositoryInterface<Category, any, any> {

}