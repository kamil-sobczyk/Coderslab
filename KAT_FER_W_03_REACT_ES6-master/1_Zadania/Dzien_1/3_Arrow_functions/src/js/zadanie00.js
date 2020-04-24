var Students = function(students) {
	this.names = students;
  	this.numberOfLetters = [];
};

Students.prototype.countLetters = function(){
	this.names.map((name) => {
		this.numberOfLetters.push(name.length);
		})
};


var students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log('task00 ' + students.numberOfLetters);
