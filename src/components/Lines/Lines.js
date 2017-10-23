import React from 'react';
import Line from '../Line/Line';

const Lines = ({lines, onLineDelete, onLineEdit}) => {
    return (
        <div>
            <hr/>
            { lines.map(line =>
                <Line key={line.id} line={line} onLineDelete={onLineDelete} onLineEdit={onLineEdit} />
            )}
        </div>
    )
}

export default Lines;
