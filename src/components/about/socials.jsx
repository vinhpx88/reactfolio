import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import INFO from "@/data/user";

const Socials = () => {
	const socials = [
		{
			name: "GitHub",
			url: INFO.socials.github,
			icon: Github,
			label: "Follow on GitHub",
		},
		{
			name: "LinkedIn",
			url: INFO.socials.linkedin,
			icon: Linkedin,
			label: "Follow on LinkedIn",
		},
		{
			name: "Email",
			url: `mailto:${INFO.main.email}`,
			icon: Mail,
			label: INFO.main.email,
		},
	];

	return (
		<TooltipProvider>
			<div className="flex flex-wrap gap-3">
				{socials.map((social) => {
					const Icon = social.icon;
					return (
						<Tooltip key={social.name}>
							<TooltipTrigger asChild>
								<Button
									variant="outline"
									size="icon"
									asChild
									className="hover:bg-portfolio-link hover:text-white hover:border-portfolio-link transition-all"
								>
									<a
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Icon className="h-5 w-5" />
										<span className="sr-only">{social.label}</span>
									</a>
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>{social.label}</p>
							</TooltipContent>
						</Tooltip>
					);
				})}
			</div>
		</TooltipProvider>
	);
};

export default Socials;
