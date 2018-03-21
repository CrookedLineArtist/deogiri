//console.log(courses[0].name);
//console.log(courses[0].degree);


var degree = [];
var course_name = {};
var first_dropdown = $('#slider-study-level');
var second_dropdown = $('#slider-course');
var data, id, update_second_dropdown;


for (var i = 0; i < courses.length; i++) {

  degree[i] = courses[i].degree;
  course_name[i] = courses[i].name;

};

degree = jQuery.unique(degree);
degree = degree.filter(function(v) {
  return v !== ''
});
console.log(degree);

function update_dropdown(data, id) {
  $.each(data, function(i, value) {
    id.append(
      $('<option></option>').val(value).html(value)
    );
  });
};

update_dropdown(degree, first_dropdown);
//update_dropdown(course_name, second_dropdown);



var update_data = [];

function changedropdown(update_second_dropdown) {

  update_data = [];

  var x = $('#slider-course').selectize();
  var y = x[0].selectize;

  //$('#slider-course').empty();

  for (var i = 0; i < courses.length; i++) {

    if (courses[i].degree == update_second_dropdown) {
      update_data[i] = courses[i].name;
    }
  }

  update_data = jQuery.unique(update_data);
  update_data = update_data.filter(function(v) {
    return v !== ''
  });

  y.clearOptions();

  for (var i in update_data) {
    y.addOption({
      value: i,
      text: update_data[i]
    });
  }

  y.refreshOptions();
  console.log(update_data);
};
