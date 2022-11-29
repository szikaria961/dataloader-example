# Example used for Dataloader Blog Post

Coding example to show how dataLoader can help minimize calls beings made to your database by batching requests

## Installation

```
git clone https://github.com/szikaria961/dataloader-example.git
cd dataloader-example
npm install
```

## Usage

```
npm start
```

Then open [`http://localhost:8000/graphql`](http://localhost:8000/graphql) and use Yoga Graphiql to test books query.

Run the following query:

```
{
  books {
    id
    name
    price
    description
    author
  }
}
```

Then you'll get back a nested response like this:

```
{
  "data": {
    "books": [
      {
        "id": "1",
        "name": "Thinking, Fast and Slow",
        "price": "14.99",
        "description": "Two systems drive the way we think and make choices, Kahneman explains: System One is fast, intuitive, and emotional; System Two is slower, more deliberative, and more logical.",
        "author": "Daniel Kahneman"
      },
      {
        "id": "2",
        "name": "Clean Code: A Handbook of Agile Software Craftsmanship",
        "price": "46",
        "description": "Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.",
        "author": "Robert Martin"
      }
    ]
  }
}
```

## Development

```
npm install -g nodemon
npm run start:watch
```

## License

MIT
