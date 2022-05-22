import React from 'react';
import Gallery from './Gallery';
import './Projects.css';


function Projects() {
	return (
		<div className="projects" id="projects">
			<div className="container py-5 text-center  mt-5">
				<div className="projectInfo py-3">
					<h1>Projects</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada.</p>
				</div>
				<div>
					<Gallery />
				</div>
			</div>
		</div>
	)
}

export default Projects;