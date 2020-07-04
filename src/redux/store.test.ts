import store from './store'
import { EmptySlot } from '../data_objects/Item';

test('expected structure',
() => {
    let state = store.getState();
    expect(state.left.god.name).toBe('Ares');
    expect(state.right.items[2]).toBe(EmptySlot);
    expect(state.time).toBe(0);
})