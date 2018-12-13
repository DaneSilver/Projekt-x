describe('App', () => {
  it('Start the Game', () => {
    cy.visit('http://localhost:3000')
  })

  it('has the right title', () => {
    cy.title().should('equal', 'React App')
  })

  describe('Habit Selection', () => {
    it('Can click the Button', () => {
      cy.get('[data-cy=Button]').click()
    })

    it('Can click the Button', () => {
      cy.get('[data-cy=Input]').type('Coden lernen')
    })
  })
})
