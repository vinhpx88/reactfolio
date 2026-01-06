import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import NavBar from "@/components/common/navBar";
import Footer from "@/components/common/footer";
import Logo from "@/components/common/logo";

import INFO from "@/data/user";
import myProjects from "@/data/projects";

const ReadProject = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const project = myProjects[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [project]);

	if (!project) {
		return null;
	}

	const projectData = project();

	return (
		<>
			<Helmet>
				<title>{`${projectData.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={projectData.description} />
				<meta name="keywords" content={projectData.keywords.join(", ")} />
			</Helmet>

			{/* Inject custom project styles if they exist */}
			{projectData.style && (
				<style dangerouslySetInnerHTML={{ __html: projectData.style }} />
			)}

			<div className="min-h-screen bg-background">
				<NavBar />

				<main className="container mx-auto px-4 max-w-4xl py-16">
					<div className="mb-8">
						<Logo width={46} />
					</div>

					{/* Back Button */}
					<div className="mb-6">
						<Button
							variant="ghost"
							onClick={() => navigate(-1)}
							className="gap-2"
						>
							<ArrowLeft className="h-4 w-4" />
							Back
						</Button>
					</div>

					{/* Project Content */}
					<article className="space-y-6">
						<div>
							<Badge variant="outline" className="mb-4">
								{projectData.date}
							</Badge>
							<h1 className="text-4xl font-bold text-portfolio-primary dark:text-white font-secondary">
								{projectData.title}
							</h1>
						</div>

						<div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-portfolio-primary dark:prose-headings:text-white prose-a:text-portfolio-link prose-strong:text-portfolio-primary dark:prose-strong:text-white">
							{projectData.body}
						</div>
					</article>
				</main>

				<Footer />
			</div>
		</>
	);
};

export default ReadProject;
