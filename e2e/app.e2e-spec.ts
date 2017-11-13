import { SchoolBankingPage } from './app.po';

describe('school-banking App', () => {
  let page: SchoolBankingPage;

  beforeEach(() => {
    page = new SchoolBankingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
