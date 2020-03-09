Feature("Main page Test");

Scenario("I see the main page. ", I => {
  I.amOnPage("/");
  I.see("hyejineee");
});

Scenario("I see a list of recently written articles.", I => {
    I.amOnPage("/");
    I.see("hyejineee");
  });
