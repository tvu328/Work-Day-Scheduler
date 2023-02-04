var saveBtn = $(".saveBtn");
var date = $("#currentDay");
var currentDate = dayjs().format('dddd, MMMM D');
var timeBlock = $(".time-block");

$(document).ready(function () {
  date.text(currentDate);
  var currentHour = dayjs().hour();

  timeBlock.each(function () {
    var hour = parseInt($(this).attr("id"));
    if (hour < currentHour) {
      $(this).children(".col-8").attr("class", "col-8 col-md-10 description past");
    } else if (hour > currentHour) {
      $(this).children(".col-8").attr("class", "col-8 col-md-10 description future");
    } else {
      $(this).children(".col-8").attr("class", "col-8 col-md-10 description present");
    }
  });

  saveBtn.on("click", function (event) {
    event.preventDefault();
    var value = $(this).siblings(".col-8").val().replace(key);
    var key = $(this).parent().attr("id");

    localStorage.setItem(key, JSON.stringify(value));
  });

  for (var i = 9; i <= 17; i++) {
    $(`#${i} textarea`).val((JSON.parse(localStorage.getItem(`${i}`))));
  };
});