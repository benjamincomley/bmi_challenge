function BMICalculator(){
};

BMICalculator.prototype.metric_bmi = function(obj) {
  var kilograms = obj.kilograms;
  var centimeters = obj.centimeters;
  if (kilograms > 0 && centimeters > 0) {
    var finalBmiMetric = kilograms / (centimeters / 100 * centimeters / 100);
    obj.bmiValueMetric =  parseFloat(finalBmiMetric.toFixed(2));
    setBMIMessageMetric(obj);
  }
};

BMICalculator.prototype.imperial_bmi = function(obj) {
  var pounds = obj.pounds;
  var feet = obj.feet;
  var inches = obj.inches;
  if (pounds > 0 && feet > 0 && inches > 0) {
    var finalBmiImperial = (pounds * 703) / Math.pow((feet * 12 + inches), 2);
    obj.bmiValueImperial = parseFloat(finalBmiImperial.toFixed(2));
    setBMIMessageImperial(obj);
  }
};

function setBMIMessageMetric (obj) {

  if (obj.bmiValueMetric < 18.5) {
    obj.bmiMessageMetric = "Underweight"
  }
  if (obj.bmiValueMetric > 18.5 && obj.bmiValueMetric < 25) {
    obj.bmiMessageMetric = "Normal"
  }
  if (obj.bmiValueMetric > 25 && obj.bmiValueMetric < 30) {
    obj.bmiMessageMetric = "Overweight"
  }
  if (obj.bmiValueMetric > 30) {
    obj.bmiMessageMetric = "Obese"
  }
};

function setBMIMessageImperial (obj) {

  if (obj.bmiValueImperial < 18.5) {
    obj.bmiMessageImperial = "Underweight"
  }
  if (obj.bmiValueImperial > 18.5 && obj.bmiValueImperial < 25) {
    obj.bmiMessageImperial = "Normal"
  }
  if (obj.bmiValueImperial > 25 && obj.bmiValueImperial < 30) {
    obj.bmiMessageImperial = "Overweight"
  }
  if (obj.bmiValueImperial > 30) {
    obj.bmiMessageImperial = "Obese"
  }
}
