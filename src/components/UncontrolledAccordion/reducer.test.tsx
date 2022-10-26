import {ActionType, reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";


test('1. Test reducer', () => {
    // star value
    const state: StateType = {
        collapsed: false,
    };
    const action: ActionType = {
        type: TOGGLE_COLLAPSED
    }

    // action
    const newState = reducer(state, action);

    // expected result
    expect(newState).not.toBe(state);
    expect(newState.collapsed).not.toBe(state.collapsed);
    expect(newState.collapsed).toBe(true);

});