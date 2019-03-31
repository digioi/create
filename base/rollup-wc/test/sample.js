import { h, render } from "@atomico/core";
import { Element } from "@atomico/element";

class Tag extends Element {
	render() {
		return <host>atomico</host>;
	}
}

customElements.define("::customElement::", Tag);

describe("Element Lifecycle", () => {
	it("Example component", () => {
		let node = document.createElement("::customElement::");

		document.body.appendChild(node);

		assert(document.querySelector("::customElement::").textContent, "atomico");
	});
});
