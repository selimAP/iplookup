document.addEventListener('DOMContentLoaded', () => {
    const getIPv4Data = async () => {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            if (!response.ok) throw new Error('Error fetching IPv4 address');
            const data = await response.json();
            const ipv4 = data.ip || 'Not available';
            document.getElementById('ipv4').innerText = ipv4;
            getLocationData(ipv4);
        } catch (error) {
            document.getElementById('ipv4').innerText = 'Not available';
            console.error('Error fetching IPv4 address:', error);
        }
    };

    const getIPv6Data = async () => {
        try {
            const response = await fetch('https://api64.ipify.org?format=json');
            if (!response.ok) throw new Error('Error fetching IPv6 address');
            const data = await response.json();
            document.getElementById('ipv6').innerText = data.ip || 'Not available';
        } catch (error) {
            document.getElementById('ipv6').innerText = 'Not available';
            console.error('Error fetching IPv6 address:', error);
        }
    };

    const getLocationData = async (ip) => {
        try {
            const response = await fetch(`http://ip-api.com/json/${ip}`);
            if (!response.ok) throw new Error('Error fetching location data');
            const data = await response.json();
            const location = `${data.city || 'Not available'}, ${data.country || 'Not available'}`;
            document.getElementById('location-text').innerText = location;
            document.getElementById('isp').innerText = data.isp || 'Not available';
        } catch (error) {
            document.getElementById('location-text').innerText = 'Not available';
            document.getElementById('isp').innerText = 'Not available';
            console.error('Error fetching location data (ip-api.com):', error);
        }
    };

    getIPv4Data();
    getIPv6Data();
});
