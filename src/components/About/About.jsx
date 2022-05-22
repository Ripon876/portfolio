import React from 'react';
import {Fade, Zoom,Rotate } from 'react-reveal';
import './About.css';


function About() {
	return (
		<div>
		<Rotate top left>
		<div className="about" id="about" >
			<div className="container py-5 text-center  mt-5">
				<div className="aboutInfo py-3">
					<h1>About</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada.</p>
				</div>
				<div className="row">
					<div className="col-lg-4 p-4">
						<div className="aboutImgContainer m-auto">
							<img src="./assets/img/m2.png" alt="" className="img-fluid rounded-circle" />
						</div>
					</div>
					<div className="col-lg-8 col-md-10 m-auto p-4">
						<div className="aboutContainer text-start p-3">
							<h1>Hi!,</h1>
							<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
							<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.Sed porttitor lectus nibh. 
							Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
							<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
							<div className="socialIcons">
								<span className="d-flex gap-2 justify-content-start">
								    <a href="https://github.com/Ripon876"><i class="fa-brands fa-github"></i></a> 
									<a href="https://www.facebook.com/ripon876"><i class="fa-brands fa-facebook-f"></i></a> 
									<a href="https://twitter.com/islam876ripon"><i class="fa-brands fa-twitter"></i></a> 
									<a href="https://www.instagram.com/ripon_876/"><i class="fa-brands fa-instagram"></i></a> 
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</Rotate>
		</div>
	)
}

export default About;