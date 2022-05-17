import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import UserEvent from '@testing-library/user-event';
import buildIdentifier from "../../redux/buildIdentifier";
import ItemBuild from '../ItemBuild/ItemBuild';
import ItemPicker from '../ItemBuild/ItemPicker/ItemPicker';
import GodSelector from '../GodStats/GodSelector';




test('Clicking the ItemSlot makes the ItemPicker visible', async () => {
    render(<div>
        <ItemBuild buildIdentifier={buildIdentifier.left}></ItemBuild>
        <ItemPicker></ItemPicker>
    </div>)
    const slots = screen.getAllByRole('button', {name: /item slot/i});
    const slot = slots[0];
    UserEvent.click(slot)
    const picker = await screen.findByRole('form', {name: /item picker/i});
    expect(picker).toHaveAttribute('open', "");
});

test('The Item Picker is hidden when the app loads', () => {
    render( <ItemPicker></ItemPicker>);
    
    const picker = screen.queryByRole('form', {name: /item picker/i});
    expect(picker).not.toBeInTheDocument();
});

test('Selecting a God changes the god card image', async () => {
    render(<GodSelector buildIdentifier={buildIdentifier.left}></GodSelector>);
    const menuMouseOver = screen.getByText(/select god/i)
    fireEvent.mouseEnter(menuMouseOver);
    const leftGodInput = await screen.findByRole('menuitem', {name: /select cerberus left/i});
    UserEvent.click(leftGodInput);
    const leftGodImage = screen.getByRole('img', {name: /god image left/i});
    expect( leftGodImage.getAttribute('src') ).toMatch(/.*Cerberus.jpg/i);
})