describe('Sección Razas Test', () => {
  it('Testeo Abrir Card Razas', () => {
    cy.visit('/breed')
    cy.get('#btnMoreBreed').click()
    cy.wait(2000)
  })
  it('Testeo Lectura Contenido Card Razas', () => {
    cy.wait(2000)
    cy.get('#nombreRaza').contains('BEAGLE')   
    cy.get('#alturaRaza').contains('33-41 cm.')  
    cy.get('#pesoRaza').contains('12-15 kg.')
    cy.get('#pelajeRaza').contains('Corto y suave.')
    cy.get('#caractRaza').contains('Muy bueno con los niños, casi carente de agresividad.')
    cy.get('#espacioRaza').contains('Puede vivir en un espacio pequeño como departamento, pero requiere de paseo y juegos a diario.')
    cy.get('#duenoRaza').contains('Familia con niños')
    cy.get('#actividadRaza').contains('Media-alta.') 
    cy.wait(2000)  
  })
  it('Testeo Cerrar Card Razas', () => {
    cy.get('#btnCerrarBreed').click()    
  })
})