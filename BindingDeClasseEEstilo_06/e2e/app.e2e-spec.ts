import { BindingDeClasseEEstilo06Page } from './app.po';

describe('binding-de-classe-eestilo-06 App', function() {
  let page: BindingDeClasseEEstilo06Page;

  beforeEach(() => {
    page = new BindingDeClasseEEstilo06Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
