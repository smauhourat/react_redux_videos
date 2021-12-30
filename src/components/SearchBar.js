import React, { Component, useState } from 'react';

const Searchbar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(term);
    }

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={term} 
                        placeholder="Search..." 
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );    
};

export default Searchbar;