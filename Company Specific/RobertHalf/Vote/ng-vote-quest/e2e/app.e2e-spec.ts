import { NgVoteQuestPage } from './app.po';

describe('ng-vote-quest App', () => {
  let page: NgVoteQuestPage;

  beforeEach(() => {
    page = new NgVoteQuestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
