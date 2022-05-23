import React from "react";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
	{ id: "q1", author: "auth1", text: "text1" },
	{ id: "q2", author: "auth2", text: "text2" },
	{ id: "q3", author: "auth3", text: "text3" },
	{ id: "q4", author: "auth4", text: "text4" },
	{ id: "q5", author: "auth5", text: "text5" },
	{ id: "q6", author: "auth6", text: "text6" },
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES}/>;
};

export default AllQuotes;
