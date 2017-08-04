import { WebAppCountriesPage } from './app.po';

describe('web-app-countries App', () => {
  let page: WebAppCountriesPage;

  beforeEach(() => {
    page = new WebAppCountriesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
