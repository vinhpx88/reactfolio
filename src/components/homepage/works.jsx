import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./emsa.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Emsa technology</div>
							<div className="work-subtitle">
								Senior Software Engineer
							</div>
							<div className="work-duration">2018 - Present</div>
						</div>

						<div className="work">
							<img
								src="./emsa.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Emsa technology</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2016 - 2018</div>
						</div>

						<div className="work">
							<img
								src="./tma.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">TMA Solution</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2015 - 2016</div>
						</div>
						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
