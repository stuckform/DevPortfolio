const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_gmpxs6l';

   emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
       btn.value = 'Send Email';
     Swal.fire({
  title: '',
  text: "Are you sure you want to send?",
  icon: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, send it!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title:'Sent!',
      text:'Thank you for contacting me.',
      icon:'success'
    })
    document.getElementById("form").reset();
  }
})
     }, (err) => {
       btn.value = 'Send Email';
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Something went wrong!',
         });
     });
    alert(JSON.stringify(err));
});