import { h, render } from "@atomico/core";
import { Element } from "@atomico/element";

class MyWc extends Element {
	render() {
		return <host>atomico</host>;
	}
}

customElements.define("my-wc", MyWc);

describe("Element Lifecycle", () => {
	it("Example component", () => {
		let node = document.createElement("my-wc");

		document.body.appendChild(node);

		assert(document.querySelector("my-wc").textContent, "atomico");
	});
});
