import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const NavBar = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	const navItems = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Projects", path: "/projects" },
		{ name: "Contact", path: "/contact" },
	];

	const NavLinks = ({ mobile = false, onLinkClick = () => {} }) => (
		<ul
			className={cn(
				"flex gap-6",
				mobile ? "flex-col space-y-3" : "flex-row items-center"
			)}
		>
			{navItems.map((item) => (
				<li key={item.path}>
					<Link
						to={item.path}
						onClick={onLinkClick}
						className={cn(
							"text-sm font-medium transition-colors hover:text-portfolio-link relative py-2",
							currentPath === item.path
								? "text-portfolio-primary dark:text-white font-semibold"
								: "text-portfolio-secondary dark:text-gray-400"
						)}
					>
						{item.name}
						{currentPath === item.path && (
							<span className="absolute bottom-0 left-0 right-0 h-0.5 bg-portfolio-link"></span>
						)}
					</Link>
				</li>
			))}
		</ul>
	);

	return (
		<nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
				{/* Desktop Navigation */}
				<div className="hidden md:flex md:flex-1 md:justify-center">
					<NavLinks />
				</div>

				{/* Theme Toggle - Desktop */}
				<div className="hidden md:flex">
					<ThemeToggle />
				</div>

				{/* Mobile Navigation */}
				<div className="flex md:hidden w-full items-center justify-between">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="w-64">
							<div className="mt-6">
								<NavLinks mobile onLinkClick={() => {}} />
							</div>
						</SheetContent>
					</Sheet>
					<ThemeToggle />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
