

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
    for(let j = 0; j<userData.length; j++){
        //check to make sure that account doesn't already exist
    }
    userData.append(person);
    // Append the 'person' object to the data.js file with all of the users. Not sure how to link

}
export const renderhomepage=function(){
    return `
    <section class="section has-background-primary" >
    <div class="columns">
            <div class="column">
                <h1 class="title has-text-white">Signup</h1>
                <form>
                    <div class="field">
                        <label class="label">Username</label>
                        <div class="control">
                            <input class="input" type="text" id = "username" placeholder="Username" name="username" required>
                        </div>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                          <input class="input" type="text" id = "email" placeholder="...@email.com" name="email" required>
                      </div>
                  </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input class="input" type="password" id = "password" placeholder="password" required>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Repeat Password</label>
                        <div class="control">
                            <input class="input" type="password" placeholder="repeatedpassword" name="password" required>
                        </div>
                    </div>
                    <br>
                    <div class="field">
                        <label class="title has-text-white">Music Preference Survey</label>
                        <br>
                        <br>
                        <p class="is-size-4 has-text-white">Top 3 artists</p>
                        <div class="control">
                          <input class="input" type="text" id = "artist1" placeholder="Katy Perry" name="Artist1">
                        </div>
                        <div class="control">
                          <input class="input" type="text" id = "artist2" placeholder="Taylor Swift" name="Artist2">
                        </div>
                        <div class="control">
                          <input class="input" type="text" id = "artist3" placeholder="Metallica" name="Artist3">
                        </div>
                        <br>
                        <p class="is-size-4 has-text-white">Top 3 genres</p>
                        <div class="control">
                          <input class="input" type="text" id = "genre1" placeholder="Indie Rock" name="Genre1">
                        </div>
                        <div class="control">
                          <input class="input" type="text" id = "genre2" placeholder="Hip Hop" name="Genre2">
                        </div>
                        <div class="control">
                          <input class="input" type="text" id = "genre3" placeholder="R&B" name="Genre3">
                        </div>
                        <br>
                        <p class="is-size-4 has-text-white">Rainy Day Genre</p>
                        <div class="control">
                          <input class="input" type="text" id = "RainGenre" placeholder="Sadboi music" name="RainGenre">
                        </div>
                        <br>
                        <p class="is-size-4 has-text-white">Top 3 Go-To Workout Songs</p>
                        <div class="control">
                          <input class="input" type="text" id = "workout1" placeholder="Hallelujah" name="workout1">
                        </div>
                        <div class="control">
                          <input class="input" type="text" id = "workout2" placeholder="22" name="workout2">
                        </div>
                        <div class="control">
                          <input class="input" type="text" id = "workout3" placeholder="Row Your Boat" name="workout3">
                        </div>
                        <br>
                        <p class="is-size-4 has-text-white">Sadboi Artist of Choice</p>
                        <div class="control">
                          <input class="input" type="text" id = "sadboi" placeholder="Adele" name="Sadboi">
                        </div>
                        <br>
                        <p class="is-size-4 has-text-white">First Song You Play When You Get the Aux</p>
                        <div class="control">
                          <input class="input" type="text" id = "firstsong" placeholder="All Night" name="firstsong">
                        </div>
                        <br>
                        <p class="is-size-4 has-text-white">Song You Play When Your Mom is in the Room</p>
                        <div class="control">
                          <input class="input" type="text" id = "momsong" placeholder="Feliz Navidad" name="momsong">
                        </div>
                        <br>
                        <p class="is-size-4 has-text-white">Underrated Album</p>
                        <div class="control">
                          <input class="input" type="text" id = "underalbum" placeholder="Damn" name="underalbum">
                        </div>
                        <br>
                        <p class="is-size-4 has-text-white">Guilty Pleasure Genre</p>
                        <div class="control">
                          <input class="input" type="text" id = "guiltygenre" placeholder="Bubblegum Pop" name="guiltygenre">
                        </div>
                        <br>
                        <p class="is-size-4 has-text-white">Artist whose Concert you Most Want to Attend</p>
                        <div class="control">
                          <input class="input" type="text" id = "concertartist" placeholder="Anderson.Paak" name="concertartist">
                        </div>
                        <br>
                        <p class="is-size-4 has-text-white">Least Favorite Genre</p>
                        <div class="control">
                          <input class="input" type="text" id = "leastfav" placeholder="Country" name="leastfav">
                        </div>
                        <br>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="button is-dark" id = "button" type="submit" onclick="getInfo()"/>
                        </div>
                    </div>
                </form>
            </div>
          <div class="column">
            <h1 class="title has-text-white">Login</h1>
                <form>
                    <div class="field">
                        <label class="label">Username</label>
                        <div class="control">
                            <input class="input" type="text" id = "loginusername" placeholder="Username" name="username" required>
                        </div>
                    </div>
                    <div class="field">
                      <label class="label">Password</label>
                      <div class="control">
                          <input class="input" type="text" id = "loginpassword" placeholder="...@email.com" name="email" required>
                      </div>
                  </div>
                  <div class="field">
                      <div class="control">
                          <input class="button is-dark" id = "loginsubmit" type="submit" onclick="getInfo()"/>
                      </div>
                  </div>
                </form>
          </div>
        
    </div>
    </section>`
}
export const renderuserprofile = function(user){
    //use user information from data.js or person object to construct user rpofile
}
export const handleloginsubmit = function(event){
    //replaceWith(renderUserProfile(userData[whichever user it was]))
}
//on click submit button for login or signup - generate user profile - render html as jquery object, replace index with user profile object
function main(){
    window.$root = $('#root');
    let homepage = renderhomepage();
    $root.append(homepage)
    $root.on("click", "#submit", handleloginsubmit);
    //renders
}
main();
// function login() {
//     // arr is a placeholder for an array with all the 'person' objects. Not sure how to link
//     for (i = 0; i < arr.length; i++) {
//         if (username == arr[i].username && password == arr[i].password) {
//             console.log("Logged in!")
//             // Link to login page
//         }
//     }
// }
