import { Link } from "react-router-dom";
import { ExternalLink, ChevronRight } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Project = ({ logo, screenshot, title, description, stack, linkText, link }) => {
	const isExternal = link?.startsWith("http");
	const stackArray = stack?.split(",").map((s) => s.trim()) || [];

	return (
		<Card className="flex flex-col h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
			{/* Thumbnail/Screenshot Section */}
			{screenshot && (
				<div className="relative w-full h-40 bg-gray-100 dark:bg-gray-800 overflow-hidden group/image">
					<img
						src={screenshot}
						alt={`${title} preview`}
						className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-500"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
				</div>
			)}

			<CardHeader>
				<div className="flex items-start gap-4">
					<Avatar className="h-12 w-12 flex-shrink-0">
						<AvatarImage src={logo} alt={title} />
						<AvatarFallback className="bg-portfolio-link text-white">
							{title.charAt(0)}
						</AvatarFallback>
					</Avatar>
					<div className="flex-1 min-w-0">
						<CardTitle className="text-xl text-portfolio-primary dark:text-white">
							{title}
						</CardTitle>
					</div>
				</div>
			</CardHeader>
			<CardContent className="flex-1">
				<CardDescription className="text-portfolio-secondary dark:text-gray-400 mb-4">
					{description}
				</CardDescription>
				<div className="flex flex-wrap gap-2">
					{stackArray.slice(0, 3).map((tech, idx) => (
						<Badge key={idx} variant="secondary" className="text-xs">
							{tech}
						</Badge>
					))}
					{stackArray.length > 3 && (
						<Badge variant="outline" className="text-xs">
							+{stackArray.length - 3} more
						</Badge>
					)}
				</div>
			</CardContent>
			<CardFooter>
				{isExternal ? (
					<a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
						<Button variant="outline" className="w-full group">
							{linkText}
							<ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
						</Button>
					</a>
				) : (
					<Link to={link} className="w-full">
						<Button variant="outline" className="w-full group">
							{linkText}
							<ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
						</Button>
					</Link>
				)}
			</CardFooter>
		</Card>
	);
};

export default Project;
