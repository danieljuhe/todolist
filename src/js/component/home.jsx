import React, { useState } from "react";
import '../../styles/index.css';


const Home = () => {
	const [inputControler, setInputControler]=useState();
	const [todos, setTodos]=useState([]);
	const [button, setButton]=useState("");

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

	const buttonblock = (event) => {
		setButton("appear")
	}

	const buttonhidden = () => {
		setButton("")
	}


	return (
		<div className="main">
			<div className="toodo">
				<div className="title"><p className="ptitle">todolist</p></div>
				<div className="imputdiv">
					<input type="text" className="input" value={inputControler} onChange={inputvalue} onKeyDown={keypress}></input>
					<div className="second">{todos.map((todo,index)=>{
							
							return (	
								<div key={index} className="divh4" onMouseOver={buttonblock} onMouseOut={buttonhidden}>
									<h4>{todo}</h4>
									<button className="button" id={todo} onClick={erase}  style={{display: (button=="appear") ? 'block':'none',}}> X </button>
								</div>
							)
						})}
					</div>
					<p className="count">
						{todos.length === 0 ? <p>Nothing to do today</p>:<p>You must do {todos.length} tasks</p>}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
