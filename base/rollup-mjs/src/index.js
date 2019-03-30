import { h, render } from "@atomico/core";

function App() {
	return (
		<h1 shadowDom>
			<style>{`
				@import url('https://fonts.googleapis.com/css?family=Muli:400,900');
				:host{
					font-family: 'Muli', sans-serif;
					text-align:center;
				}
			`}</style>
			Ahora
		</h1>
	);
}

render(<App />, document.querySelector("#app"));
