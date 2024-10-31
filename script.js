fetch('https://ip-api.com/json/')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ipv4').innerText = data.query || 'Not available';
        document.getElementById('isp').innerText = data.isp || 'Not available';
        document.getElementById('city').innerText = data.city || 'Not available';
        document.getElementById('country').innerText = data.country || 'Not available';
    })
    .catch(error => {
        document.getElementById('ipv4').innerText = 'Error retrieving data';
        console.error('Error:', error);
    });

fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ipv6').innerText = data.ip;
    })
    .catch(error => {
        document.getElementById('ipv6').innerText = 'Not available';
        console.error('IPv6 Error:', error);
    });
