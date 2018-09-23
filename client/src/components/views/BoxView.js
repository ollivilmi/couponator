import Box from "../Box";
import React from 'react';

export const BoxView = props => {
    return (
        <div className="container">
            {props.boxes.map(box => (
                <Box key={box.id} title={box.title} amount={box.amount} progress={box.progress}/>
            ))}
        </div>
    )
}