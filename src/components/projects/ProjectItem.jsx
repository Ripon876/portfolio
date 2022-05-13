import React from 'react'
import {Fade} from 'react-reveal';


function ProjectItem({img,labels}) {
	return (
		
		<Fade> 
			<div className={`col-lg-3 col-md-6 col-sm-10 p-3 p-lg-2 ${labels}`}>
				<div className='card m-auto py-2 projectItemCard'>
				    <img src={img} className="card-img-top img-fluid" alt="" />
				 <div className="iconDiv">
				 	<i className="fa-share-from-square fa-solid" ></i>
				 </div>
				</div>   
		    </div>
		</Fade>

	)
}

export default ProjectItem;