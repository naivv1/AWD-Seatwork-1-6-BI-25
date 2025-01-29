function addStudentRecord() {
    const lastName = document.getElementById('lname').value.trim();
    const firstName = document.getElementById('fname').value.trim();
    const middleName = document.getElementById('mname').value.trim();

    const grades = [
        parseFloat(document.getElementById('sub1').value),
        parseFloat(document.getElementById('sub2').value),
        parseFloat(document.getElementById('sub3').value),
        parseFloat(document.getElementById('sub4').value),
        parseFloat(document.getElementById('sub5').value)
    ];

    if (!lastName || !firstName || !middleName || grades.some(isNaN)) {
        alert('Please fill out all fields correctly.');
        return;
    }

    const totalGrades = grades.reduce((sum, grade) => sum + grade, 0);
    const gwa = (totalGrades / grades.length).toFixed(2);

    const student = { lastName, firstName, middleName, grades, gwa };
    const students = JSON.parse(localStorage.getItem('students')) || [];

    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    document.getElementById('gradeForm').reset();
    displayStudentRecords();
}

function deleteStudent(index) {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudentRecords();
}

function displayStudentRecords() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.lastName}, ${student.firstName} ${student.middleName}</td>
            <td>${student.grades[0]}</td>
            <td>${student.grades[1]}</td>
            <td>${student.grades[2]}</td>
            <td>${student.grades[3]}</td>
            <td>${student.grades[4]}</td>
            <td>${student.gwa}</td>
            <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

window.onload = displayStudentRecords;
