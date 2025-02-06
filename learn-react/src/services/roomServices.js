import { del, get, post } from "../utils/requests"

export const createRoom = async(options) => {
  const result = await post("rooms",options);
  return result;
};


export const bookRoom = async(options) => {
  const result = await post("book-room",options);
  return result;
};

export const getAllRoom = async() => {
  const result = await get("rooms");
  return result;
}

export const deleteRoom = async(id) =>{
  const result = await del(`rooms/${id}`);
  return result;
}
