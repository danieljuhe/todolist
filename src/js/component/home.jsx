import React, { useState } from "react";
import '../../styles/index.css'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [input, setInput]=useState();

	const inputvalue = (event) => {
		setInput(event.target.value)
	}

	const keypress = (event) => {
		if (key==13){
			setInput
		}
	} 
	
	
	return (
		<div className="main">
			<div className="title">toodolist</div>
			<div className="imputdiv">
				<input type="text" onChange={inputvalue} onKeyDown={keypress}></input>
				<div className="first"><h1>{input}</h1></div>
			</div>
		</div>
	);
};

export default Home;
