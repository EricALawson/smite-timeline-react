import { itemImagePath, shoesOfFocus } from "./TestObjects";

test('itemImagePath function', () => {
    const path = itemImagePath('shoes of focus');
    expect(path).toBeTruthy();
})

describe('Shoes of Focus test item', () => {
    it('has an image property', () => {
        const shoes = shoesOfFocus;
        expect(shoes.image).toBe('http://web2.hirez.com/smite/item-icons/shoes-of-focus.jpg')
    });
});