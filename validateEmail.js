function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

const email = "myemail@gmail.com";
console.log(`Is ${email} a valid email address? ${validateEmail(email) ? "Yes" : "No"}`);
