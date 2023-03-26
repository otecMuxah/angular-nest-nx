import {
  getAlbumLabel,
  getCreateNewAlbumButton,
  getCreateNewAlbumSubmitButton,
  getCreateNewAlbumTitleInput,
  getFileUploadInput,
  getMoreInfoButton,
  getUserDetailsComponent,
} from '../support/app.po';

describe('test-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should create new album', () => {
    getMoreInfoButton().first().click();
    getUserDetailsComponent().should('be.visible');
    getCreateNewAlbumButton().should('be.visible').click();
    getCreateNewAlbumTitleInput().should('be.visible').type('test-album');
    getFileUploadInput().should('be.visible').selectFile('test.jpeg');
    getCreateNewAlbumSubmitButton().should('be.visible').click();
    getAlbumLabel().contains('test-album');
  });
});
