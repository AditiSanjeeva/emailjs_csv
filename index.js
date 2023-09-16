(function () {
    emailjs.init("IERQNNMcaV7G7pK3C"); 
})();

function sendEmail(event) {
    event.preventDefault();

    var emailsInput = document.getElementById("emails");
    var emails = emailsInput.value.split(';').map(email => email.trim());
    var subject = document.getElementById("subject").value;
    var content = document.getElementById("content").value;

    const serviceID = "service_aqkucka"; 
    const templateID = "template_33jevaj"; 

    if (emails.length === 0 || !validateEmails(emails)) {
        alert("Please enter valid email addresses separated by semicolons.");
        return;
    }

    emails.forEach(function (email) {
        var params = {
            email: email,
            subject: subject,
            content: content,
        };

        emailjs.send(serviceID, templateID, params).then((res) => {
            console.log(`Message sent successfully to ${email}`);
        }).catch((err) => {
            console.log(`Error sending message to ${email}:`, err);
        });
    });

    emailsInput.value = '';
    document.getElementById('subject').value = '';
    document.getElementById('content').value = '';

    alert("Messages sent successfully");
}

function validateEmails(emails) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emails.every(email => emailRegex.test(email));
}