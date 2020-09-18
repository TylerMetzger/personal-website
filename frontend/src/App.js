import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.less";
import AOS from "aos";
import "aos/dist/aos.css";
import MainPage from "./views/MainPage/MainPage.js";
import NotFound from "./views/NotFound/NotFound.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
	const [toggled, setToggled] = useState(false);

	AOS.init();

	return (
		<div>
			<Header setToggled={setToggled} />
			<Switch>
				<Route exact path="/" render={() => <MainPage toggled={toggled} />} />
				<Route render={() => <NotFound toggled={toggled} />} />
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
