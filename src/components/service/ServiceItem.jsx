import React from 'react'

function ServiceItem({icon,title,text}) {
	return (
		<div className="col-lg-3 col-md-6 col-sm-10 p-3 p-lg-2">
			<div className="serviceItem">
				<div className="card py-3">
				  <i className={icon}></i>
				  <div className="card-body">
				    <h5 className="card-title">{title}</h5>
				    <p className="card-text">{text}</p>
				    <a href="#" className="btn seeMoreBtn">Go somewhere</a>
				  </div>
				</div>
			</div>
		</div>
	)
}

export default ServiceItem;