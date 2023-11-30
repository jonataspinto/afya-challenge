describe('Subscription', () => {
  it('should make a subscription correctly ', () => {
    cy.visit('http://localhost:3000/');

    cy.get('button')
      .contains('Assine agora e ganhe um desconto especial!')
      .should('be.visible')
      .click();

    cy.wait(2000);

    cy.url().should('eq', `http://localhost:3000/checkout`);

    cy.wait(2000);

    cy.get('button')
      .contains('finalizar pagamento')
      .should('be.visible')
      .and('be.disabled');

    cy.get('input[name="18"]').click();
    cy.get('input[name="creditCardNumber"]').type('5162000045678765');
    cy.get('input[name="creditCardExpirationDate"]').type('0227');
    cy.get('input[name="creditCardCVV"]').type('123');
    cy.get('input[name="creditCardHolder"]').type('Elton');
    cy.get('input[name="creditCardCPF"]').type('00000000000');
    cy.get('select').select('1');

    cy.get('button').contains('finalizar pagamento').not('be.disabled').click();

    cy.wait(2000);

    cy.url().should('eq', `http://localhost:3000/confirmation/1`);
  });

  it('should to show a error message when subscription to fail', () => {
    cy.visit('http://localhost:3000/');

    cy.get('button')
      .contains('Assine agora e ganhe um desconto especial!')
      .should('be.visible')
      .click();

    cy.wait(2000);

    cy.url().should('eq', `http://localhost:3000/checkout`);

    cy.wait(2000);

    cy.get('button')
      .contains('finalizar pagamento')
      .should('be.visible')
      .and('be.disabled');

    cy.get('input[name="18"]').click();
    cy.get('input[name="creditCardNumber"]').type('5162000045678765');
    cy.get('input[name="creditCardExpirationDate"]').type('0227');
    cy.get('input[name="creditCardCVV"]').type('123');
    cy.get('input[name="creditCardHolder"]').type('Elton');
    cy.get('input[name="creditCardCPF"]').type('00000000000');
    cy.get('input[name="couponCode"]').type('mock');
    cy.get('select').select('1');

    cy.get('button').contains('finalizar pagamento').not('be.disabled').click();

    cy.wait(2000);

    cy.contains(
      'Desculpe, ocorreu um erro ao tentar processar sua compra. Por favor, tente novamente mais tarde.',
    ).should('be.visible');
  });
});
