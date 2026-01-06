const INFO = {
	main: {
		title: "Vinh PHAM Portfolio",
		name: "Vinh PHAM.",
		email: "vinh2304@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/vinhpx88",
		linkedin: "https://linkedin.com/in/vinh-pham-258524115",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/BiMarvolo",
	},

	homepage: {
		title: "Senior Full-stack Software Developer.",
		description:
			"With 10+ years of experience, I specialize in Full-Stack Development, building scalable backend systems with Node.js, Next.js, and AWS, and crafting modern frontend applications using React and Angular. I have hands-on experience across web, mobile, and Windows platforms (WinUI, WPF), real-time communication protocols (Bluetooth LE, Serial, Modbus, WebSocket), and DevOps workflows including Infrastructure as Code and CI/CD.",
	},

	about: {
		title: "I'm Vinh PHAM. I live in Viet Nam and work as a senior full-stack developer.",
		description:
			[
				<>Provide <strong>projects solution & project estimation</strong>.</>,
				<>Implemented a <strong>pixel-perfect applications</strong> from <strong>Figma design</strong>.</>,
				<>Designing and developing <strong>secure, scalable, and real-time IoT applications</strong>.</>,
				<>Using <strong>NodeJS</strong> to built an application that provide <strong>secured connections, real-time commands</strong>, and deploying to IoT systems for <strong>devices provisioning, device commands</strong>, and other related functionalities.</>,
				<>Optimized application performance by <strong>refactoring code, improving database queries and leveraging caching</strong>.</>,
				<>Developed <strong>logging and monitoring systems</strong> to ensure system reliability and availability.</>,
			]
	},

	projects: [
		{
			title: "xPaaS",
			description:
				"An Internet of Things (IoT) project designed to provide comprehensive management solutions for users, clients, and devices, while also offering advanced data visualization capabilities for the collected device data.",
			stack: "AWS S3, AWS EC2, AWS Alarm, AWS SNS, Angular, SocketIO, NodeJS.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/typescript/typescript.png",
			screenshot: "/eolane-cloud-live.png",
			linkText: "View Project",
			link: "https://admin.e-biossun.com",
		},
		{
			title: "Biomotion",
			description:
				"The project serves as a comprehensive solution for clients to monitor their pergolas through both a mobile app and a web app.",
			stack: "Mobile Hybrid app (Cordova, Angular, Bootstrap, Android & iOS, BLE), NodeJS server app (Sailsjs, Angular, SocketIO), and another NodeJS gateway application. ",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/typescript/typescript.png",
			screenshot: "/biossun-dashboard.png",
			linkText: "View Project",
			link: "https://e-biossun.com",
		},
		{
			title: "Eolane Cloud",
			description:
				"This project is built for managing company | user | client | roles & rights.",
			stack: "ReactJS, Dynamodb, IaC (Sam & Terraform), AWS Cloudformation, AWS S3, AWS Cognito, AWS Userpool.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/typescript/typescript.png",
			screenshot: "/eolane-cloud-dashboard.png",
			linkText: "View Project",
			link: "https://cloud.eolane.com",
		},
		{
			title: "Diabeloop",
			description:
				"The medical project focuses on the critical task of recording and analyzing patients' data.",
			stack: "Android native, kotlin, BLE multiple connections, BLE data transfer, BLE simulation, AWS S3.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/kotlin/kotlin.png",
			linkText: "View Project",
			link: "",
		},
		{
			title: "Moto Watch",
			description:
				"An application that allows users to monitor their watches and receive notifications on their mobile devices.",
			stack: "android native, kotlin, BLE, Firebase.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/kotlin/kotlin.png",
			screenshot: "/moto-watch-live.png",
			linkText: "View Project",
			link: "https://motowatch.com/",
		},
		{
			title: "P-ONE",
			description:
				"This project for testing purposes, LCDBacklight, UsbProbe, Ethernet Download & Upload.",
			stack: "android native, kotlin, BLE",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/kotlin/kotlin.png",
			linkText: "View Project",
			link: "",
		},
		{
			title: "Harmony Hub Tool",
			description:
				"The IoT project centers around the recording and visualization of data from various devices through a dedicated pixel perfect Desktop application. ",
			stack: ".Net, WPF, InstallShield, Figma, Material Design, Modbus protocol, serial port communication, Klocwork static analysis. Mitigate the risk of security vulnerabilities",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/csharp/csharp.png",
			linkText: "View Project",
			link: "",
		},
		{
			title: "F2D",
			description:
				"The medical project focuses on the critical task of recording and analyzing patients' data through a dedicated Desktop application. ",
			stack: ".Net, WinUI, BLE",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/csharp/csharp.png",
			linkText: "View Project",
			link: "",
		},
		{
			title: "x2M",
			description:
				"This project aims to optimize and enhance bus services by implementing a real-time tracking system to monitor and manage bus schedules efficiently.",
			stack: "Java, DevOps, IaC - AWS Cloudformation, AWS Route53, AWS SNS, AWS SQS, ALARMS, Domains.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/java/java.png",
			linkText: "View Project",
			link: "https://b.eolane-fm.net/",
		},
		{
			title: "Budget Planner",
			description:
				"A personal project aims to budgeting for personal user, expense, category, etc...",
			stack: "Flutter, local database, provider, flutter_localizations, intl",
			logo: "https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png",
			linkText: "View Project",
			link: "https://play.google.com/store/apps/details?id=budget.offline.personal",
		}
	],
};

export default INFO;
