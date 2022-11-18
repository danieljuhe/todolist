import React, { useState } from "react";
import '../../styles/index.css';
import Todo from "./todo";


const Home = () => {
	const [inputControler, setInputControler]=useState();
	const [todos, setTodos]=useState([]);
	

	const inputvalue = (event) => {
		setInputControler(event.target.value)
	}

	const keypress = (event) => {
		if (event.key === 'Enter'){
			setTodos([...todos,inputControler])
			setInputControler("")
		}
	} 

	return (
		<div className="main">
			<div className="toodo">
				<div className="title"><p className="ptitle">todolist</p></div>
				<div className="imputdiv">
					<input type="text" className="input" value={inputControler} onChange={inputvalue} onKeyDown={keypress}></input>
					<div className="second">{todos.map((todo,index)=>{
							return <Todo todo={todo}  todos={todos} setTodos={setTodos} index={index}/>
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
