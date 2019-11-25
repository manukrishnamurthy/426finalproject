

function getInfo() {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let artist1 = document.getElementById("artist1");
    let artist2 = document.getElementById("artist2");
    let artist3 = document.getElementById("artist3");
    let genre1 = document.getElementById("genre1");
    let genre2 = document.getElementById("genre2");
    let genre3 = document.getElementById("genre3");
    let raingenre = document.getElementById("RainGenre");
    let workout1 = document.getElementById("workout1");
    let workout2 = document.getElementById("workout2");
    let workout3 = document.getElementById("workout3");
    let sadboi = document.getElementById("sadboi");
    let firstsong = document.getElementById("firstsong");
    let momsong = document.getElementById("momsong");
    let underalbum = document.getElementById("underalbum");
    let guiltygenre = document.getElementById("guiltygenre");
    let concertartist = document.getElementById("concertartist");
    let leastfav = document.getElementById("leastfav");

    let person = new Object();
    person.username = username;
    person.email = email;
    person.password = password;
    person.artist1 = artist1;
    person.artist2 = artist2;
    person.artist3 = artist3;
    person.genre1 = genre1;
    person.genre2 = genre2;
    person.genre3 = genre3;
    person.raingenre = raingenre;
    person.workout1 = workout1;
    person.workout2 = workout2;
    person.workout3 = workout3;
    person.sadboi = sadboi;
    person.firstsong = firstsong;
    person.momsong = momsong;
    person.underalbum = underalbum;
    person.guiltygenre = guiltygenre;
    person.concertartist = concertartist;
    person.leastfav = leastfav;
    // Append the 'person' object to the data.js file with all of the users. Not sure how to link

}

function login() {
    // arr is a placeholder for an array with all the 'person' objects. Not sure how to link
    for (i = 0; i < arr.length; i++) {
        if (username == arr[i].username && password == arr[i].password) {
            console.log("Logged in!")
            // Link to login page
        }
    }
}