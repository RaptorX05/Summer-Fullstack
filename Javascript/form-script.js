const form = document.querySelector("form");

const handleSubmit = () => {

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSubmit();
});