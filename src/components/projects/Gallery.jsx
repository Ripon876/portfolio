import React,{useState,useEffect,useRef} from 'react';
import Isotope from 'isotope-layout';
import {Fade} from 'react-reveal';
import ProjectItem from './ProjectItem';



function Gallery() {

	const [isotope, setIsotope] = useState(null);
	const [filterKey, setFilterKey] = useState('*');
	const [items, setItems] = useState([]);
    const parent = useRef(null);
    const imgUrl  = "https://img.freepik.com/free-vector/luxury-white-ramadan-greeting-card-islamic-background-with-eid-mubarak-illustration_511846-189.jpg";
  
useEffect(() => {
	setItems(parent.current.children)
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
			<button className="btn filterBtn" onClick={() => filter('full')}>Full stack</button>
			<button className="btn filterBtn" onClick={() => filter('react')}>React</button>
			<button className="btn filterBtn" onClick={() => filter('html&css')}>Html & Css</button>
		</div>
	
  
			<div className="row p-5 justify-content-center itemsContainer" ref={parent}>
				<ProjectItem img={imgUrl} labels="html&css"/>
				<ProjectItem img={imgUrl} labels="react"/>
				<ProjectItem img={imgUrl} labels="full"/>
				<ProjectItem img={imgUrl} labels="full"/>
			 	<ProjectItem img={imgUrl} labels="html&css"/>
				<ProjectItem img={imgUrl} labels="react"/>
				<ProjectItem img={imgUrl} labels="html&css"/>
				<ProjectItem img={imgUrl} labels="full"/>
			</div>
       
		</div>
	)
}

export default Gallery;