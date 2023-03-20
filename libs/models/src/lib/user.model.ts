import { users } from '@prisma/client';
import { Album } from './album.model';

export interface UserModel extends users {
  albums?: Album[];
}
