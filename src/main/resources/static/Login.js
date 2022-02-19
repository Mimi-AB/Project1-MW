function login()
{
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let loginObj = 
    {
        email,
        password
    }

    fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify(loginObj)
    }).then((res) => {
              console.log(res.headers.get('role'));
              document.cookie = `role=${res};`;
              console.log(res);
              let x = res.headers.get('role');

              if (x == 0)
              {
              window.location.href = "managerdash.html"
              }
              if (x == 1)
              {
              window.location.href = "employeedash.html"
              }
          });
}
let loginBtn = document.getElementById('login').addEventListener('click', login);
