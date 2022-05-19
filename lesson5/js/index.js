const chk = document.getElementById('chk');
        
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});


//Contact form send data mock
const send = document.getElementById('send');

send.addEventListener('click', () => {

    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;

    alert(
        "Your message was successfully sent\n" + 
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Message: " + message + "\n"
    );
});