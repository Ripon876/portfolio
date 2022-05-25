import React from 'react';
import ContactForm from './ContactForm.jsx';
import './Contact.css';

function Contact() {
	return (
		<div id='contact'>
			<div className="container py-5 text-center  mt-5">
				<div className="aboutInfo py-3">
					<h1>Contact</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada.</p>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-5">
						<div className="align-items-center contactDetails d-flex justify-content-around">
							
								<img src="./assets/img/contact.png" alt="Contact Me" style={{filter : 'grayscale(1)'}}/>

					
							<div className="social_links">
								<span className="gap-2 justify-content-start">
								    <a href="https://github.com/Ripon876"><i class="fa-brands fa-github"></i></a> 
									<a href="https://www.facebook.com/ripon876"><i class="fa-brands fa-facebook"></i></a> 
									<a href="https://twitter.com/islam876ripon"><i class="fa-brands fa-twitter"></i></a> 
									<a href="https://www.instagram.com/ripon_876/"><i class="fa-brands fa-instagram"></i></a> 
								</span>	
							</div>

						</div>
					</div>
					<div className="col-md-7 text-start">
						<ContactForm />
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default Contact;