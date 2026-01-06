import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Mail } from "lucide-react";

import NavBar from "@/components/common/navBar";
import Footer from "@/components/common/footer";
import Logo from "@/components/common/logo";
import Socials from "@/components/about/socials";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import INFO from "@/data/user";
import SEO from "@/data/seo";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="min-h-screen bg-background">
				<NavBar />

				<main className="container mx-auto px-4 max-w-5xl py-16">
					<div className="mb-8">
						<Logo width={46} />
					</div>

					<div className="space-y-8">
						<div>
							<h1 className="text-4xl font-bold text-portfolio-primary dark:text-white mb-4 font-secondary">
								Let's Get in Touch
							</h1>
							<p className="text-lg text-portfolio-secondary dark:text-gray-400 leading-relaxed max-w-3xl">
								Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions.
								If you have a specific question or comment, please feel free to email me directly at{" "}
								<a
									href={`mailto:${INFO.main.email}`}
									className="text-portfolio-link hover:underline font-medium"
								>
									{INFO.main.email}
								</a>
								. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods.
							</p>
						</div>

						<Card className="max-w-2xl">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Mail className="h-5 w-5 text-portfolio-link" />
									Email Me
								</CardTitle>
								<CardDescription>
									The best way to reach me
								</CardDescription>
							</CardHeader>
							<CardContent>
								<a
									href={`mailto:${INFO.main.email}`}
									className="text-2xl font-semibold text-portfolio-link hover:underline"
								>
									{INFO.main.email}
								</a>
							</CardContent>
						</Card>

						<div>
							<h2 className="text-2xl font-semibold text-portfolio-primary dark:text-white mb-4">
								Connect on Social Media
							</h2>
							<Socials />
						</div>
					</div>
				</main>

				<Footer />
			</div>
		</>
	);
};

export default Contact;
