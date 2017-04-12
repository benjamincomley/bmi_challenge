function Person(attr) {
  this.kilograms = attr.kilograms;
  this.centimeters = attr.centimeters;
  this.pounds = attr.pounds;
  this.feet = attr.feet;
  this.inches = attr.inches;
}

Person.prototype.calculate_bmi_metric = function() {
  calculator = new BMICalculator();
  calculator.metric_bmi(this);
};

Person.prototype.calculate_bmi_imperial = function() {
  calculator = new BMICalculator();
  calculator.imperial_bmi(this);
};
