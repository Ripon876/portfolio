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
						<div className="contactDetails"></div>
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