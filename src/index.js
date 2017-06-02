import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './components/ToDoApp';
import initList from './components/initList';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(<ToDoApp toDoList={initList} />, document.getElementById('root'));
registerServiceWorker();
