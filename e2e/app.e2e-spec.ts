import { QualityExercisesJavascriptPage } from './app.po';

describe('quality-exercises-javascript App', () => {
  let page: QualityExercisesJavascriptPage;

  beforeEach(() => {
    page = new QualityExercisesJavascriptPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Because Quality!');
  });
});
