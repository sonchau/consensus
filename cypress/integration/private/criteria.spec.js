describe('Private - Criteria page', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('should create criteria for private page', () => {
        cy.contains('Private Voting').click()
        cy.get('#email').type('sunshinecoast-test')
        cy.get('#password').type('sunshinecoast-test')
        cy.get('.MuiButton-label').click({ force: true })
        cy.get('h2').should('contain', 'Group Voting')
        cy.get('a.last').click()
        cy.get('input').type('Private issue')
        cy.get('button.last').click({ force: true })
        cy.get('h2').should('contain', 'Private issue')
        cy.get('h3').should('contain', 'Step 2: How will you measure success?')
        cy.get('input').type('Private issue - Objective 1')
        cy.get('select').select('10') 
        cy.get('form').submit()
        cy.get('h4').should('contain', 'Your objectives')
        cy.get('li a span').should('have.length', 2).each(($item, index) => {
          const objectives = [ 
            'Private issue - Objective 1',
            '10',
          ]
            expect($item.text()).to.equal(objectives[index])
        })
    })
  })
