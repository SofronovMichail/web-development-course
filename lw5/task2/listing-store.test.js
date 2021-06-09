import {
  listingElements,
  storeElements,
  addNewElements,
  addToStoreElements,
} from './listing-store';

describe('add new elements and switch them', () => {
  test('addNewElements should add new element', () => {
    addNewElements('something');
    expect(listingElements).toContain('something');
    expect(listingElements.length).toBe(3);
  });

  test('addToStoreElements should add dedicated element to storeElements', () => {
    addToStoreElements('apple');
    expect(storeElements).toContain('apple');
    expect(storeElements.length).toBe(1);
  });

  test('addToStoreElements should add dedicated element to storeElements', () => {
    addToListingElements('apple');
    expect(listingElements).toContain('apple');
    expect(listingElements.length).toBe(2);
  });
});
