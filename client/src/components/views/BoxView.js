import Box from "../Box";
import React from 'react';

export const BoxView = props => {
    const boxElements = props.boxes.map(box => (
        <Box key={box.id} title={box.title} amount={box.amount} progress={box.progress}/>
    ));
    return (
        <div className="container">
            {boxElements}
        </div>
    )
}