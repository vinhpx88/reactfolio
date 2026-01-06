import Project from "./project";
import INFO from "@/data/user";

const AllProjects = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{INFO.projects.map((project, index) => (
				<Project
					key={index}
					logo={project.logo}
					screenshot={project.screenshot}
					title={project.title}
					description={project.description}
					stack={project.stack}
					linkText={project.linkText}
					link={`/project/${index + 1}`}
				/>
			))}
		</div>
	);
};

export default AllProjects;
