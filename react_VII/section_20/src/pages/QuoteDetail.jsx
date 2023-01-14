import { useParams, Route } from "react-router";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning react is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning!" },
  { id: "q3", author: "Gabriel", text: "Learning react is funtastic!" },
];

const QuoteDetail = () => {
  const [isHidded, setIsHidded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname.startsWith("/quotes/") &&
      !location.pathname.endsWith("/comments")
    ) {
      setIsHidded(false);
    }
  }, [location, setIsHidded]);

  const isHiddedHandler = () => {
    setIsHidded(true);
  };

  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <div className="centered">
        {!isHidded && (
          <Link
            onClick={isHiddedHandler}
            className="btn"
            to={`/quotes/${quote.id}/comments`}
          >
            Comments
          </Link>
        )}
      </div>

      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
