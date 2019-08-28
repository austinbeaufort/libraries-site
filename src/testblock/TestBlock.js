import React from 'react';

const TestBlock = props => {
    return (
        <div className='box'>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    )
}

export default TestBlock;