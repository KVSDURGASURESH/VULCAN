import React, {Component} from 'react';
import {objectWithOnly, wrapChildrenWith} from '../../util/common';
import {getAll, addToList, updateStatus, deleteItemService} from '../../services/todo';

class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            list : []
        }
    }
    
    componentDidMount(){
        let resp = getAll()
        resp.then(response => response.json())
            .then(data => {  
                console.log("Final data ", data)
                this.setState({list : data})
                    
            })
        // Catch any errors we hit and update the app
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeStatus', 'deleteItem'])
        });

        return <div>{children}</div>;
    }

    addNew(text) {
        let response = addToList(this.state.list, {text, completed: false});
        response.then(response => response.json())
            .then(data => {  
                console.log(data)
                let updatedList = [...this.state.list, ...data]
                this.setState({list: updatedList});
                    
            })
        // Catch any errors we hit and update the app
        .catch(error => this.setState({ error, isLoading: false }));
        
        
    }

    changeStatus(itemId, completed) {
        let response = updateStatus(itemId, completed);
        response.then(response => response.json())
            .then(data => {  
                let updatedList = [...this.state.list, ...data]
                this.setState({list: updatedList});
                    
            })
    }

    deleteItem(itemId) {
        let response = deleteItemService(itemId);
        response.then(response => response.json())
            .then(data => {  
                let updatedList = data
                this.setState({list: updatedList});
                    
            })
    }
}

export default StateProvider;
