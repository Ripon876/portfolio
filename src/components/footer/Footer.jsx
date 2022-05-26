import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<div className="pt-4">
			<footer class="text-center text-lg-start">
			  <div class="text-center p-3" style={{backgroundColor : "rgba(0, 0, 0, 5%)"}}>
			    © {new Date().getFullYear()} Copyright 
			    <a class="text-white" href="https://a2series.com/"> MD Ripon Islam</a>
			  </div>

			</footer>
		</div>
	)
}

export default Footer;