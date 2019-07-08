import ApolloClient from "apollo-boost";
import { createUploadLink } from 'apollo-upload-client';

// Create a link that can upload blob file, mostly for image purpose
const link = createUploadLink({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
})

export const client = new ApolloClient({
  link
});