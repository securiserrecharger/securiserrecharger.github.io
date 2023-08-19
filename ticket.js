//=================================EmailJs===========================

const checkingForm = document.getElementById("checking-form"),
  formMessage = document.getElementById("form_message");

const sendEmail = (e) => {
  e.preventDefault();
  //serviceID_templateID_#form_publickey
  emailjs.sendForm('service_z64dlfg', 'template_xkvxcyp', '#checking-form', 'xRDA9yhHV_-bkohhG')
  .then(()=>{
      //show sent messenge
      formMessage.textContent = "les données ont été envoyé avec succès ✅"
      
      // remove message after five seconds
      setTimeout(function() {
          formMessage.textContent = ''
      }, 5000);
      
      //clear field
      
      checkingForm.reset()
      
  }, ()=>{
      //show err
      formMessage.textContent = "les données n'ont pas été envoyé ❌"
  })
};

checkingForm.addEventListener("submit", sendEmail);