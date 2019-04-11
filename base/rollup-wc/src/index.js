import { h, render } from "@atomico/core";
import Element from "@atomico/element";

class Tag extends Element {
	render() {
		return (
			<host shadowDom>
				<style>{`
				@import url('https://fonts.googleapis.com/css?family=Muli:400,900');
				:host{
					font-family: 'Muli', sans-serif;
					font-size:50px;
					text-align:center;
				}
				`}</style>
				👋 ::customElement::
			</host>
		);
	}
}

customElements.define("::customElement::", Tag);
