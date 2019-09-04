import React from 'react';

const Form = props => (
    <form onSubmit={props.getStock}>
        <input type="text" name="name" placeholder="Stock Name"></input>
        <button>Get Stock</button>
    </form>
);

export default Form;