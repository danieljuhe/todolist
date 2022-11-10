import React, { useState } from "react";
import '../../styles/index.css'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [input, setInput]=useState();
	const [save, setSave]=useState();

	const inputvalue = (event) => {
		setInput(event.target.value)
	}

	const keypress = (event) => {
		if (event.key === 'Enter'){
		setSave(input)
		document.getElementById('myInput').value = ''
		}
	} 
	
	
	return (
		<div className="main">
			<div className="toodo">
				<div className="title"><p className="ptitle">toodolist</p></div>
				<div className="imputdiv">
					<input type="text" id="myInput" className="input" onChange={inputvalue} onKeyDown={keypress}></input>
					<div className="first"><h5 id="temporalvalue">{input}</h5></div>
					<div className="second"><h1>{save}</h1></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
