import { NodeMongoAngular4Page } from './app.po';

describe('node-mongo-angular4 App', function() {
  let page: NodeMongoAngular4Page;

  beforeEach(() => {
    page = new NodeMongoAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
