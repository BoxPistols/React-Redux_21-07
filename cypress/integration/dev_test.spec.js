// describe('ググれカス', () => {
// 	it('loads search page', () => {
// 		cy.visit('https://www.ググれカス.com')
// 		cy.get('[type="text"]')
// 		cy.get('form').submit()
// 	})
// })

describe('My First Test', () => {
    it('Input test', () => {
        cy.visit('https://www.ググれカス.com')
        cy.get('.org_absolute [type="text"]')
            .clear()
            .type('宇宙人 NASA')
        cy.get('.org_exclusion [type="text"]')
            .clear()
            .type('通販')
        cy.get('form')
            .find('textarea')
            .should('have.value', '   "宇宙人 NASA" -通販')
        // cy.get('#input-text').should('have.value', 'ABC') // input タグの場合
        cy.get('form').submit()
    })
})
