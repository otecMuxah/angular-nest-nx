export const getGreeting = () => cy.get('h1');
export const getMoreInfoButton = () =>
  cy.get('button[data-cy="more-info-button"]');
export const getUserDetailsComponent = () =>
  cy.get('test-repo-na-user-details');
export const getCreateNewAlbumButton = () =>
  cy.get('[data-cy="create-new-album-button"]');
export const getCreateNewAlbumTitleInput = () =>
  cy.get('[data-cy="album-title-input"]');

export const getCreateNewAlbumSubmitButton = () =>
  cy.get('[data-cy="album-submit-button"]');
export const getFileUploadInput = () => cy.get('[data-cy="file-upload-input"]');
export const getAlbumLabel = () => cy.get('.mdc-button__label');
