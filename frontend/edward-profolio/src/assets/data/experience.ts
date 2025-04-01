import dayjs from "dayjs";

export type IExperience = {
	start: Date;
	nature: "fulltime" | "parttime" | "intern" | "voluntary" | "freelance";
	end?: string | Date | null;
	title: string;
	role?: string | null;
	company: string;
	companyDesc?: string;
	jobDuty: [string, ...string[]];
};

export const ExperienceList: IExperience[] = [
	{
		start: dayjs()
			.set("year", 2024)
			.set("month", 3 - 1)
			.toDate(),
		end: dayjs()
			.set("year", 2025)
			.set("month", 3 - 1)
			.toDate(),

		nature: "fulltime",
		title: "Software Developer",
		role: "API Engineer",
		company: "Scotiabank",
		companyDesc: "One of the leading bank in North America",
		jobDuty: [
			"Developed Data streaming API using Java Spring boot that serves SaaS application used by more than 60+ operators and handle to fraud.",
			"Maintained and adding new features to IBM Financial Transaction Manager(FTM) which heavily relys on esql, IBM mq and IBM DB2. FTM orchestrate 50+ upstream downstream applications critical for the bank payment operation",
			"Onboaring API to GCP Atlas(GKE) and manage the helm chart for the deployment",
			"Negotiating with Network, Security and Businss user to ensure a secure API channel following OAuth standard",
			"Carry out secure connection with Enterprize Data Lake redis Oracle DB IBM DB2",
			"Preparing Demo frontend for the API using react next.js and tailwind",
		],
	},
	{
		start: dayjs()
			.set("year", 2024)
			.set("month", 2 - 1)
			.toDate(),
		end: dayjs()
			.set("year", 2024)
			.set("month", 8 - 1)
			.toDate(),

		nature: "freelance",
		title: "Senior Software Developer",
		role: "Senior Software Developer",
		company: "ExportAs",
		companyDesc: "Hong Kong based digital media and marketing agency",
		jobDuty: [
			"Gather software requirements from project manager, coordinate with designer and junior developer",
			"Design and Develop secured Saas application using nextjs, supabase, keystonejs",
			"Manage project infrastructure using terraform",
		],
	},
	{
		start: dayjs()
			.set("year", 2023)
			.set("month", 10 - 1)
			.toDate(),
		end: dayjs()
			.set("year", 2025)
			.set("month", 1 - 1)
			.toDate(),

		nature: "freelance",
		title: "Software Developer",
		role: "Software Developer",
		company: "Crypto Mattock Limited",
		companyDesc: "Hong Kong based crypto currency hashrate rental platform",
		jobDuty: [
			"Manage to collaborate with a team of 3 developers to deliver a platform for Mining rig rental using SCRUM",
			"Developed and maintain an secured public web portal using React and expressJS interfacing multiple internal and external Restful API",
			"Create and review test case for e2e test and unit test using cypress and jest respectively",
			"Manage CICD workflow using AWS ECS and github action",
		],
	},
	{
		start: dayjs()
			.set("year", 2022)
			.set("month", 6 - 1)
			.toDate(),
		end: dayjs()
			.set("year", 2023)
			.set("month", 9 - 1)
			.toDate(),

		nature: "fulltime",
		title: "Analyst, Technology",
		role: "Full Stack Developer",
		company: "BTIG HK Ltd",
		companyDesc: "US based financial service provider",
		jobDuty: [
			"Developed a robust desktop application using ElectronJS and React that is currently used by 30+ professional traders. The application provides reference to market data and resources, allowing traders to execute trades quickly and efficiently",
			"Developed and maintain an internal web portal that provides market insights to 50+ APAC based professional traders, while also enabling the operations and compliance teams to monitor events more closely. The portal is highly secure and provides real-time updates, thanks to its integration with various APIs such as websockets, gRPC, RESTful, and Kafka",
			"Integrated the company's internal system with Bloomberg IB chatbot via Bloomberg API, enabling traders to receive real-time updates on market conditions and execute trades directly from the chatbot",
			"Automated daily reports, streamlining the reporting process and reducing the risk of errors. This has greatly improved the efficiency of the operations team and saved valuable time.",
		],
	},
	{
		start: dayjs()
			.set("year", 2021)
			.set("month", 8 - 1)
			.toDate(),
		end: dayjs()
			.set("year", 2022)
			.set("month", 5 - 1)
			.toDate(),
		nature: "fulltime",
		title: "Junior Full Stack developer",
		role: "Full Stack",
		company: "Gritus Technology Ltd",
		companyDesc: "HK based Smart Vending Machine provider",
		jobDuty: [
			"Maintained an ElectronJS-based VueJS frontend vending machine app used by over 300+ machines in Hong Kong",
			"Developed and maintained a React Native based customer loyalty mobile app used by 1,000+ active users to redeem vending machine products and vouchers",
			"Maintained an internal reporting dashboard that provides real-time updates on machine performance and sales figures",
			"Collaborated closely with the UI/UX designer to create intuitive and user-friendly applications",
		],
	},
	{
		start: dayjs()
			.set("year", 2020)
			.set("month", 11 - 1)
			.toDate(),
		end: dayjs()
			.set("year", 2021)
			.set("month", 7 - 1)
			.toDate(),
		nature: "voluntary",
		title: "Web Developer",
		company: "USThing",
		companyDesc: "HKUST student self started project to bring UST service more accessible to both stuff and student",
		jobDuty: ["Develop and add functionality to the marketing website for USThing", "Collaborate with UST Stuff and team member to secure the website"],
	},
	{
		start: dayjs()
			.set("year", 2019)
			.set("month", 6 - 1)
			.toDate(),
		end: dayjs()
			.set("year", 2023)
			.set("month", 9 - 1)
			.toDate(),
		nature: "parttime",
		title: "Programmer",
		company: "Coding 101",
		companyDesc: "HK based STEAM education provider",
		jobDuty: ["Design and build Minecraft game map for education purpose", "Deliver information about STEAM to general publicity", "Develop and maintain event application"],
	},
	{
		start: dayjs().set("year", 2018).set("month", 6).toDate(),
		end: dayjs().set("year", 2018).set("month", 9).toDate(),
		nature: "intern",
		title: "Summer Internship",
		role: "programmer and tutor",
		company: "Coding 101",
		companyDesc: "HK based STEAM education provider",
		jobDuty: [
			"Develop application used for STEAM competition",
			"Host STEAM tutorial class covering minecraft, microbit, Tello, mbot for both private class and in school classes",
			"Assist in developing new tutorial material",
		],
	},
	{
		start: dayjs().set("year", 2015).set("month", 6).toDate(),
		end: dayjs().set("year", 2015).set("month", 9).toDate(),
		nature: "parttime",
		title: "IT Assistant",
		company: "JRC",
		companyDesc: "HK based IT infrastructure provider",
		jobDuty: ["Assist in Network setup in client company", "Assist in configuration of client server during server migration"],
	},
];
