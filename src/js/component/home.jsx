import React, { useState } from "react";
import '../../styles/index.css';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputControler, setInputControler]=useState();
	const [todos, setTodos]=useState([]);

	const inputvalue = (event) => {
		setInputControler(event.target.value)
	}

	const keypress = (event) => {
		if (event.key === 'Enter'){
			setTodos(prev => [...prev,inputControler])
			setInputControler("")
		}
	} 

	const erase = (event) => {
		let filteredTodos = todos.filter(todo => todo !== event.target.id);
		setTodos(filteredTodos);
	}
	
	return (
		<div className="main">
			<div className="toodo">
				<div className="title"><p className="ptitle">todolist</p></div>
				<div className="imputdiv">
					<input type="text" className="input" value={inputControler} onChange={inputvalue} onKeyDown={keypress}></input>
					<div className="second">{todos.map((todo,index)=>{
						return (
							<div key={index} className="divh4">
								<h4>{todo}</h4>
								<button className="button" id={todo} onClick={erase}> X </button>
							</div>
						)
					})}</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
