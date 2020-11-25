describe('Sección Enfermedades Test', () => {
    it('Testeo Abrir Card Enfermedades', () => {
      cy.visit('/enfermedades')
      cy.get('#botonAbrirEnfermedades').click()   
    })
    it('Testeo Lectura Card Enfermedades', () => {
      cy.get('#txtTipProblemas').contains('Quistes epidérmicos, tumores de encías y de la piel, y mastocitomas.')   
      cy.get('#txtTipRazas').contains('Bóxer.')  
    })
    it('Testeo Cerrar Card Enfermedades', () => {
      cy.get('#botonAbrirEnfermedades').click()    
    })
  })