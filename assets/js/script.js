function calculateGWA() {
    // Get the name input from the user
    const name = document.getElementById('name').value;

    // Retrieve and parse grades from the input fields
    const grades = [
        parseFloat(document.getElementById('grade1').value),
        parseFloat(document.getElementById('grade2').value),
        parseFloat(document.getElementById('grade3').value),
        parseFloat(document.getElementById('grade4').value),
        parseFloat(document.getElementById('grade5').value)
    ];

    // Check if any of the grades are invalid (not a number)
    if (grades.some(isNaN)) {
        // Display an error message if any input is invalid
        document.getElementById('result').textContent = 'Please enter all grades correctly.';
        return; // Exit the function early
    }

    // Calculate the total sum of the grades
    const sum = grades.reduce((total, grade) => total + grade, 0);

    // Calculate the General Weighted Average (GWA) and round to 2 decimal places
    const gwa = (sum / grades.length).toFixed(2);

    // Display the result in the specified HTML element
    document.getElementById('result').textContent = `${name}, your General Weighted Average (GWA) is: ${gwa}`;
}

