import React, { Component } from 'react';
import ToDoList from './ToDoList';
import NewToDo from './NewToDo';
import '../css/ToDoApp.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			toDoList: props.toDoList
		}
		this.addToList = this.addToList.bind(this);
	}

	render() {

		return(
			<div>
				<h1>Welcome to my App!</h1>
				<NewToDo newToDo={this.addToList}/>
				<ToDoList toDos={this.state.toDoList} toggleComplete={this.toggleComplete} />
			</div>
		)
	}

	addToList(newName, newPriority) {
		var newToDoList = this.state.toDoList;
		newToDoList.push({
			name: newName,
			priority: newPriority,
			completed: false
		});
		this.setState({toDoList: newToDoList});
	}

	toggleComplete(event) {
		let split = event.target.className.split(" ");
		let completeClass = split[1];
		if (completeClass === "complete") {
			event.target.className = split[0] + " incomplete";
		} else if (completeClass === "incomplete") {
			event.target.className = split[0] + " complete";
		}
	}

}

export default App;
