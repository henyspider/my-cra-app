import students from "./data.json";

export default class StudentsDatabase {
	constructor() {
		this.students = students;
		console.log("***", students);
	}

	addStudent() {}

	findStudentById() {}

	editStudentById() {}

	removeStudentById() {}
}
