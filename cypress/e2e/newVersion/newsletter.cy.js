import {faker} from "@faker-js/faker";

describe('Admin add newsletter', (feature = "page", ghost_version = "new") => {

  it('Como usuario administrador me logeo e intento agregar boletin, indicar nombre, decripción y crear', () => {
    const title = faker.name.jobTitle();
    const description = faker.lorem.paragraph();
    cy.intercept("/ghost/api/admin/settings").as("saveSettings");
    cy.goAdminAndLogin(feature)
    cy.get('.gh-nav-bottom a[href="#/settings/"]').click()
    cy.get('.gh-main a[href="#/settings/newsletters/]').click()
    cy.wait(3000);
    cy.screenshot(`images/cypress/${feature}_${ghost_version}/navigate_newsletter`);
    cy.get('#newsletter-title').type(title);
    cy.get("textarea.gh-input").type(description);
    cy.get('button.gh-btn-primary').click()
    cy.wait(3000);
    cy.screenshot(`images/cypress/${feature}_${ghost_version}/add_newsletter`);

  })

  it('Como usuario administrador me logeo e intento agregar boletin, indicar nombre, decripción y cancelar', () => {
    const title = faker.name.jobTitle();
    const description = faker.lorem.paragraph();
    cy.intercept("/ghost/api/admin/settings").as("saveSettings");
    cy.goAdminAndLogin(feature)
    cy.get('.gh-nav-bottom a[href="#/settings/"]').click()
    cy.get('.gh-main a[href="#/settings/newsletters/]').click()
    cy.wait(3000);
    cy.screenshot(`images/cypress/${feature}_${ghost_version}/navigate_newsletter_cancel`);
    cy.get('#newsletter-title').type(title);
    cy.get("textarea.gh-input").type(description);
    cy.wait(3000);
    cy.screenshot(`images/cypress/${feature}_${ghost_version}/cancel_newsletter`);
    cy.get('button.gh-btn').click()

  })

})