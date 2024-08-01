import { Router } from 'express';
import {
    getPreSignedUrlFromBucket,
    getPreSignedUrlToUpload,
} from '../controllers/amazon.s3.controller';

export const s3Router = Router();

s3Router.route('/pre-signed-url').get(getPreSignedUrlToUpload);
s3Router.route('/pre-signed-url/posts').get(getPreSignedUrlFromBucket);
