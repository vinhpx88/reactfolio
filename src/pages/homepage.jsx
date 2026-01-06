import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Facebook, Github, Mail } from "lucide-react";

import Logo from "@/components/common/logo";
import Footer from "@/components/common/footer";
import NavBar from "@/components/common/navBar";
import Works from "@/components/homepage/works";
import AllProjects from "@/components/projects/allProjects";
import Websites from "@/components/homepage/websites";

import INFO from "@/data/user";
import SEO from "@/data/seo";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid hsl(var(--border))" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="min-h-screen bg-background">
				<NavBar active="home" />

				<main className="container mx-auto px-4 max-w-5xl">
					{/* Logo with scroll effect */}
					<div className="flex justify-start pt-8 lg:pt-16">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					{/* Hero Section */}
					<div className="py-16 lg:py-24">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							{/* Left side - Text content */}
							<div className="space-y-6 order-2 lg:order-1">
								<h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-portfolio-primary dark:text-white leading-tight font-secondary">
									{INFO.homepage.title}
								</h1>

								<p className="text-portfolio-secondary dark:text-gray-400 leading-relaxed">
									{/* {INFO.homepage.description} */}
									{/* With 10+ years of experience, I specialize in Full-Stack Development, building scalable <strong>backend</strong> systems with Node.js, Next.js, and AWS, and crafting modern <strong>frontend</strong> applications using React and Angular. I have hands-on experience across web, <strong>mobile app</strong>, and Windows platforms (WinUI, WPF), real-time communication protocols (Bluetooth LE, Serial, Modbus, WebSocket), and DevOps workflows including Infrastructure as Code and CI/CD. */}
									With 10+ years of experience, I specialize in Full-Stack Development, with a strong focus on <strong>Backend Engineering</strong> and <strong>Frontend Architecture</strong>. I build scalable backend systems using Node.js, Next.js, and AWS, and craft modern, high-performance frontend applications with React and Angular.

									I have extensive experience delivering solutions across <strong>Web</strong>, <strong>Mobile Applications</strong>, and <strong>MacOS, Windows Platforms</strong>, working with real-time communication protocols (Bluetooth LE, Serial, Modbus, WebSocket), and implementing reliable <strong>DevOps workflows</strong>, including Infrastructure as Code and CI/CD pipelines.
								</p>
							</div>

							{/* Right side - Image */}
							<div className="order-1 lg:order-2">
								<div className="relative w-full max-w-md mx-auto lg:mx-0">
									<div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
										<img
											src="/homepage2.jpg"
											alt="Profile"
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Social Icons */}
						<div className="flex gap-4 mt-12">
							<a
								href={INFO.socials.facebook}
								target="_blank"
								rel="noreferrer"
								className="text-portfolio-secondary hover:text-portfolio-link dark:text-gray-400 dark:hover:text-portfolio-link transition-colors"
								aria-label="Facebook"
							>
								<Facebook className="h-6 w-6" />
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
								className="text-portfolio-secondary hover:text-portfolio-link dark:text-gray-400 dark:hover:text-portfolio-link transition-colors"
								aria-label="GitHub"
							>
								<Github className="h-6 w-6" />
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
								className="text-portfolio-secondary hover:text-portfolio-link dark:text-gray-400 dark:hover:text-portfolio-link transition-colors"
								aria-label="Email"
							>
								<Mail className="h-6 w-6" />
							</a>
						</div>

			{/* Websites developed (live) */}
			<div className="pt-12">
				<Websites />
			</div>
		</div>

		{/* Works Section */}
		<div className="py-16">
			<Works />
		</div>
		</main>

		<Footer />
	</div>
	</>
	);
};

export default Homepage;
