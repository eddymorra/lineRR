import lines from './lines.js'
import deepFreeze from 'deep-freeze';

let stateBefore = [
    {id: 'line1', name: 'line1'},
    {id: 'line2', name: 'line2'}
];

it('should add a line and not mutate the previous state', () => {
    const action = {
        type: 'ADD_LINE',
        payload: {
            line: {
                id: 'line3',
                name: 'line3',
            }
        }
    }

    const stateAfter = [
        {id: 'line1', name: 'line1'},
        {id: 'line2', name: 'line2'},
        {id: 'line3', name: 'line3'},
    ]

    deepFreeze(stateBefore)
    expect(lines(stateBefore, action)).toEqual(stateAfter)
});

it('should delete a line and not mutate the previous state', () => {
    const action = {
        type: 'DELETE_LINE',
        payload: {
                id: 'line2'
        }
    }

    const stateAfter = [
        {id: 'line1', name: 'line1'}
    ]

    deepFreeze(stateBefore);
    expect(lines(stateBefore, action)).toEqual(stateAfter);
});

it('should edit a line and not mutate the previous state', () => {
    const action = {
        type: 'EDIT_LINE',
        payload: {
                id: 'line2',
                name: 'testEdit'
        }
    }

    const stateAfter = [
        {id: 'line1', name: 'line1'},
        {id: 'line2', name: 'testEdit'}
    ]

    deepFreeze(stateBefore);
    expect(lines(stateBefore, action)).toEqual(stateAfter);
});