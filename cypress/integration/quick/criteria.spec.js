describe('Quick - Criteria page', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('should create criteria', () => {
        cy.contains('Quick Session').click()
        cy.get('input').type('Quick issue')
        cy.get('button.last').click({ force: true })
        cy.get('h2').should('contain', 'Quick issue')
        cy.get('h3').should('contain', 'Step 2: How will you measure success?')
        cy.get('input').type('Quick issue - Objective 1')
        cy.get('select').select('10') 
        cy.get('form').submit()
        cy.get('h4').should('contain', 'Your objectives')
        cy.get('li a span').should('have.length', 2).each(($item, index) => {
          const objectives = [ 
            'Quick issue - Objective 1',
            '10',
          ]
            expect($item.text()).to.equal(objectives[index])
        })
    })
  })
