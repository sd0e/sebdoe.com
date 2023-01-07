import React, { useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./Layout";
import Home from "../../page/Home";
import Overview from '../../page/Overview';
import markdown from '../../articles/Overview.md';

function PageRoutes() {
	const location = useLocation();

	const [articleText, setArticleText] = useState(false);

	useEffect(() => {
		fetch(markdown)
			.then(res => res.text())
			.then(text => setArticleText(text))
	});

	return (
		<Layout>
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<Overview articleText={articleText} section="about" />} />
					<Route path="/contact" element={<Overview articleText={articleText} section="contact" />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</AnimatePresence>
		</Layout>
	);
}

export default PageRoutes;