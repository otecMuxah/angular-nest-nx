
import {Prisma} from '@prisma/client'
// import {Albums} from '../../albums/entities/albums.entity'


export class Users {
  id: number ;
name: string ;
username: string ;
email: string ;
address: Prisma.JsonValue  | null;
phone: string  | null;
website: string  | null;
company: Prisma.JsonValue  | null;
albums?: any[] ;
}
