import { useParams, Route } from "react-router";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Quotes Details Page {params.quoteId}</h1>
      <Route path='/quotes/:quoteId/comments'>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
