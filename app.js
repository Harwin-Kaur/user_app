import express from 'express';
const app = express();
const PORT = 8000;
import path from 'path';
import fs from 'fs'; 

const __dirname = path.resolve();
console.log(__dirname + "========");

//server static files from the public directories

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true})); //middleware

//to join multiple paths

    // app.use(express.static(path.join(__dirname, "public")));

// app.get('/', (req, res) => {
//     console.log(req);
//     console.log('We got the request');

//     res.send("<h1>Hello Server Dev</h1> <hr/> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>");
// });

  //Home page controller

app.get("/", (req, res) => {
    console.log("request received");
    res.sendFile(__dirname +"/src/html/index.html");
})


app.get("/get-user", (req, res) => {
    res.json({
        fName: "Harwin",
        lName: "Kaur",
    })
})

//this one will give api only


    /* app.get("/api/v1/get-user", (req, res) => {
        res.json({
            fName: "Harwin",
            lName: "Kaur",
        })
    })  */


// user registeration controller

app.get("/register", (req, res) => {
    console.log(req.query);
    console.log("request received login");
    res.sendFile(__dirname +"/src/html/register.html");
})

const fileName = "userList.csv";
app.post("/register", (req, res) => {  //server 
    const {name, email, password} = req.body;

    const str = `${name},${email},${password}\n`;

    // console.log(str.split(","));

    //store the data and create the file and write the data in it


    fs.appendFile(fileName, str, (error)=>{
        error ? res.send(error.message) : res.redirect("/");
        // res.send(`<h1 class='alert alert-success'>User has been created, you may login now</h1>`); 
    });
    
    // res.sendFile(__dirname +"/src/html/register.html");
})

//User Login controller

app.get("/login", (req, res) => {
    console.log("request received");
    res.sendFile(__dirname +"/src/html/login.html");
})

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is running at http://localhost:${PORT}`);
});

