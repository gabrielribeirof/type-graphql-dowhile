import { Field, InputType, ObjectType } from 'type-graphql';
import { ObjectId } from 'mongodb';

@InputType()
class CategoryInput {
  @Field()
  name: string;

  @Field()
  description: string;
}

export default CategoryInput;
