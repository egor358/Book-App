import { v4 as uuidv4 } from 'uuid';
export const createBookWidthId = (book,sorce)=>{
     return {
        ...book,
        id:uuidv4(),
        isFavorite:false,
        sorce 

     }
}
