import { prop as ModelProperty, getModelForClass } from '@typegoose/typegoose';
import { ObjectType, Field as FieldType } from 'type-graphql';
import { ObjectId } from 'mongodb';

import { Category } from '../../categories/entities/category';

@ObjectType()
export class Video {
  @FieldType()
  readonly _id: ObjectId;

  @FieldType()
  @ModelProperty({ required: true })
  name: string;

  @FieldType()
  @ModelProperty({ required: true })
  description: string;

  @FieldType(() => Category)
  @ModelProperty({
    ref: () => Category,
    required: true
  })
  category: Category;
}

export const VideoModel = getModelForClass(Video);
