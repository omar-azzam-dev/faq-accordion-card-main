// all we need to open or close a question is to toggle question-opened class

let questions_controllers = document.querySelectorAll(".question-controller");
questions_controllers.forEach(function (questions_controller) {
	questions_controller.addEventListener("click", function () {
		questions_controller.classList.toggle("question-opened");
	});
});
