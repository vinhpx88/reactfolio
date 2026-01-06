import {
	Card as ShadCard,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const Card = ({ icon, title, body }) => {
	return (
		<ShadCard className="hover:shadow-lg transition-shadow duration-300">
			<CardHeader>
				<div className="flex items-center gap-4">
					<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-portfolio-link/10 text-portfolio-link">
						{icon}
					</div>
					<CardTitle className="text-xl font-semibold text-portfolio-primary dark:text-white">
						{title}
					</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<p className="text-portfolio-secondary dark:text-gray-400 leading-relaxed">
					{body}
				</p>
			</CardContent>
		</ShadCard>
	);
};

export default Card;
