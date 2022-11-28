import { Book } from '../types'

export const books: Book[] = [
  {
    id: "1",
    name: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 14.99,
    description:
      "Two systems drive the way we think and make choices, Kahneman explains: System One is fast, intuitive, and emotional; System Two is slower, more deliberative, and more logical.",
  },
  {
    id: "2",
    name: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert Martin",
    price: 46,
    description:
      "Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.",
  },
];
