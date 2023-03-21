import { Category } from "./category";

export interface Announcement {
    id:string;
    title: string,
    author: string, 
    message: string,
    category:Category,
    imageUrl:string;
}
