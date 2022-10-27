
describe('Тестирование staya', function () {
    
    it('[+]Проверка авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click()
        cy.get('.auth-form > form > [type="email"]').type('demkadoo@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('TUUezg3lWlF3')
        cy.get('.auth-form__submit').click()
        cy.contains('Мои заказы');
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok').click()
         })




it('[-]Проверка авторизации с неправильным паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click()
        cy.get('.auth-form > form > [type="email"]').type('demkadoo@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('GghhjbJ')
        cy.get('.auth-form__submit').click()
        cy.contains('Невозможно войти с предоставленными учетными данными.');
         })

})