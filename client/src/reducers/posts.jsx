import {CREATE, READ, DELETE, FETCH_ALL} from '../constant/actionTypes'

export default (blog=[], action) => {
  switch(action.type) {
    case FETCH_ALL:
      return action.payload;
    case READ:
      return blog.filter((blog)=>{
        blog.id === action.payload
      });
    case CREATE: 
     return [...blog, action.payload];
    case DELETE:
      return blog.filter((blog)=>{
        blog.id !== action.payload;
      })
    default:
      return blog;
  }
}