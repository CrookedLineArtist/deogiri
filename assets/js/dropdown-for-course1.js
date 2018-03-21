//console.log(courses[0].name);
//console.log(courses[0].degree);


var degree = [];
var course_name = {};
var first_dropdown = $('#first-dropdown');
var second_dropdown = $('#second-dropdown');
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

  $('#slider-course').empty();

  for (var i = 0; i < courses.length; i++) {

    if (courses[i].degree == update_second_dropdown) {
      update_data[i] = courses[i].name;
    }
  }

  update_data = jQuery.unique(update_data);
  update_data = update_data.filter(function(v) {
    return v !== ''
  });

  update_dropdown(update_data, second_dropdown);
  $('#slider-course').selectize();
  console.log(update_data);
};








// populate dropdown list


// $.each(degree, function(i, value) {
//     $("#slider-study-level").append(
//         $('<option></option>').val(value).html(value)
//     );
// });
