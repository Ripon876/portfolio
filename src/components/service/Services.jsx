import React from 'react';
import ServiceItem from './ServiceItem';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import "./Services.css";



function Services() {
	return (
		<Fade right>
			
				<div className="service p-5" id="services">
					<div className="container text-center p-5" >
						<div className="serviceInfo py-3">
							<h1>My Services</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada.</p>
						</div>
						<div className="services pt-5">
							<div className="justify-content-center row">	
								<ServiceItem icon="fa-solid fa-code" title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />					
								<ServiceItem icon="fa-solid fa-code" title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
								<ServiceItem icon="fa-solid fa-code" title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
								<ServiceItem icon="fa-solid fa-code" title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
							</div>
						</div>
					</div>
				</div>
			
		</Fade>
	)
}

export default Services;