import { MdSelectTestPage } from './app.po';

describe('md-select-test App', function() {
  let page: MdSelectTestPage;

  beforeEach(() => {
    page = new MdSelectTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
