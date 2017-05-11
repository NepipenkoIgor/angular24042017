import { Angular240402017Page } from './app.po';

describe('angular240402017 App', () => {
  let page: Angular240402017Page;

  beforeEach(() => {
    page = new Angular240402017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
