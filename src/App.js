import { AnimatePresence } from "framer-motion";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./page/Home";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<AnimatePresence exitBeforeEnter>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</AnimatePresence>
			</Layout>
		</BrowserRouter>
	);
}

export default App;