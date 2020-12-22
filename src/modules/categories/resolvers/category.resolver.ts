import { Resolver, Query, Mutation, Arg, Info } from 'type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { fieldsList } from 'graphql-fields-list';

import { Category, CategoryModel } from '../entities/category';

import CategoryInput from './types/category.input';

@Resolver(Category)
class CategoryResolver {
  @Query(() => [Category])
  async categories(@Info() info: GraphQLResolveInfo) {
    const fields = fieldsList(info);

    const categories = await CategoryModel.find().select(fields.join(' '));
    
    return categories;
  }

  @Mutation(() => Category)
  async createCategory(@Arg('category') categoryInput: CategoryInput) {
    const category = new CategoryModel(categoryInput);

    await category.save();

    return category;
  }
}

export default CategoryResolver;
