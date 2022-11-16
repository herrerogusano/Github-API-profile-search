const spinner = document.getElementById("spinner");

const showSpinner = () => {
    spinner.classList.add('show');
}
const hideSpinner = () => {
    spinner.classList.remove('show');
}

const showUserName = () => {
    showSpinner();
    let username = document.getElementById('gusername').value;
    let url = 'https://api.github.com/users/'+username;
    fetch(url).then((response) => response.json())
    .then((data) => {
        hideSpinner();
        if(data.message) {
            document.getElementById('result').innerHTML = `
                <h3>Profile not found</h3>
            `
        }
        else {
            document.getElementById('result').innerHTML = `
                <img src=${data.avatar_url} alt="Avatar not found" style="width: 25%;">
                <p> ${data.name} (${data.login})</p>
                <p> ${data.bio} </p>
            `
        }
    })
    .catch((err) => {
        console.error(err, 'cagada');
    })
}

document.getElementById('btn').addEventListener('click', showUserName);

/* fetch('https://api.github.com/users/herrerogusano', { 
                method: 'GET',
                mode: 'no-cors',})
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => {
            console.log(data, "texto")
        })
		.catch( error => {
            console.error(error, "cagaste")
        }); */