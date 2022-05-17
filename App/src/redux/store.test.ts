import { EmptySlot } from '@smite-timeline/smite-game-objects/lib/Item';
import store from './store'

test('expected structure',
() => {
    let state = store.getState();
    expect(state.left.god.name).toBeTruthy();
    expect(state.right.items).toBeTruthy();
    expect(state.time).toBe(0);
})