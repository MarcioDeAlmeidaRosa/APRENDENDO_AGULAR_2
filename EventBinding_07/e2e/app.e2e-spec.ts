import { EventBinding07Page } from './app.po';

describe('event-binding-07 App', function() {
  let page: EventBinding07Page;

  beforeEach(() => {
    page = new EventBinding07Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
