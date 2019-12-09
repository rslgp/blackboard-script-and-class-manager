import { defineSupportCode } from 'cucumber';

import { browser, $, element, ElementArrayFinder, by, protractor } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sameCPF = ((elem, cpf) => elem.element(by.name('cpflist')).getText().then(text => text === cpf));
let sameName = ((elem, name) => elem.element(by.name('nomelist')).getText().then(text => text === name));

let pAND = ((p,q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the Responder Roteiro page$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('Angular App');
        await $("a[name='ResponderRoteiro']").click();
    })

    When(/^I try to register the answer "([^\"]*)"$/, async (answer) => {
        await $("textarea[id='respostaAlunoQuestao1']").sendKeys(<string> answer);
        await element(by.buttonText('Confirmar')).click();
    });

   Then(/^I can see the question 2 at the Responder Roteiro page$/, async() =>{
    (element(by.name('questao-2')).isDisplayed()).then( function(value) {
        expect(value).to.be.true;

    })
        
   });

})
