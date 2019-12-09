Feature: As a aluno
         I want to answer an question
         So that go to next question

Scenario: Answer questão 1
Given I am at the Responder Roteiro page
When I try to register the answer "resposta do aluno na questão 1"
Then I can see the question 2 at the Responder Roteiro page
