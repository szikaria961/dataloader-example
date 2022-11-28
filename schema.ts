import { createSchema } from 'graphql-yoga'
import { books } from './src/data/books';
import { getBookById } from './src/providers/book'; 

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      book(id: ID!): Book!
      books: [Book!]!
    }
    type Book {
      id: ID!
      name: String!
      author: String!
      price: String!
      description: String!
    }
  `,
  resolvers: {
    Query: {
      book: (_, { id }) => ({ id }),
      books: () => books.map((d) => ({ id: d.id })),
    },
    Book: {
      name: async ({ id }) => {
        const { name } = getBookById(id);

        return name;
      },
      author: async ({ id }) => {
        const { author } = getBookById(id);

        return author;
      },
      price: async ({ id }) => {
        const { price } = getBookById(id);

        return price;
      },
      description: async ({ id }) => {
        const { description } = getBookById(id);

        return description;
      },
    },
  },
});