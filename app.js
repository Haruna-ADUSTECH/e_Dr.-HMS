document.addEventListener('DOMContentLoaded', function () {
    // Handle image preview for profile pictures
    const profilePicInputs = document.querySelectorAll('input[type="file"]');
    
    profilePicInputs.forEach(input => {
        input.addEventListener('change', function () {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const preview = document.querySelector(`#${input.dataset.preview}`);
                    if (preview) {
                        preview.src = e.target.result;
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    });

    // Handle form submissions (mock)
    const registrationForms = document.querySelectorAll('form');
    registrationForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            console.log('Form Submitted', Object.fromEntries(formData.entries()));
            alert('Form submitted successfully! (This is a mock submission)');
            this.reset();
        });
    });

    // Search for doctors (mock)
    const searchInput = document.querySelector('#searchDoctors');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const filter = this.value.toLowerCase();
            const doctorsList = document.querySelectorAll('.doctor-item');

            doctorsList.forEach(doctor => {
                const doctorName = doctor.querySelector('h4').textContent.toLowerCase();
                if (doctorName.includes(filter)) {
                    doctor.style.display = '';
                } else {
                    doctor.style.display = 'none';
                }
            });
        });
    }

    // Handle consultation request (mock)
    const consultationRequests = document.querySelectorAll('.request-item button');
    consultationRequests.forEach(button => {
        button.addEventListener('click', function () {
            alert('Consultation request sent! (This is a mock request)');
        });
    });
});
