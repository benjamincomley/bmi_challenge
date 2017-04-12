describe('BMI_UI_metric - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    $('#kilograms').val('90');
    $('#centimeters').val('186');
    $('#calculate_metric').trigger('click');
  });

  it("displays BMI Value for metric", function() {
    expect($('#display_value_metric').text()).toBe('Your BMI is 26.01');
  });

  it("displays BMI Message for metric", function() {
    expect($('#display_message_metric').text()).toBe('and you are Overweight');
  });
});

describe('BMI_UI_imperial - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    $('#pounds').val('198');
    $('#feet').val('6');
    $('#inches').val('1');
    $('#calculate_imperial').trigger('click');
  });

  it("displays BMI Value for imperial", function() {
    expect($('#display_value_imperial').text()).toBe('Your BMI is 26.12');
  });

  it("displays BMI Message for imperial", function() {
    expect($('#display_message_imperial').text()).toBe('and you are Overweight');
  });
});
