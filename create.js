#!/usr/bin/env node

const { template } = require("template-folder");
const prompts = require("prompts");
const path = require("path");

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
		step2 = { bundle: Bundle.rollup + "-wc" },
		step3;
	console.log("\nWelcome to Atomico\n");
	step1 = await prompts([
		{
			type: "select",
			name: "type",
			message: "Project Type",
			choices: [
				{ title: "Application", value: Types.app },
				{ title: "Web Component", value: Types.wc },
				{
					title: "Exit",
					value: "exit"
				}
			]
		}
	]);
	if (step1.type == "exit") {
		console.log("");
		return;
	}
	if (step1.type == Types.app) {
		step2 = await prompts([
			{
				type: "select",
				name: "bundle",
				message: "bundle tool",
				choices: [
					{
						title: "Rollup : base configuration for modern browsers",
						value: Bundle.rollup + "-mjs"
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

	if (step1.type == Types.wc) {
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

	let data = {
			...step1,
			...step2,
			...step3
		},
		base = path.resolve(__dirname, "base/" + data.bundle),
		dist = path.resolve(process.cwd(), data.name);

	await template(base, dist, data);

	console.log(`\nReady!, check the folder ${data.name}\n`);
}

autorun();
