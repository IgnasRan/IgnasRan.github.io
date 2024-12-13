function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhone(phone) {
    const regex = /^\+?[0-9]{7,15}$/;
    return regex.test(phone);
}

function submitForm() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    const email = formData.get('email');
    const phone = formData.get('phone');
    const address = formData.get('address');

    let isValid = true;

    const emailError = document.getElementById('emailError');
    if (!validateEmail(email)) {
        emailError.textContent = 'Neteisingas el. pašto adresas!';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    const phoneError = document.getElementById('phoneError');
    if (!validatePhone(phone)) {
        phoneError.textContent = 'Neteisingas telefono numeris!';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    const addressError = document.getElementById('addressError');
    if (address.trim() === '') {
        addressError.textContent = 'Adresas negali būti tuščias!';
        isValid = false;
    } else {
        addressError.textContent = '';
    }

    if (!isValid) {
        alert('Prašome ištaisyti klaidas formoje!');
        return;
    }

    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email,
        phone,
        address,
        question1: Number(formData.get('question1')),
        question2: Number(formData.get('question2')),
        question3: Number(formData.get('question3')),
        question4: Number(formData.get('question4')),
        question5: Number(formData.get('question5')),
    };

    console.log(data);

    const average = (data.question1 + data.question2 + data.question3 + data.question4 + data.question5) / 5;

    const resultDiv = document.getElementById('result');

    let color;
    if (average < 4) {
        color = 'red';
    } else if (average < 7) {
        color = 'orange';
    } else {
        color = 'green';
    }

    resultDiv.innerHTML = `
        <h3>Rezultatai:</h3>
        <p>Vardas Pavardė (el. pašto adresas): ${data.firstName} ${data.lastName} (${data.email})</p>
        <p>Telefono numeris: ${data.phone}</p>
        <p>Adresas: ${data.address}</p>
        <p style="color: ${color};">Vidurkis: ${average.toFixed(2)}</p>
    `;
}