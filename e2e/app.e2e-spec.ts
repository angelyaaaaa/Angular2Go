import { NgDemo1Page } from './app.po';

describe('ng-demo1 App', function() {
  let page: NgDemo1Page;

  beforeEach(() => {
    page = new NgDemo1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
