import { faker } from "@faker-js/faker";
import { expect } from "chai";

describe("Admin create new post", (feature = "post", ghost_version = "new") => {
  it("Como usuario administrador creo un post con un titulo y descripción", () => {
    const title = faker.name.jobTitle();
    const description = faker.lorem.paragraph();
    cy.intercept("/ghost/api/admin/settings").as("saveSettings");
    cy.goAdminAndLogin();
    cy.wait(3000);
    cy.visit("http://uniandes.ingenio.com.co:2368/ghost/#/posts/");
    cy.wait(3000);
    cy.screenshot(`images/cypress/${feature}_${ghost_version}/navigate_post`);
    cy.get("a.ember-view.gh-btn.gh-btn-primary.view-actions-top-row")
      .contains("New post")
      .click();
    cy.wait(3000);
    cy.screenshot(`images/cypress/${feature}_${ghost_version}/create_post`);
    cy.get("textarea.gh-editor-title").clear().type(title);
    cy.get("article.koenig-editor").clear().type(description);
    cy.get("button.gh-publish-trigger").click();
    cy.get("button.gh-btn.gh-btn-black.gh-btn-large").click();
    cy.get("button.gh-btn.gh-btn-pulse").click();
    cy.wait(3000);
    cy.screenshot(
      `images/cypress/${feature}_${ghost_version}/create_post_success`
    );

    let titleUrl = title.replaceAll(" ", "-").toLowerCase();
    cy.visit(`http://uniandes.ingenio.com.co:2368/${titleUrl}/`);
    cy.wait(3000);
    cy.screenshot(`images/cypress/${feature}_${ghost_version}/published_post`);
    cy.get("h1.single-title").should("have.text", title);
    cy.get("div.single-content p").should("have.text", description);
  });

  it("Como usuario administrador edito un post publicado", (feature = "post", ghost_version = "new") => {
    const title = faker.name.jobTitle();
    const description = faker.lorem.paragraph();
    cy.intercept("/ghost/api/admin/settings").as("saveSettings");
    cy.goAdminAndLogin();
    cy.wait(3000);
    cy.visit(
      "http://uniandes.ingenio.com.co:2368/ghost/#/posts?type=published"
    );
    cy.wait(3000);
    cy.screenshot(
      `images/cypress/${feature}_${ghost_version}/published_posts_list`
    );
    cy.get("h3.gh-content-entry-title").first().click();
    cy.wait(3000);
    cy.screenshot(`images/cypress/${feature}_${ghost_version}/edit_posts`);

    cy.get("textarea.gh-editor-title").clear().type(title);
    cy.get("article.koenig-editor").clear().type(description);
    cy.get("button.gh-editor-save-trigger").click();
    cy.get("span.gh-notification-actions a")
      .invoke("removeAttr", "target")
      .click();
    cy.wait(3000);
    cy.screenshot(`images/cypress/${feature}_${ghost_version}/edited_posts`);

    cy.get("h1.single-title").should("have.text", title);
    cy.get("div.single-content p").should("have.text", description);
  });
});
