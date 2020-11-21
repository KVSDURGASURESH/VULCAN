import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const {data, changeStatus, deleteItem} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const handleDelete = (item) => deleteItem(data.id);
    const className = 'todo-item ui-state-default ' + (data._is_done === true ? 'completed' : 'pending');
    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data._is_done} onChange={handleChange}/> {data.Title}
                </label>
                <div style={{float: "right"}}>
                    <a onClick={handleDelete}>Delete</a>
                </div>
            </div>
        </li>
    );
}
