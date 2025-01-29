function calculateGWA() {
    // Get the name input from the user
    const name = document.getElementById('name').value;

    // Retrieve and parse grades from the input fields
    const grades = [
        parseFloat(document.getElementById('sub1').value),
        parseFloat(document.getElementById('sub2').value),
        parseFloat(document.getElementById('sub3').value),
        parseFloat(document.getElementById('sub4').value),
        parseFloat(document.getElementById('sub5').value)
    ];

    // Check if any of the grades are invalid (not a number)
    if (grades.some(isNaN)) {
        // Display an error message if any input is invalid
        document.getElementById('result').textContent = 'Please enter all grades correctly.';
        return; // Exit the function early
    }

    const sum = grades.reduce((total, grade) => total + grade, 0);

    const gwa = (sum / grades.length).toFixed(2);

    document.getElementById('result').textContent = `${name}, your General Weighted Average (GWA) is: ${gwa}`;
}

function calculateGWA() {
    const name = document.getElementById('name').value;

    const grades = [
        parseFloat(document.getElementById('gradrwe1').value),
        parseFloat(document.getElementById('grade2').value),
    ];

    if (grades.some(isNaN)) {
        document.getElementById('result').textContent = 'Please enter all grades correctly.';
        return; 
    }

    const sum = grades.reduce((total, grade) => total + grade, 0);

    const gwa = (sum / grades.length).toFixed(2);

    document.getElementById('result').textContent = `${name}, your General Weighted Average (GWA) is: ${gwa}`;
}

