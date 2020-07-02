import React from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App from '../../App/App';
import { Provider } from 'react-redux';
import store from '../../../redux/store';


const setup = () => {
    return render(
        <Provider store={store}>
            <App />
        </Provider> 
    )
}

test('Clicking the ItemSlot makes the ItemPicker visible', async () => {
    setup();
    const slots = screen.getAllByRole('button', {name: /item slot/i});
    const slot = slots[0];
    UserEvent.click(slot)
    const picker = await screen.findByRole('form', {name: /item picker/i});
    expect(picker).toHaveAttribute('open', "");
});
