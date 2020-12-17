import mongoose from 'mongoose';

mongoose.connect(
  String(process.env.MONGODB_ATLAS_URL),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
