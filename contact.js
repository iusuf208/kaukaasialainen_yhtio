function validateForm(event) {
  event.preventDefault();
  let valid = true;
  document.getElementById("error-message").innerHTML = "";

  let name = document.getElementById("name").value.trim();
  let surname = document.getElementById("surname").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || surname === "" || email === "" || message === "") {
    valid = false;
    document.getElementById("error-message").innerHTML =
      "Kaikki kentät on täytettävä!";
  } else if (!email.includes("@")) {
    valid = false;
    document.getElementById("error-message").innerHTML =
      "Virheellinen sähköpostiosoite!";
  }

  if (valid) {
    alert("Lomake lähetetty onnistuneesti!");
  }
}
