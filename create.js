#!/usr/bin/env node

const { template } = require("template-folder");
const prompts = require("prompts");
const path = require("path");

const Types = {
	wc: "wc",
	app: "app"
};

let dependencies = {
	core: `{
		"@atomico/core": "^1.4.x",
		"@atomico/router": "^0.1.x",
		"hostcss": "^0.0.x"
	}`,
	element: `{
		"@atomico/element": "^0.5.x"
	}`
};

async function autorun() {
	let step1;
	let step2 = { bundle: "rollup-wc" };
	let step3;
	let exit;
	let onCancel = () => {
		exit = true;
		console.log(":::cancel:::");
	};
	console.log("\nWelcome to Atomico\n");
	step1 = await prompts([
		{
			type: "select",
			name: "type",
			message: "Project Type",
			choices: [
				{ title: "Create application", value: Types.app },
				{ title: "Create web component", value: Types.wc },
				{
					title: "Exit",
					value: "exit"
				}
			]
		}
	]);
	if (step1.type == "exit") {
		onCancel();
		return;
	}
	if (step1.type == Types.app) {
		step2 = await prompts(
			[
				{
					type: "select",
					name: "dependencies",
					message: "bundle tool",
					choices: [
						{
							title:
								"@atomico/core + @atomico/router + hostcss(css-in-js) : Development outside web-components",
							value: dependencies.core
						},
						{
							title: "@atomico/element : Development within web-components",
							value: dependencies.element
						}
					]
				}
			],
			{ onCancel }
		);
		step2.bundle = "rollup-mjs";
	} else {
		step2.dependencies = dependencies.element;
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
			message: "Package description :"
		}
	];

	if (step1.type == Types.wc) {
		fieldsStep3.push(
			{
				type: "text",
				name: "author",
				message: "Package author :"
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

	step3 = await prompts(fieldsStep3, { onCancel });

	if (exit) return;

	let data = {
		...step1,
		...step2,
		...step3
	};

	let base = path.resolve(__dirname, "base/" + data.bundle);
	let dist = path.resolve(process.cwd(), data.name);

	await template(base, dist, data);

	console.log(`\nReady!, check the folder ${data.name}\n`);
}

autorun();
