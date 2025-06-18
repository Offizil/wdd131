  const btn  = document.querySelector('#menu');
  const nav  = document.querySelector('.navigation');

  btn.addEventListener('click', () => {
    nav.classList.toggle('show');

    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);

    // swap ☰ ↔ X
    btn.textContent = expanded ? '☰' : '✖';
    btn.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
  });




  // contact us
//   document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector(".reg_form");
//   const fname = document.querySelector("#fname");
//   const lname = document.querySelector("#lname");
//   const email = document.querySelector("#email");

//   form.addEventListener("submit", (e) => {
//     if (!fname.value || !lname.value || !email.value) {
//       e.preventDefault();
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const bookingInfo = {
//       firstName: fname.value.trim(),
//       lastName: lname.value.trim(),
//       email: email.value.trim(),
//       date: new Date().toLocaleString(),
//     };

//     localStorage.setItem("naraAppointment", JSON.stringify(bookingInfo));
//   });
// });

// thank you

  // document.addEventListener("DOMContentLoaded", () => {
  //   const stored = localStorage.getItem("naraAppointment");
  //   if (stored) {
  //     const { firstName, lastName, email, date } = JSON.parse(stored);
  //     document.getElementById("thanks").innerHTML = `
  //       <h2>Thank you, ${firstName} ${lastName}!</h2>
  //       <p>We've received your appointment request made on <strong>${date}</strong> using email <strong>${email}</strong>.</p>
  //     `;
  //   }
  // });





  // document.addEventListener("DOMContentLoaded", () => {
  //     const data = localStorage.getItem("naraAppointment");
  //     if (data) {
  //       const { firstName, lastName, email, date } = JSON.parse(data);
  //       document.getElementById("thanks").innerHTML = `
  //         <p>Thank you, <strong>${firstName} ${lastName}</strong>!</p>
  //         <p>We’ve received your request made on <strong>${date}</strong>.</p>
  //         <p>We’ll reach out to <strong>${email}</strong> with confirmation details.</p>
  //       `;
  //     }
  //   });

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#bookingForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Stop default submission

      const firstName = document.querySelector("#fname").value.trim();
      const lastName = document.querySelector("#lname").value.trim();
      const email = document.querySelector("#email").value.trim();
      const reason = document.querySelector("#raison").value.trim();

      // ✅ Input validation
      if (!firstName || !lastName || !email) {
        alert("Please fill in all required fields.");
        return;
      }

      // ✅ Generate confirmation ID
      const confirmationId = generateConfirmationID();

      // ✅ Store the form data in localStorage
      const appointmentData = {
        firstName,
        lastName,
        email,
        reason,
        date: new Date().toLocaleString(),
        confirmationId,
      };

      localStorage.setItem("appointment", JSON.stringify(appointmentData));

      // ✅ Redirect to thank-you page
      window.location.href = "thank_you.html";
    });
  }
});

function generateConfirmationID() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}


document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("appointment"));
  const thanks = document.querySelector("#thanks");

  if (data) {
    thanks.innerHTML = `
      <h2>🎉 Thank you, ${data.firstName}!</h2>
      <p>Your appointment request has been received.</p>
      <p><strong>Confirmation ID:</strong> ${data.confirmationId}</p>
      <p>We'll reach out to <strong>${data.email}</strong> with your appointment details shortly.</p>
      <p>Booking time: ${data.date}</p>
    `;
  }
});
