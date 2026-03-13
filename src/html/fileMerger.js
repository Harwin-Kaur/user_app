export const makeHTMLString = (userArg) => {
    console.log(userArg);

    const str = userArg.reduce((acc, user) => user.length ? acc + `<li>${user.split(",")[0]} : ${user.split(",")[1]}</li>` :  acc, "");

    // const str = userArg.reduce((acc, user) =>  `<li> ${user}</li>`);
    // console.log(str);
    return `
    

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

<link rel="stylesheet" href="./style.css">

    <title>My User Diary</title>
</head>
<style>
    /* body{
        margin: 0;
        padding: 0;
    }

    .wrapper{
        font-size: 2rem;
    }

    nav{
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }
    a{
        color: white;
    } */
</style>
<body>
    <div class="wrapper">
        <nav style="background: black; color: white;">
            <div>SRR</div>
            <div>
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
        </nav>
    </div>
    
<div class="container">
    <h1>Welcome to our Community</h1>
    <hr /><ul>`
    + str +
`</ul></div>
    
</body>
</html>
    `; 
}