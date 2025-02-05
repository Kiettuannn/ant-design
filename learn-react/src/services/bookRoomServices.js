import {post} from "../utils/requests"


export const bookRoom = async(options) => {
  const result = await post("book-room",options);
  return result;
};