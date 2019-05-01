import { h, render, useEffect } from "@atomico/core";
import styled from "hostcss/atomico";

let View = styled("section")`
	@import url("https://fonts.googleapis.com/css?family=Muli:400,900");
	font-family: "Muli", sans-serif;
	text-align: center;
	padding: 50px;
`;

function App() {
	useEffect(() => {
		console.log("App mounted");
	});
	return <View>👋 Atomico!</View>;
}

render(<App />, document.querySelector("#app"));
