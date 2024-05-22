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
  const links = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Work', target: 'work' },
    { label: 'Contact', target: 'contact' }
  ];

  beforeEach(() => {
    cy.visit('https://stephenckelly.com/'); 
  });

  links.forEach(link => {
    it(`should navigate to the ${link.label} section`, () => {
      cy.contains(link.label).click();
      cy.get(`div[name="${link.target}"]`).should('be.visible');
    });
  });
});