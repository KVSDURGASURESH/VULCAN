import React from 'react';
import Header from './Header';
import FilteredList from './FilteredList';

export default function TodoList(props) {
    console.log(props)
    const {list} = props.data;
    const {addNew, changeStatus, deleteItem} = props.actions;
    const items = list;
    return (
        <div className="container">
            <div className="row">
                <div className="todolist">
                    <Header {...{addNew}}/>
                    <FilteredList {...{items, changeStatus, deleteItem}}/>
                </div>
            </div>
        </div>
    );
}
