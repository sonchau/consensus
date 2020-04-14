describe('Quick - Issue page', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('should access Quick Issue page', () => {
        cy.contains('Quick Session').click()
        cy.get('h2').should('contain', 'Step 1: State your problem')
    })
  })
