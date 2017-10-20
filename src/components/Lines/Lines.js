import React from 'react';
import Line from '../Line/Line';
import SearchForm from '../../containers/SearchForm/SearchForm';

const Lines = ({lines, onLineDelete, onLineEdit}) => {
    return (
        <div>
            <SearchForm/>
            <hr/>
            { lines.map(line =>
                <Line key={line.id} line={line} onLineDelete={onLineDelete} onLineEdit={onLineEdit} />
            )}
        </div>
    )
}

export default Lines;
