import { gql } from "@apollo/client";
import client from "../apolloClient";
import LikeBookResponse from "../models/responses/book.response.model";

class BookService {
  async likeBook(bookId: number): Promise<boolean> {
    try {
      const { data } = await client.mutate<LikeBookResponse>({
        mutation: gql`
          mutation likeBook($likeBookId: Float!) {
            likeBook(bookId: $likeBookId)
          }
        `,
        variables: {
          likeBookId: bookId
        }
      });

      return (data as LikeBookResponse).likeBook;
    } catch(e) {
      console.log(e);
      return false;
    }
  }
};

export default BookService;