import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import INFO from "@/data/user";

const Logo = ({ width = 46, link = true }) => {
	const logoElement = (
		<Avatar
			style={{ width: `${width}px`, height: `${width}px` }}
			className="transition-opacity hover:opacity-80"
		>
			<AvatarImage src={INFO.main.logo} alt={INFO.main.name} />
			<AvatarFallback className="bg-portfolio-primary text-white font-bold text-xl">
				{INFO.main.name.charAt(0)}
			</AvatarFallback>
		</Avatar>
	);

	return link ? (
		<Link to="/" className="flex items-center">
			{logoElement}
		</Link>
	) : (
		logoElement
	);
};

export default Logo;
