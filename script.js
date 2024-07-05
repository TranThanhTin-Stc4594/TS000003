function checkPassword() {
    var password = document.getElementById('password').value;
    var correctPassword = 'sasi'; // Đổi 'yourPassword' thành mật khẩu của bạn

    if (password === correctPassword) {
        document.getElementById('login-wrapper').style.display = 'none';
        document.getElementById('wrapper').style.display = 'block';
    } else {
        alert('Incorrect password!');
    }
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
}

function hien() {
    var hideElement = document.getElementById('hide');
    hideElement.classList.toggle('hidden');
}

// Prevent context menu
document.addEventListener('contextmenu', event => event.preventDefault());

// Prevent F12, Ctrl+U, Ctrl+C
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || 
        (event.ctrlKey && (event.key === 'u' || event.key === 'c'))) {
        event.preventDefault();
        alert('Sorry, This Functionality Has Been Disabled!');
    }
});
