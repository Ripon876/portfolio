import React from 'react';
import CountUp from 'react-countup';
import './Skills.css';

function Skills() {
	return (
		<div id="skills">
			<div className="container text-center p-5" >
				<div className="serviceInfo py-3">
					<h1>Skills</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada.</p>
				</div>
				<div className="skills">
					<ul className="skills-bar-container">
					  <li>
					    <div className="progressbar-title">
					      <h3>HTML5 & CSS3</h3>
					        <span class="percent"><CountUp end={90}  duration={3.5}  delay={0} suffix="%"/></span>
					    </div>
					    <div className="bar-container">
					      <span className="progressbar " id="progress-html-css"></span>
					    </div>
					  </li>
					  <li>
					    <div className="progressbar-title">
					      <h3>Bootstrap</h3>
					        <span class="percent"><CountUp end={95}  duration={3.5}  delay={1.5} suffix="%"/></span>
					    </div>
					    <div className="bar-container">
					      <span className="progressbar " id="progress-bootstrap"></span>
					    </div>
					  </li>
					  <li>
					    <div className="progressbar-title">
					      <h3>JavaScript</h3>
					        <span class="percent"><CountUp end={75}  duration={3.5}  delay={2.2} suffix="%"/></span>
					    </div>
					    <div className="bar-container">
					      <span className="progressbar " id="progress-javascript"></span>
					    </div>
					  </li>
					  <li>
					    <div className="progressbar-title">
					      <h3>Jquery</h3>
					        <span class="percent"><CountUp end={70}  duration={3.5}  delay={2.8} suffix="%"/></span>
					    </div>
					    <div className="bar-container">
					      <span className="progressbar " id="progress-jquery"></span>
					    </div>
					  </li>
					  
					  <li>
					    <div className="progressbar-title">
					      <h3>React Js</h3>
					        <span class="percent"><CountUp end={85}  duration={3.5}  delay={3} suffix="%"/></span>
					    </div>
					    <div className="bar-container">
					      <span className="progressbar " id="progress-react"></span>
					    </div>
					  </li>
					  <li>
					    <div className="progressbar-title">
					      <h3>Node Js</h3>
					        <span class="percent"><CountUp end={65}  duration={3.5}  delay={3.7} suffix="%"/></span>
					    </div>
					    <div className="bar-container">
					      <span className="progressbar " id="progress-node"></span>
					    </div>
					  </li>
					  <li>
					    <div className="progressbar-title">
					      <h3>MongoDB<img src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/14345A14-0B48-4F52-AFE27AD7414B98CE/webimage-9DB7077C-99A8-4A24-A5FF342E6652D5EC.png" class="img-fluid" /></h3>

					        <span class="percent" ><CountUp end={70}  duration={3.5}  delay={4} suffix="%"/></span>
					    </div>
					    <div className="bar-container">
					      <span className="progressbar " id="progress-mongodb"></span>
					    </div>
					  </li>
					</ul>
				</div>	
			</div>
		</div>
	)
}

export default Skills;