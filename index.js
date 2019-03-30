const { template } = require("template-folder");
const prompts = require("prompts");

const Types = {
	wc: "wc",
	app: "app"
};

const Bundle = {
	rollup: "rollup",
	parcel: "parcel"
};

async function autorun() {
	let step1,
		step2 = { bundle: Bundle.rollup },
		step3;

	step1 = await prompts([
		{
			type: "select",
			name: "type",
			message: "Project Type",
			choices: [
				{ title: "Application", value: Types.app },
				{ title: "Web Component", value: Types.wc }
			]
		}
	]);
	if (step1.type == Types.app) {
		step2 = await prompts([
			{
				type: "select",
				name: "bundle",
				message: "bundle tool",
				choices: [
					{
						title: "Rollup : base configuration for modern browsers",
						value: Bundle.rollup
					},
					{
						title: "Parceljs : base configuration for generic browsers",
						value: Bundle.parcel
					}
				]
			}
		]);
	}

	let fieldsStep3 = [
		{
			type: "text",
			name: "name",
			message: "Package name :",
			validate(value) {
				if (/^[\w\-\/\@]+$/g.test(value)) {
					return true;
				} else {
					return "name of package invalid";
				}
			}
		},
		{
			type: "text",
			name: "description",
			message: "description :"
		}
	];

	if (step1.type == "app") {
	} else {
		fieldsStep3.push(
			{
				type: "text",
				name: "author",
				message: "author :"
			},
			{
				type: "text",
				name: "customElement",
				message: "custom element name:",
				validate(value) {
					if (/\w+(-){1}\w+/g.test(value)) {
						return true;
					} else {
						return "The name of the custom Element must comply with the standard format";
					}
				}
			}
		);
	}

	step3 = await prompts(fieldsStep3);
}

autorun();
