import mongoose from 'mongoose';

mongoose.Promise = Promise;

const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost/test';

const connect = mongoose.connect(mongoUrl);

export default {
    connect
}