function saveInfo() {
	let fullname = document.getElementById('fullname').value;
	let code = document.getElementById('code').value;
	let email = document.getElementById('mail').value;

	if (fullname && code && email) {
		let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
		students.push({
			fullname: fullname,
			code: code,
			email: email,
		});
		localStorage.setItem('students',JSON.stringify(students));
		this.renderListStudent();
	}
}

function renderListStudent() {
	let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
	if(students.length === 0) {
		document.getElementById('list-student').style.display = 'none';
		return false;
	}

	document.getElementById('list-student').style.display = 'block';

	let tableContent = `<tr>
		<td>#</td>
		<td>Ho va ten</td>
		<td>Ma hoc sinh</td>
		<td>Email</td>
		<td>Action</td>
	</tr>`;
	students.forEach((student, index) => {
		let studentId = index;
		index++;
		tableContent += `<tr>
			<td>${index}</td>
			<td>${students.fullname}</td>
			<td>${students.code}</td>
			<td>${students.email}</td>
			<td>
			<a href="#" onclick=changeStudentInfo(${studentId})>Edit</a> | <a href="#" onclick='deleteStudent(${studentId})'>Delete</a>	
			</td>
		</tr>`;
	})
	document.getElementById('grid-student').innerHTML= tableContent;

}

function deleteStudent(id) {
	let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
	students.splice(id,1);
	localStorage.setItem('students',JSON.stringify(students));
	renderListStudent();
}

