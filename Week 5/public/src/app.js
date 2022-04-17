const doLogin = function(e) {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    async function login(){
        return {
            username: username,
            password: password,
        }
    }
    login().then(function(res) {
        console.log(res);
        window.location.href = "Home.html"
    });
    return false;
};

const doRegister = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    register({
        username: username,
        email: email,
        password: password
    }).then(function(res) {
        window.location.href = '/public/Home.html';
    });
};

const doaRegister = function(e){
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    register({
       username: username,
       email: email,
       password: password
    }).then(function(res) {
        window.location.href ='/public/Home.html';
})
}


const dologut = function(e) {
    e.preventDefault();
    logout();
    window.location.href = '/';
};