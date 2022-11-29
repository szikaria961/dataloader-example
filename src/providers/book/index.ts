import { Book } from "../../types";
import { books } from "../../data/books";

export const getBookById = (id: string): Book => {
  console.log(`Calling getBookById: ${id}`);

  return books.find((d) => d.id === id);
};

export const getBooksByIds = async (ids: string[]): Promise<Book[]> => {
  return ids.map((id) => getBookById(id));
};
