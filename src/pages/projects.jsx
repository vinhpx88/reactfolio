import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import NavBar from "@/components/common/navBar";
import Footer from "@/components/common/footer";
import Logo from "@/components/common/logo";
import AllProjects from "@/components/projects/allProjects";

import INFO from "@/data/user";
import SEO from "@/data/seo";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
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
								Things I've Made
							</h1>
							<p className="text-lg text-portfolio-secondary dark:text-gray-400 leading-relaxed max-w-3xl">
								I've worked on a variety of projects over the years and I'm proud of the progress I've made.
								Here are some of the projects I've built, from web applications to open-source contributions.
							</p>
						</div>

						<AllProjects />
					</div>
				</main>

				<Footer />
			</div>
		</>
	);
};

export default Projects;
