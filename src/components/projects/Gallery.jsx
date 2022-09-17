import React,{useState,useEffect,useRef} from 'react';
import Isotope from 'isotope-layout';
import {Fade} from 'react-reveal';
import ProjectItem from './ProjectItem';
import {projects} from './data';


function Gallery() {

	const [isotope, setIsotope] = useState(null);
	const [filterKey, setFilterKey] = useState('*');
	const [items, setItems] = useState([]);
    const parent = useRef(null);
    const imgUrl  = "https://img.freepik.com/free-vector/luxury-white-ramadan-greeting-card-islamic-background-with-eid-mubarak-illustration_511846-189.jpg";
  
useEffect(() => {
	setItems(parent.current.children)
	console.log(projects)
}, [])


	function filter(key){

		if(items !== undefined){
			for(var i = 0; i < items.length;i++){

			    var s = items[i].classList?.contains(key);
             if(key === '*'){
             	 items[i].style.display  = 'block';
             	}else{
             		s ? items[i].style.display  = 'block' :  items[i].style.display = "none";
             	}   
			  

			}
		}

	}



	return (
		<div>
		<div className="filerButtonContainer">
			<button className="btn filterBtn" onClick={() => filter('*')}>All</button>
			<button className="btn filterBtn" onClick={() => filter('full_stack')}>Full stack</button>
			<button className="btn filterBtn" onClick={() => filter('react')}>React</button>
			<button className="btn filterBtn" onClick={() => filter('html_&_css')}>Html & Css</button>
			<button className="btn filterBtn" onClick={() => filter('package')}>Packages <span className='small'>(custom)</span></button>
		</div>
	
  
			<div className="row p-5 justify-content-center itemsContainer" ref={parent}>
			{projects?.map((project)=>
				<ProjectItem img={project.img} labels={project.category} title={project.title} link={project.link} />
			)}
				
				{/*<ProjectItem img={imgUrl} labels="react"/>
				<ProjectItem img={imgUrl} labels="full_stack"/>
				<ProjectItem img={imgUrl} labels="full_stack"/>
			 	<ProjectItem img={imgUrl} labels="html_&_css"/>
				<ProjectItem img={imgUrl} labels="react"/>
				<ProjectItem img={imgUrl} labels="html_&_css"/>
				<ProjectItem img={imgUrl} labels="full_stack"/>
				<ProjectItem img={imgUrl} labels="package"/>*/}
			</div>
       
		</div>
	)
}

export default Gallery;