

initEvents()

function initEvents() {
    let form = document.querySelector('#contact-form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        let name = document.querySelector('#contact-name').value
        let subject = document.querySelector('#contact-subject').value
        let message = document.querySelector('#contact-message').value
        console.log(name, subject, message)
        sendEmail(name, subject, message)
    })
}



function sendEmail(name, subject, message) {
    var template_params = {
        subject,
        name,
        message
     }
     
     var service_id = "default_service";
     var template_id = "template_Y5oHJ6PP";
     emailjs.send(service_id, template_id, template_params);
}
