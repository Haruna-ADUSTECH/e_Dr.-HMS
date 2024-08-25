// Function to handle the display of additional fields based on user type
function handleUserTypeChange() {
    const userType = document.getElementById('user_type').value;
    const specializationGroup = document.querySelector('.specialization-group');
    const specializationInput = document.getElementById('specialization');

    if (userType === 'doctor') {
        specializationGroup.style.display = 'block';
        specializationInput.setAttribute('required', 'required');
    } else {
        specializationGroup.style.display = 'none';
        specializationInput.removeAttribute('required');
    }
}

// Event listener for the user type dropdown
document.getElementById('user_type').addEventListener('change', handleUserTypeChange);

// Function to handle form submission
function handleFormSubmit(event) {
    const userType = document.getElementById('user_type').value;
    const profilePicture = document.getElementById('profile_picture').files[0];

    // Basic validation for required fields
    if (!userType) {
        alert('Please select your user type.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (!profilePicture) {
        alert('Please upload a profile picture.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Additional validation logic can be added here

    // Form can be submitted if all checks pass
}

// Event listener for form submission
document.querySelector('.register-form').addEventListener('submit', handleFormSubmit);
