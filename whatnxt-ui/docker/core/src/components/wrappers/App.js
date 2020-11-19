import React, {Component} from 'react';
import TodoList from '../ui/TodoList';
import StateProvider from './StateProvider';

class App extends Component {
    render() {
        return (
            <StateProvider>
                <TodoList/>
            </StateProvider>
        );
    }
}
export default App;
