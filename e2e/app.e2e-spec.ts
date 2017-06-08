import { browser } from 'protractor';
import { ProductsWidget } from './products/products.wg';
import { SearchWidget } from './common/search/search.wg';
import { ProductModalWidget } from './products/product-modal.wg';
import { CartWidget } from './common/cart/cart.wg';
import { CartModalWidget } from './common/cart/cart-modal.wg';

describe('Show app', () => {
  const productsWidget: ProductsWidget = new ProductsWidget();
  const searchWidget: SearchWidget = new SearchWidget();
  const productModalWidget: ProductModalWidget = new ProductModalWidget();
  const cartWidget: CartWidget = new CartWidget();
  const cartModalWidget: CartModalWidget = new CartModalWidget();

  beforeEach(() => {
    browser.get('/');
  });

  it('should search by term', () => {
    searchWidget.search('DIGIRANGsdasdads');
    expect(productsWidget.cards.count())
      .toEqual(0);
   // browser.sleep(1000);
    searchWidget.searchInput.clear();
    searchWidget.search('DIGIRANG');
    expect(productsWidget.cards.count())
      .toEqual(1);
   //  browser.sleep(1000);
    searchWidget.searchInput.clear();
    searchWidget.search(' ');
    expect(productsWidget.cards.count())
      .toEqual(10);
  });

  it('should display product mobile', () => {
    productsWidget.openFullCardModal(1);
    expect(productModalWidget.title.getText())
      .toEqual('SONIQUE');
   // browser.sleep(1000);
    expect(productModalWidget.price.getText())
      .toEqual('1822.77');
  });

  it('should add to product cart', () => {
    [1, 3, 7].forEach((index: number) => {
      productsWidget.openFullCardModal(index);
     // browser.sleep(1000);
      productModalWidget.buy();
    });
    expect(cartWidget.counter.getText())
      .toEqual('3');
    cartWidget.openCart();
    // browser.sleep(1000);
    expect(cartModalWidget.cards.count())
      .toEqual(3);
  });

  it('should remove  product from cart', () => {
    [1, 3, 7].forEach((index: number) => {
      productsWidget.openFullCardModal(index);
      // browser.sleep(1000);
      productModalWidget.buy();
    });
    cartWidget.openCart();
    [0, 1, 2].forEach(() => {
      cartModalWidget.removeFromCart(0);
      // browser.sleep(1000);
    });

    expect(cartWidget.counter)
      .toBeDefined(false);
  });

  it('should not open empty cart', () => {
    cartWidget.openCart();
    expect(cartModalWidget.cartModal)
      .toBeDefined(false);
  })

});
