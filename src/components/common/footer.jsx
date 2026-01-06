import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import INFO from "@/data/user";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full border-t border-border mt-16">
			<div className="container mx-auto px-4 py-8 max-w-5xl">
				<Separator className="mb-6" />
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="text-sm text-portfolio-secondary dark:text-gray-400">
						© {currentYear} {INFO.main.name}. All rights reserved.
					</div>
					<nav className="flex gap-6">
						<Link
							to="/"
							className="text-sm text-portfolio-secondary hover:text-portfolio-link dark:text-gray-400 dark:hover:text-portfolio-link transition-colors"
						>
							Home
						</Link>
						<Link
							to="/about"
							className="text-sm text-portfolio-secondary hover:text-portfolio-link dark:text-gray-400 dark:hover:text-portfolio-link transition-colors"
						>
							About
						</Link>
						<Link
							to="/projects"
							className="text-sm text-portfolio-secondary hover:text-portfolio-link dark:text-gray-400 dark:hover:text-portfolio-link transition-colors"
						>
							Projects
						</Link>
						<Link
							to="/contact"
							className="text-sm text-portfolio-secondary hover:text-portfolio-link dark:text-gray-400 dark:hover:text-portfolio-link transition-colors"
						>
							Contact
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
