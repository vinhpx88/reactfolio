import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

import INFO from "@/data/user";

const Websites = () => {
	// Filter projects that have live website links (excluding app store links)
	const websites = INFO.projects.filter(
		(p) => p.link &&
		p.link.startsWith("http") &&
		!p.link.includes("play.google.com") &&
		!p.link.includes("apps.apple.com")
	);

	if (!websites.length) return null;

	return (
		<section className="py-8">
			<h2 className="text-3xl font-bold text-portfolio-primary dark:text-white mb-2 font-secondary">
				Live Websites
			</h2>
			<p className="text-portfolio-secondary dark:text-gray-400 mb-8">
				Production websites I've developed and deployed — click to visit.
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{websites.map((project, index) => (
					<Card
						key={index}
						className="group overflow-hidden border border-border dark:border-border hover:shadow-lg transition-all duration-300"
					>
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="block"
							aria-label={`Visit ${project.title}`}
						>
							{/* Screenshot/Image Section */}
							<div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
								{project.screenshot ? (
									<img
										src={project.screenshot}
										alt={`${project.title} screenshot`}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									/>
								) : (
									<div className="w-full h-full flex items-center justify-center">
										<img
											src={project.logo}
											alt={`${project.title} logo`}
											className="h-16 w-16 object-contain opacity-50"
										/>
									</div>
								)}

								{/* Overlay on hover */}
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
									<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-gray-900 rounded-full p-3 shadow-lg">
										<ExternalLink className="h-5 w-5 text-portfolio-link" />
									</div>
								</div>
							</div>

							{/* Content Section */}
							<div className="p-4 space-y-2">
								<h3 className="text-lg font-semibold text-portfolio-primary dark:text-white group-hover:text-portfolio-link dark:group-hover:text-portfolio-link transition-colors">
									{project.title}
								</h3>
								<p className="text-sm text-portfolio-secondary dark:text-gray-400 line-clamp-2">
									{project.description}
								</p>
								<div className="flex items-center gap-2 text-xs text-portfolio-link pt-2">
									<span className="font-medium">Visit site</span>
									<ExternalLink className="h-3 w-3" />
								</div>
							</div>
						</a>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Websites;
