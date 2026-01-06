import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import NavBar from "@/components/common/navBar";
import Footer from "@/components/common/footer";
import Logo from "@/components/common/logo";
import Socials from "@/components/about/socials";

import INFO from "@/data/user";
import SEO from "@/data/seo";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="min-h-screen bg-background">
				<NavBar />

				<main className="container mx-auto px-4 max-w-5xl py-16">
					<div className="mb-8">
						<Logo width={46} />
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
						{/* Left side - Text content */}
						<div className="space-y-6 order-2 lg:order-1">
							<h1 className="text-4xl font-bold text-portfolio-primary dark:text-white font-secondary">
								{INFO.about.title}
							</h1>

							<div className="space-y-4">
								{INFO.about.description.map((item, index) => (
									<p
										key={index}
										className="text-lg text-portfolio-secondary dark:text-gray-400 leading-relaxed flex gap-3"
									>
										<span className="font-semibold text-portfolio-link flex-shrink-0">
											{index + 1}.
										</span>
										<span>{item}</span>
									</p>
								))}
							</div>

							<div className="pt-6">
								<h2 className="text-xl font-semibold text-portfolio-primary dark:text-white mb-4">
									Connect with me
								</h2>
								<Socials />
							</div>
						</div>

						{/* Right side - Image */}
						<div className="order-1 lg:order-2">
							<div className="relative w-full max-w-md mx-auto lg:mx-0">
								<div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
									<img
										src="/about.jpg"
										alt={INFO.main.name}
										className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
									/>
								</div>
							</div>
						</div>
					</div>
				</main>

				<Footer />
			</div>
		</>
	);
};

export default About;
