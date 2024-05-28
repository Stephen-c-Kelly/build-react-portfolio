import {React, useState} from'react'
import App from '../../src/App'
import sampleData from '../../src/components/sampleData'


describe('<App />', () => {
  it('should mount and load sample api content', () => {
    cy.intercept('GET', 'https://api.buttercms.com/v2/pages/portfolio/stephen-kelly-portfolio/?auth_token=*', 
    {
      statusCode: 200,
      body: {
        data: {
          fields: {
            stephenkellyportfolio: sampleData
          }
        }
      },
    }
).as('getData');
   
    cy.mount(<App />);

    cy.wait('@getData');

    cy.get('h2').should('have.text', sampleData[0].fields.landing_caption);

})
})

// describe('<Home />', () => {
//   it('should mount and load sample api content', () => {
//     cy.intercept('GET', 'https://api.buttercms.com/v2/pages/portfolio/stephen-kelly-portfolio/?auth_token=*', {
//       statusCode: 200,
//       body: sampleData,
//   }).as('getData');
   
//     cy.mount(<Home />);
//     cy.wait('@getData');

//     cy.get('h2').should('have.text', sampleData[0].fields.landing_caption);

// })
// })
