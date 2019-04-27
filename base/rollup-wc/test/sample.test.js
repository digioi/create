import { Element, h } from "@atomico/element";
import { scope } from "./utils";

class Tag extends Element {
	render() {
		return <host>atomico</host>;
	}
}

customElements.define("{{customElement}}", Tag);

describe("Element Lifecycle", () => {
	it("Example component", async done => {
		let node = scope("<{{customElement}}></{{customElement}}>");

		await node.mounted;

		expect(node.textContent).toBe("atomico");

		done();
	});
});
