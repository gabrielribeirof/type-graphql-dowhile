import { prop as ModelProperty, getModelForClass } from '@typegoose/typegoose';
import { ObjectType, Field as FieldType } from 'type-graphql';
import { ObjectId } from 'mongodb';

import { Video } from '../../videos/entities/video';
 
@ObjectType()
export class Category {
  @FieldType()
  readonly _id: ObjectId;

  @FieldType()
  @ModelProperty({ required: true })
  name: string;

  @FieldType()
  @ModelProperty({ required: true })
  description: string;

  @FieldType(() => [Video])
  @ModelProperty({
    ref: 'Video',
    foreignField: 'category',
    localField: '_id',
    default: []
  })
  videos: Video[];
}

export const CategoryModel = getModelForClass(Category);
