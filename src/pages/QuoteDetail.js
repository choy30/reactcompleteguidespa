import React, { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
	{ id: "q1", author: "auth1", text: "text1" },
	{ id: "q2", author: "auth2", text: "text2" },
	{ id: "q3", author: "auth3", text: "text3" },
	{ id: "q4", author: "auth4", text: "text4" },
	{ id: "q5", author: "auth5", text: "text5" },
	{ id: "q6", author: "auth6", text: "text6" },
];

const QuoteDetail = () => {
	const match = useRouteMatch();
	const params = useParams();

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	if (!quote) {
		return <p>No quote found!</p>;
	}

	return (
		<Fragment>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={match.path} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>

			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
