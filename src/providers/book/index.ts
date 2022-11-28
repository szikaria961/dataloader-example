import { Book } from "../../types";
import { books } from "../../data/books";

export const getBookById = (id: string): Book => {
  console.log(`Calling getBookById: ${id}`);

  return books.find((d) => d.id === id);
};
