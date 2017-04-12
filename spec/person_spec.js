describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({kilograms:90, centimeters: 186, pounds: 198, feet: 6, inches: 1});
  });

  it("should have a metric kilogram weight of 90", function() {
    expect(person.kilograms).toEqual(90);
  });

  it("should have metric centimeter height of 186", function() {
    expect(person.centimeters).toEqual(186);
  });

  it("should have an imperial pound weight of 198", function() {
  expect(person.pounds).toEqual(198);
  });

  it("should have an imperial feet height of 6", function() {
  expect(person.feet).toEqual(6);
  });

  it("should had an imperial inches height of 1", function() {
  expect(person.inches).toEqual(1);
  });

  it("should calculate metric BMI value", function() {
    person.calculate_bmi_metric();
    expect(person.bmiValueMetric).toEqual(26.01)
  });

  it("should have a metric BMI Message", function() {
    person.calculate_bmi_metric();
    expect(person.bmiMessageMetric).toEqual("Overweight")
  });

  it("should calculate Imperial BMI value", function() {
    person.calculate_bmi_imperial();
    expect(person.bmiValueImperial).toEqual(26.12)
  });

  it("should have an Imperial BMI Message", function() {
    person.calculate_bmi_imperial();
    expect(person.bmiMessageImperial).toEqual("Overweight")
  });

});
