import { users } from '@prisma/client';
import { AlbumModel } from './album.model';

export interface UserModel extends users {
  albums?: AlbumModel[];
}
