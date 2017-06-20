import { Krystalos.VenPage } from './app.po';

describe('krystalos.ven App', () => {
  let page: Krystalos.VenPage;

  beforeEach(() => {
    page = new Krystalos.VenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
