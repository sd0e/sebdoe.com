import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./Layout";
import Home from "../../page/Home";
import Nav from "../../page/Nav";
import About from "../../page/About";

function PageRoutes() {
	const location = useLocation();

	return (
		<Layout>
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/nav" element={<Nav />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</AnimatePresence>
		</Layout>
	);
}

export default PageRoutes;