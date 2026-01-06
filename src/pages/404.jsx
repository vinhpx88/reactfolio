import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, Frown } from "lucide-react";
import { Button } from "@/components/ui/button";

import NavBar from "@/components/common/navBar";
import Logo from "@/components/common/logo";
import INFO from "@/data/user";

const Notfound = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Helmet>
				<title>{`404 | ${INFO.main.title}`}</title>
				<meta name="description" content="Page not found" />
			</Helmet>

			<div className="min-h-screen bg-background flex flex-col">
				<NavBar />

				<main className="flex-1 flex items-center justify-center">
					<div className="container mx-auto px-4 max-w-5xl">
						<div className="text-center py-16">
							<div className="mb-8">
								<Logo width={80} link={false} />
							</div>
							<div className="space-y-4">
								<h1 className="text-6xl font-bold text-portfolio-primary dark:text-white flex items-center justify-center gap-4">
									404 <Frown className="h-12 w-12" />
								</h1>
								<h2 className="text-2xl font-semibold text-portfolio-secondary dark:text-gray-400">
									Page Not Found
								</h2>
								<p className="text-portfolio-tertiary dark:text-gray-500 max-w-md mx-auto">
									Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
								</p>
								<p className="text-sm text-portfolio-tertiary dark:text-gray-500 max-w-md mx-auto break-all">
									Requested URL: <span className="font-mono">{window.location.pathname}</span>
								</p>
							</div>
							<div className="mt-8">
								<Button asChild size="lg">
									<Link to="/" className="gap-2">
										<Home className="h-5 w-5" />
										Back to Home
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default Notfound;
