import store from './store'

test('expected structure',
() => {
    let state = store.getState();
    expect(state.left.god.name).toBe('No god selected');
    expect(state.right.items[0]).toBe(undefined);
    expect(state.time).toBe(0);
})