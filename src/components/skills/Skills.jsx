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
					      <h3>HTML5 & CSS3 <img src="./assets/img/html.png" class="img-fluid" /><img src="./assets/img/css.png" class="img-fluid" /></h3>
					        <span class="percent"><CountUp end={90}  duration={3.5}  delay={0} suffix="%"/></span>
					    </div>
					    <div className="bar-container">
					      <span className="progressbar " id="progress-html-css"></span>
					    </div>
					  </li>
					  <li>
					    <div className="progressbar-title">
					      <h3>Bootstrap <img src="./assets/img/bootstrap.png" class="img-fluid" /></h3>
					        <span class="percent"><CountUp end={95}  duration={3.5}  delay={1.5} suffix="%"/></span>
					    </div>
					    <div className="bar-container">
					      <span className="progressbar " id="progress-bootstrap"></span>
					    </div>
					  </li>
					  <li>
					    <div className="progressbar-title">
					      <h3>JavaScript <img src="./assets/img/js.png" class="img-fluid" /></h3>
					        <span class="percent"><CountUp end={75}  duration={3.5}  delay={2.2} suffix="%"/></span>
					    </div>
					    <div className="bar-container">
					      <span className="progressbar " id="progress-javascript"></span>
					    </div>
					  </li>
					  <li>
					    <div className="progressbar-title">
					      <h3>Jquery <img src="./assets/img/jquery.png" class="img-fluid" /></h3>
					        <span class="percent"><CountUp end={70}  duration={3.5}  delay={2.8} suffix="%"/></span>
					    </div>
					    <div className="bar-container">
					      <span className="progressbar " id="progress-jquery"></span>
					    </div>
					  </li>
					  
					  <li>
					    <div className="progressbar-title">
					      <h3>React Js <img src="./assets/img/react.png" class="img-fluid" /></h3>
					        <span class="percent"><CountUp end={85}  duration={3.5}  delay={3} suffix="%"/></span>
					    </div>
					    <div className="bar-container">
					      <span className="progressbar " id="progress-react"></span>
					    </div>
					  </li>
					  <li>
					    <div className="progressbar-title">
					      <h3>Node Js <img src="./assets/img/node.png" class="img-fluid" /></h3>
					        <span class="percent"><CountUp end={70}  duration={3.5}  delay={3.7} suffix="%"/></span>
					    </div>
					    <div className="bar-container">
					      <span className="progressbar " id="progress-node"></span>
					    </div>
					  </li>
					  <li>
					    <div className="progressbar-title">
					      <h3>Express Js <img src="./assets/img/express.png" class="img-fluid" /></h3>
					        <span class="percent"><CountUp end={80}  duration={3.5}  delay={3.7} suffix="%"/></span>
					    </div>
					    <div className="bar-container">
					      <span className="progressbar " id="progress-express"></span>
					    </div>
					  </li>
					  <li>
					    <div className="progressbar-title">
					      <h3>MongoDB<img src="./assets/img/mongodb.png" class="img-fluid" /></h3>

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