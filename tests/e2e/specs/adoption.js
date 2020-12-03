describe('Sección Adopta Test', () => {
    it('Testeo Abrir Card Adopta', () => {  
      cy.visit('/adoption')
      cy.get('#btnMoreAdoption').click()
      cy.wait(2000)
    })
    it('Testeo Lectura Card Adopta', () => {
      cy.wait(2000)
      cy.get('#textoCard').contains('h5', 'Datos Mascota') 
      cy.get('#nombreMascota').contains('div', 'BENITO')      
      cy.get('#sexoMascota').contains('div', 'Macho') 
      cy.get('#edadMascota').contains('div', '1 año')    
      cy.get('#tamanoMascota').contains('div', 'Pequeño') 
      cy.get('#esterilizadoMascota').contains('div', 'Sí')
      cy.get('#aptoParaDpto').contains('div', 'Sí') 
      cy.get('#aptoOtrasMascotas').contains('div', 'Sí')       
      cy.get('#AptoNinos').contains('div', 'Sí') 
      cy.get('#datosContacto').contains('h5', 'Datos contacto')      
      cy.get('#nombreContacto').contains('div', 'Bruce Wayne')   
      cy.get('#numeroContacto').contains('div', '+56912345678')  
      cy.wait(2000)   
    })
    it('Testeo Cerrar Card Adopta', () => {
      cy.get('#btnCerrarAdoption').click()    
    })
  })
  