import { Briefcase } from "lucide-react";
import Card from "../common/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Works = () => {
	const workExperience = [
		{
			image: "/emsa.jpg",
			title: "Emsa technology",
			subtitle: "Senior Software Engineer",
			duration: "2018 - Present",
		},
		{
			image: "/emsa.jpg",
			title: "Emsa technology",
			subtitle: "Software Engineer",
			duration: "2016 - 2018",
		},
		{
			image: "/tma.png",
			title: "TMA Solution",
			subtitle: "Software Engineer",
			duration: "2015 - 2016",
		},
	];

	return (
		<Card
			icon={<Briefcase className="h-6 w-6" />}
			title="Work Experience"
			body={
				<div className="space-y-6">
					{workExperience.map((work, index) => (
						<div key={index} className="flex items-start gap-4">
							<Avatar className="h-12 w-12">
								<AvatarImage src={work.image} alt={work.title} />
								<AvatarFallback className="bg-portfolio-link text-white">
									{work.title.charAt(0)}
								</AvatarFallback>
							</Avatar>
							<div className="flex-1">
								<h4 className="font-semibold text-portfolio-primary dark:text-white">
									{work.title}
								</h4>
								<p className="text-sm text-portfolio-secondary dark:text-gray-400">
									{work.subtitle}
								</p>
								<p className="text-xs text-portfolio-tertiary dark:text-gray-500 mt-1">
									{work.duration}
								</p>
							</div>
						</div>
					))}
				</div>
			}
		/>
	);
};

export default Works;
