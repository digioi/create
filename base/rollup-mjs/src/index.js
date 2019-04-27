import { h, Element } from "@atomico/element";

class MyApp extends Element {
	render() {
		return (
			<host shadowDom>
				<style>{`
				@import url('https://fonts.googleapis.com/css?family=Muli:400,900');
				:host{
					font-family: 'Muli', sans-serif;
					text-align:center;
				}
			`}</style>
				👋 Atomico!
			</host>
		);
	}
}

customElements.define("my-app", MyApp);
