describe('Sección Enfermedades Test', () => {
    it('Testeo Abrir Card Enfermedades', () => {
      cy.visit('/enfermedades')
      cy.get('#botonAbrirEnfermedades').click() 
      cy.wait(2000)  
    })
    it('Testeo Lectura Card Enfermedades', () => {
      cy.wait(2000)
      cy.get('#txtTipProblemas').contains('Quistes epidérmicos, tumores de encías y de la piel, y mastocitomas.')   
      cy.get('#txtTipRazas').contains('Bóxer.')  
      cy.wait(2000)
    })
    it('Testeo Cerrar Card Enfermedades', () => {
      cy.get('#botonAbrirEnfermedades').click()    
    })
  })