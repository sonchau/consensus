describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('should display home page and 3 links', () => {
      cy.get('h1').should('contain', 'Consensus')
      cy.get('h2').should('have.length', 4).each(($item, index) => {
        const scores = [ 
          'Find the best solution to a specific problem.',
          'Quick Session',
          'Private Voting',
          'Online Voting'
        ]
          expect($item.text()).to.equal(scores[index])
      })
    })
  })
