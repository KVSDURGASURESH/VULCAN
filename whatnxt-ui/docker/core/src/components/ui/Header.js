import React from 'react';
import InputBox from './InputBox';

export default function Header(props) {
    const {addNew} = props;
    return (
        <header>
            <h1>What Next?</h1>
            <InputBox {...{addNew}}/>
        </header>
    );
}
