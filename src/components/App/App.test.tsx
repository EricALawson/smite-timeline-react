import React from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store, { buildIdentifier } from '../../redux/store';
import GodStats from '../GodStats/GodStats';
import ItemBuild from '../ItemBuild/ItemBuild';
import ItemPicker from '../ItemBuild/ItemPicker/ItemPicker';


test('Clicking the ItemSlot makes the ItemPicker visible', async () => {
    render(<Provider store={store}>
        <GodStats buildIdentifier={buildIdentifier.left}></GodStats>
        <ItemBuild buildIdentifier={buildIdentifier.left}></ItemBuild>
        <ItemPicker></ItemPicker>
    </Provider>)
    const slots = screen.getAllByRole('button', {name: /item slot/i});
    const slot = slots[0];
    UserEvent.click(slot)
    const picker = await screen.findByRole('form', {name: /item picker/i});
    expect(picker).toHaveAttribute('open', "");
});


test('Selecting a God changes the god card image', async () => {
    render(<Provider store={store}>
            <GodStats buildIdentifier={buildIdentifier.left}></GodStats>
        </Provider>)
    const leftGodInput = screen.getByRole('combobox', {name: /god selection left/i});
    UserEvent.selectOptions(leftGodInput, 'Cerberus');
    const leftGodImage = screen.getByRole('img', {name: /god image left/i});
    expect( leftGodImage.getAttribute('src') ).toMatch(/.*Cerberus.jpg/i);
})