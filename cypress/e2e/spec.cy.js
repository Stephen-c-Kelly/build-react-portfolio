// describe('My First Test', () => { 
//   it('Does not do much!', () => { 
//     expect(true).to.equal(true)
//   })
// })
// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })

describe('Navigation links work', () => {
  beforeEach(() => {
    cy.visit('https://stephenckelly.com/'); // Replace with your actual local URL or deployed URL
  });

  it('should navigate to the Home section', () => {
    cy.contains('Home').click();
    cy.get('div[name="home"]').should('be.visible');
  });

  it('should navigate to the About section', () => {
    cy.contains('About').click();
    cy.get('div[name="about"]').should('be.visible');
  });

  it('should navigate to the Skills section', () => {
    cy.contains('Skills').click();
    cy.get('div[name="skills"]').should('be.visible');
  });

  it('should navigate to the Work section', () => {
    cy.contains('Work').click();
    cy.get('div[name="work"]').should('be.visible');
  });

  it('should navigate to the Contact section', () => {
    cy.contains('Contact').click();
    cy.get('div[name="contact"]').should('be.visible');
  });
});