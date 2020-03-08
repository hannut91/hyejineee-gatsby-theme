Feature("My First Test");

Scenario("test something", I => {
  console.log("testing...");
  I.amOnPage("https://github.com");
  I.see("GitHub");
});
