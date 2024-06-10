import React from "react";

function project_1() {
	return {
		date: "2018",
		title: "xPaaS",
		keywords: [
			"The Benefits of Cloud Computing",
		],
		style: `
				.project-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					margin-top: 20px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="project-content">
				<a target='_blank'
            rel='noopener noreferrer' href="https://adminbiossun.eolane-iot.net/">xPaaS Instance</a>
					<div className="paragraph">An Internet of Things (IoT) project designed to provide comprehensive management solutions for users, clients, and devices, while also offering advanced data visualization capabilities for the collected device data.</div>
					<div className="paragraph">My role: Fullstack, colaboration on API implementing & components on frontend</div>
					<img
						src="../xpaas-dashboard.png"
						alt="xpaas-dashboard"
						width={800}
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function project_2() {
	return {
		date: "2019",
		title: "Biomotion",
		keywords: [
		],
		style: `
				.project-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					margin-top: 20px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="project-content">
					<a target='_blank'
				rel='noopener noreferrer' href="https://e-biossun.com/">Production site</a>
					<div className="paragraph">The project serves as a comprehensive solution for clients to monitor their pergolas through both a mobile app and a web app. Additionally, it provides administrator and installer functionalities for maintaining hardware updates and managing clients and users. The system ensures seamless communication between all stakeholders, empowering clients with effective oversight of their pergola systems while facilitating efficient administration and maintenance processes for administrators and installers.</div>
					<div className="paragraph">Project Architecture</div>
					<img
						src="../biossun.png"
						alt="biossun-architecture"
						width={500}
						className="randImage"
					/>

					<div className="paragraph">Web Page UI Example</div>
					<img
						src="../biossun-dashboard.png"
						alt="biossun-dashboard"
						width={800}
						className="randImage"
					/>
					
				</div>
			</React.Fragment>
		),
	};
}

function project_3() {
	return {
		date: "2020",
		title: "Eolane Cloud",
		keywords: [
		],
		style: `
				.project-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					margin-top: 20px;
				}
				.mt-1 {
					margin-top: 20px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="project-content">
					<a target='_blank'
				rel='noopener noreferrer' href="https://cloud.eolane.com/">Production site</a>
					<div className="paragraph">This project is built for managing company | user | client, for demo only.</div>
					<div className="paragraph">Stack: ReactJS, Dynamodb, IaC (Sam & Terraform), AWS Cloudformation, AWS S3, AWS Cognito, AWS Userpool.</div>
					<div className="paragraph mt-1">Project Architecture</div>
					<img
						src="../eolane-cloud.png"
						alt="eolane-dashboard"
						width={500}
						className="randImage"
					/>

					<div className="paragraph mt-1">Example UI</div>
					<img
						src="../eolane-cloud-dashboard.png"
						alt="eolane-dashboard"
						width={800}
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function project_4() {
	return {
		date: "2021",
		title: "Diabeloop",
		keywords: [
		],
		style: `
				.project-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				`,
		body: (
			<React.Fragment>
				<div className="project-content">
					
					<div className="paragraph">The medical project focuses on the critical task of recording and analyzing patients' data. The primary purpose of this initiative is to facilitate seamless data acquisition, streamline dataset processing, enable user annotations, and ensure secure data uploads to the Amazon S3 storage service.</div>
					<div className="paragraph">Stack: Android native, kotlin, BLE multiple connections, BLE data transfer, BLE simulation, AWS S3.</div>
				</div>
			</React.Fragment>
		),
	};
}

function project_5() {
	return {
		date: "2022",
		title: "Moto Watch",
		keywords: [
		],
		style: `
				.project-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					margin-top: 20px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="project-content">
				<a target='_blank'
				rel='noopener noreferrer' href="https://play.google.com/store/apps/details?id=com.ebuynow.smartwatch">Play Store</a>
					<div className="paragraph">The mobile app project is specifically designed to cater to watch users, ensuring an optimal user experience. The primary objectives of this project are to provide comprehensive sleep tracking, activities monitoring, and facilitating scheduled exercise functionalities.</div>
					<div className="paragraph">Stack: android native, kotlin, BLE, Firebase.</div>
					
					<img
						src="../moto.png"
						alt="moto-watch-mobile"
						width={400}
						className="randImage"
					/>
					<img
						src="../moto-screen2.png"
						alt="moto-watch-mobile"
						width={400}
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function project_6() {
	return {
		date: "2019 & 2020",
		title: "P-ONE",
		keywords: [
		],
		style: `
				.project-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				`,
		body: (
			<React.Fragment>
				<div className="project-content">
					<div className="paragraph">This project for testing purposes, LCDBacklight, UsbProbe, Ethernet Download & Upload.</div>
				</div>
			</React.Fragment>
		),
	};
}

function project_7() {
	return {
		date: "2022 & 2023",
		title: "Harmony Hub Tool",
		keywords: [
		],
		style: `
				.project-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					margin-top: 20px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="project-content">
					<div className="paragraph">The mobile app project is specifically designed to cater to watch users, ensuring an optimal user experience. The primary objectives of this project are to provide comprehensive sleep tracking, activities monitoring, and facilitating scheduled exercise functionalities.</div>
					<div className="randImage">Stack: .Net, WPF, InstallShield, Figma, Material Design, Modbus protocol, serial port communication, Klocwork static analysis. Mitigate the risk of security vulnerabilities </div>
					<img
						src="../sensor.png"
						alt="sensor-harmony"
						width={300}
						className="randImage"
					/>
					<img
						src="../harmony-hub-tool.png"
						alt="harmony-hub-tool"
						width={800}
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function project_8() {
	return {
		date: "2023",
		title: "F2D",
		keywords: [
		],
		style: `
				.project-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					margin-top: 20px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="project-content">
					<div className="paragraph">The medical project focuses on the critical task of recording and analyzing patients' data through a dedicated Desktop application. </div>
					<img
						src="../f2d.png"
						alt="f2d"
						width={800}
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function project_9() {
	return {
		date: "2019",
		title: "x2M",
		keywords: [
		],
		style: `
				.project-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				`,
		body: (
			<React.Fragment>
				<div className="project-content">
					<div className="paragraph">This project aims to optimize and enhance bus services by implementing a real-time tracking system to monitor and manage bus schedules efficiently. The primary goal is to address and minimize lateness issues, providing a more reliable and punctual bus service to passengers. </div>
				</div>
			</React.Fragment>
		),
	};
}

function project_10() {
	return {
		date: "2024",
		title: "Budget Planner",
		keywords: [
		],
		style: `
				.project-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					margin-top: 20px;
				}

				.randImage2 {
					align-self: center;
					margin-left: 20px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="project-content">
				<a target='_blank'
				rel='noopener noreferrer' href="https://play.google.com/store/apps/details?id=budget.offline.personal">Play Store</a>
				
					<div className="paragraph">A personal project aims to budgeting for personal user, expense, category, etc... </div>
					<div className="randImage">
						<img
							src="../budget-add.png"
							alt="f2d"
							width={300}
							className="randImage"
						/>
						<img
							src="../budget-categories.png"
							alt="f2d"
							width={300}
							className="randImage2"
						/>
					</div>

					<div className="randImage">
						<img
							src="../budget-settings.png"
							alt="f2d"
							width={300}
							className="randImage"
						/>
						<img
							src="../budget-report.png"
							alt="f2d"
							width={300}
							className="randImage2"
						/>
					</div>
					
				</div>
			</React.Fragment>
		),
	};
}

const myprojects = [project_1, project_2, project_3, project_4, project_5, project_6, project_7, project_8, project_9, project_10];

export default myprojects;
