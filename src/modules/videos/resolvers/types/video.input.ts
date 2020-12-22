import { InputType, Field } from 'type-graphql';

import CategoryInput from '../../../categories/resolvers/types/category.input';

@InputType()
class VideoInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  category: CategoryInput;
}

export default VideoInput;
