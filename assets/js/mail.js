function sendMail() {
    
	var params = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		subject: document.getElementById('subject').value,
		message: document.getElementById('message').value,
	};

	const serviceId = 'service_v5x6soe';
	const templateId = 'template_29g7zfr';

	emailjs
		.send(serviceId, templateId, params)
		.then((res) => {
			document.getElementById('name').value = '';
			document.getElementById('email').value = '';
			document.getElementById('subject').value = '';
			document.getElementById('message').value = '';
			alert('Send email successfully');
		})
		.catch((err) => console.log(err));
}
