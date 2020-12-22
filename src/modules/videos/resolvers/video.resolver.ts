import { Resolver, Mutation, Query, Arg } from 'type-graphql';
import { Video, VideoModel } from '../entities/video';

import VideoInput from './types/video.input';

@Resolver(Video)
class VideoResolver {
  @Query(() => [Video])
  async videos() {
    const videos = await VideoModel.find().populate('category');

    console.log(videos);

    return videos;
  }

  @Mutation(() => Video)
  async createVideo(@Arg('video') videoInput: VideoInput) {
    const video = new VideoModel(videoInput);

    await video.save();

    return video;
  }
}

export default VideoResolver;
