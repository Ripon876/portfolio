import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<div className="pt-4 position-relative">
			<footer class="text-center text-lg-start bg-transparent">
			  <div class="text-center p-3" >
			    © {new Date().getFullYear()} Copyright 
			    <a class="text-white" href="https://a2series.com/"> MD Ripon Islam</a>
			  </div>

			</footer>
		</div>
	)
}

export default Footer;