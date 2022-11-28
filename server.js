import { createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import { schema } from '../dataloader-example/schema'

const PORT = process.env.PORT || 8000;
// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema })

// Pass it into a server to hook into request handlers.
const server = createServer(yoga)

// Start the server and you're done!
server.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}/graphql`)
});
