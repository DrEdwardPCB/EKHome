export interface IWork {
	nature: "paper" | "application" | "art" | "libs";
	url?: string;
	name: string;
	description?: string;
}
export const workList = [
	{
		nature: "paper",
		url: "https://repository.hkust.edu.hk/ir/Record/1783.1-116060",
		name: "Mphil final thesis: Study of ligand and mechanically gated ion channels",
		description: "Covers the methodology and result of the study of 2 types of ION Channel, TRPV1 and TMC1",
	},
	{
		nature: "application",
		url: "https://github.com/DrEdwardPCB/Wedding-Proposal-Suite",
		name: "Wedding Proposal Suite",
		description: "The full stack self-hosted application that includes IoT backend server, iOS app, web portal and Database for carry out my own Wedding Proposal to my beloved Kiki",
	},
	{
		nature: "application",
		url: "https://github.com/DrEdwardPCB/KisledPassword",
		name: "Kisled Password",
		description: "An iOS application that helps store password securely in local memory using AES encryption",
	},
	{
		nature: "application",
		url: "https://github.com/DrEdwardPCB/REACTNATIVE-kisled-labcal",
		name: "Kisled Labcal",
		description: "An iOS application that store Solution Recipe and provide step on how to brew it in any volume. It is also a Scientific Calculator",
	},
	{
		nature: "application",
		url: "https://github.com/DrEdwardPCB/REACT-CV-generator",
		name: "CV generator",
		description: "A CV generator that uses JSON as a primary source of data",
	},
	{
		nature: "application",
		url: "https://github.com/DrEdwardPCB/JAVASCRIPT-Clustering",
		name: "JAVASCRIPT-Clustering",
		description: "A general purpose data clustering finder",
	},
	{
		nature: "application",
		url: "https://github.com/DrEdwardPCB/JAVASCRIPT-ImageProcessor",
		name: "JAVASCRIPT-ImageProcessor",
		description: "A simple image processor",
	},
	{
		nature: "application",
		url: "https://github.com/DrEdwardPCB/JAVA-FYPvesiCount-GUI",
		name: "JAVA-FYPvesiCount-GUI",
		description: "A simple java GUI that support counting on a image",
	},
	{
		nature: "libs",
		url: "https://github.com/DrEdwardPCB/python-taew",
		name: "python-taew",
		description: "a library used to label Elliott wave pattern",
	},
	{
		nature: "libs",
		url: "https://github.com/DrEdwardPCB/JAVA-Blade-Auto-MCplugin",
		name: "blade-auto",
		description: "a Java Minecraft Plugin that enable automate crafting pipeline for 1.12",
	},
];
