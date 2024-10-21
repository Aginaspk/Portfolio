function send(event) {
    event.preventDefault();
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    
       const serviceID = "service_rjwnz1q";
    const templateID = "template_6vpkbse";

    emailjs.send(serviceID, templateID, params).then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            
            console.log(res);
            alert("Your message was sent successfully");
        })
        .catch((err) => console.log(err));
}