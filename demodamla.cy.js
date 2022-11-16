/// <reference types="cypress" />

context('demodamla', () => {

  it('Test Amazon', () => {
    cy.visit('https://amazon.com')
    cy.get('.nav-line-1-container')
    .click()
    cy.get('#ap_email')
      .type('kbusedamla@gmail.com')
      cy.get('.a-button-inner > #continue')
      .click()
      cy.get('#ap_password')
      .type('123456789+')
      cy.wait(7000)
      cy.get('#signInSubmit')
      .click()

  cy.wait(5000)
    cy.get('#twotabsearchtextbox')
      .type('Huawei GT3')
    cy.get('#nav-search-submit-button').click()  
    cy.get('[data-asin="B09X64Q21P"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-section.a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium')
    .click()
    cy.get('#add-to-cart-button')
    .click()
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input')
    .click()
    cy.get('#address-ui-widgets-countryCode > .a-button-inner > .a-button-text')
    .click()
    cy.get('#address-ui-widgets-countryCode-dropdown-nativeId_224')
    .click()
    cy.get('#address-ui-widgets-enterAddressFullName')
    .type('Buse Damla Kol')
    cy.get('#address-ui-widgets-enterAddressLine1')
    .type('Test street')
    cy.get('#address-ui-widgets-enterAddressLine2')
    .type('test apartment')
    cy.get('#address-ui-widgets-enterAddressCity')
    .type('test city')
    cy.get('#address-ui-widgets-enterAddressStateOrRegion')
    .type('test state')
    cy.get('#address-ui-widgets-enterAddressPostalCode')
    .type('12345')
    cy.get('#address-ui-widgets-enterAddressPhoneNumber')
    .type('+905331552233')
    cy.get('#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input')
    .click()



    })

    

 
  })
  

