const scriptURL =
  "https://script.google.com/macros/s/AKfycbwVWbZmA7Z_FcnYjVNwVzpFbZ2bDTbmPpkn3SLP-t310gLnWOl1lgSX2HgULGMRQ2xw/exec";

const form = document.forms["contract-form"];
const submitBtn = document.querySelector(".form-container .submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.classList.add("loading");
  submitBtn.disable = true;
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
