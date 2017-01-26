import { TwoWayDDataBinding08Page } from './app.po';

describe('two-way-ddata-binding-08 App', function() {
  let page: TwoWayDDataBinding08Page;

  beforeEach(() => {
    page = new TwoWayDDataBinding08Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
