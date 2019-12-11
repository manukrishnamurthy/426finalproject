//const userData = require("./data");
let personid = 0;
// function getInfo() {
//     let username = document.getElementById("#username");

//     let email = document.getElementById("#email");
//     alert(email)
//     let password = document.getElementById("#password");
//     let artist1 = document.getElementById("#artist1");
//     let artist2 = document.getElementById("#artist2");
//     let artist3 = document.getElementById("#artist3");
//     let genre1 = document.getElementById("#genre1");
//     let genre2 = document.getElementById("#genre2");
//     let genre3 = document.getElementById("genre3");
//     let raingenre = document.getElementById("RainGenre");
//     let workout1 = document.getElementById("workout1");
//     let workout2 = document.getElementById("workout2");
//     let workout3 = document.getElementById("workout3");
//     let sadboi = document.getElementById("sadboi");
//     let firstsong = document.getElementById("firstsong");
//     let momsong = document.getElementById("momsong");
//     let underalbum = document.getElementById("underalbum");
//     let guiltygenre = document.getElementById("guiltygenre");
//     let concertartist = document.getElementById("concertartist");
//     let leastfav = document.getElementById("leastfav");

//     let person = new Object();
//     person.username = username;
//     person.email = email;
//     person.password = password;
//     person.artist1 = artist1;
//     person.artist2 = artist2;
//     person.artist3 = artist3;
//     person.genre1 = genre1;
//     person.genre2 = genre2;
//     person.genre3 = genre3;
//     person.raingenre = raingenre;
//     person.workout1 = workout1;
//     person.workout2 = workout2;
//     person.workout3 = workout3;
//     person.sadboi = sadboi;
//     person.firstsong = firstsong;
//     person.momsong = momsong;
//     person.underalbum = underalbum;
//     person.guiltygenre = guiltygenre;
//     person.concertartist = concertartist;
//     person.leastfav = leastfav;
//     let exists = 0;
//     for(let j = 0; j<userData.length; j++){
//       alert("hi")
//       let maxid = 0;
//         if(userData[j].email==person.email){
//           alert("An account with that email has already been created, please try again");
//           exists=1;
//         }
//         if(userData[j].id>maxid){
//           maxid = userData[j].id;
//         }
//         //check to make sure that account doesn't already exist
//     }
//     if(exists==0){
//       person.id = maxid+1;
//     }
//     //userData.append(person);
//     // Append the 'person' object to the data.js file with all of the users. Not sure how to link
//     personid = person.id;
// }
export const renderhomepage=function(){
    return `
    <section class="section has-background-primary" >
    <form id="homepage">
      <h1 class="title has-text-white">Genre Search</h1>

        <div class="columns">
          <div id="genresearchhomepage" class="column is-11">
            <input class="input" type="search" id="txt-search" placeholder="Hip-hop">
          </div>
          <div class="column is-1">
            <div class="field">
              <div class="control">
                  <input class="button is-dark" id = "genresubmit" type="submit" />
              </div>
            </div>
          </div>
            <label class="label" id="output"></label>
            <label class="label" id="matches"></label>
        </div>

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
                            <input class="button is-dark" id = "signupsubmit" type="submit" />
                        </div>
                    </div>
                </form>
            </div>
          <div class="column">
            <h1 class="title has-text-white">Login</h1>
                <form id="loginform">
                    <div class="field">
                        <label class="label">Username</label>
                        <div class="control">
                            <input class="input" type="text" id = "loginusername" placeholder="Username" name="username" required>
                        </div>
                    </div>
                    <div class="field">
                      <label class="label">Password</label>
                      <div class="control">
                          <input class="input" type="password" id = "loginpassword" name="loginpassword" required>
                      </div>
                  </div>
                  <div class="field">
                      <div class="control">
                          <input class="button is-dark" id = "loginsubmit" type="submit"/>
                      </div>
                  </div>
                </form>
          </div>
        
    </div>
    </form>
    </section>`
}
export const renderquizpage = function(questions){
  return `<div class="section">
  <h1 class = "title">Twitter Quiz</h1>
  </div>`
}

export const renderquizpop = function(){
  return`<div id="quizpop">
  <section class="section">
    <div class="container">
    <h1 class="title is-1 has-text-white">Pop Music Quiz</h1>  
        <div class="content">
          <div class="subtitle">
          <form>
            <ol type="1">
              <li class="">Which artist recently had a song featured on a Spiderman movie?</li>
                <div class="control">
                  <label class="radio">
                    <input type="radio" name="answer">
                    Post Malone
                  </label>
                  <label class="radio">
                    <input type="radio" name="answer">
                    Khalid
                  </label>
                </div>
              <li class="">In his album No. 6 Collaborations Project, who did Ed Sheeran not partner with?</li>
              <div class="control">
                <label class="radio">
                  <input type="radio" name="answer">
                  Camila Cabello
                </label>
                <label class="radio">
                  <input type="radio" name="answer">
                  Ella Mai
                </label>
                <label class="radio">
                  <input type="radio" name="answer">
                  Ariana Grande                
                  </label>
              </div>  
              <li class="">What album did Khalid release in 2019?</li>
                <div class="select">
                  <select>
                    <option>Select</option>
                    <option>Free Spirit</option>
                    <option>American Teen</option>
                    <option>Suncity</option>
                  </select>
              </div>
            </ol>
          </div>
          <button class="button is-medium" style="primary" data-id="" id="submitquiz" type="">Submit</button>
          </form>
        </div>
    </div>
  </section>
  </div>`
}
export const renderuserprofile = function(user){
        //use user information from data.js or person object to construct user rpofile
        return`<div id="userprofile">
        <div class="columns">
          <div class="column is-four-fifths">  
            <h1 class="title is-1">Welcome ${user.username}!</h1>
          </div>
          <div class="column">
            <button class="button is-medium" style="primary" data-id="${user.username}" id="signout" type="">Sign Out</button>
          </div>
        </div>
        <section class="section">
        <div class="container">
        <h1 class="title is-1 has-text-white">Your Music Profile</h1>
        <div class="columns">
          <div class="column">  
            <div class="content">
              <h1 class="title">Top Artists</h1>
              <div class="subtitle">
                <ol type="1">
                  <li class="">${user.artist1}</li>
                  <li class="">${user.artist2}</li>
                  <li class="">${user.artist3}</li>
                </ol>
              </div>
            </div>
            <div class="content">
              <h1 class="title">Top Genres</h1>
              <div class="subtitle">
                <ol type="1">
                  <li class="">${user.genre1}</li>
                  <li class="">${user.genre2}</li>
                  <li class="">${user.genre2}</li>
                </ol>
              </div>
            </div>
            <div class="content">
              <h1 class="title">Rainy Day Genre</h1>
              <div class="subtitle">
                <ol type="1">
                  <li class="">${user.raingenre}</li>
                </ol>
              </div>
            </div>
            <div class="content">
              <h1 class="title">Top Go-To Workout Songs</h1>
              <div class="subtitle">
                <ol type="1">
                  <li class="">${user.workout1}</li>
                  <li class="">${user.workout2}</li>
                  <li class="">${user.workout3}</li>
                </ol>
              </div>
            </div>
            <div class="content">
              <h1 class="title">Saboi Artist of Choice</h1>
              <div class="subtitle">
                <ol type="1">
                  <li class="">${user.sadboi}</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <h1 class="title">First Song You Play When You Get the Aux</h1>
              <div class="subtitle">
                <ol type="1">
                 <li class="">${user.firstsong}</li>
                </ol>
              </div>
            </div>
            <div class="content">
              <h1 class="title">Song You Play When Your Mom is in the Room</h1>
              <div class="subtitle">
                <ol type="1">
                  <li class="">${user.momsong}</li>
                </ol>
              </div>
            </div>
            <div class="content">
              <h1 class="title">Underrated Album</h1>
              <div class="subtitle">
                <ol type="1">
                  <li class="">${user.underalbum}</li>
                </ol>
              </div>
            </div>
            <div class="content">
              <h1 class="title">Guilty Pleasure Genre</h1>
              <div class="subtitle">
                <ol type="1">
                  <li class="">${user.guiltygenre}</li>
                </ol>
              </div>
            </div>
            <div class="content">
              <h1 class="title">Artisit Whose Concert You Wanted to Attend</h1>
              <div class="subtitle">
                <ol type="1">
                  <li class="">${user.concertartist}</li>
                </ol>
              </div>
            </div>
            <div class="content">
              <h1 class="title">Least Favorite Genre</h1>
              <div class="subtitle">
                <ol type="1">
                  <li class="">${user.leastfav}</li>
                </ol>
              </div>
            </div>
          </div>
          </div>
          </div>
          </section>
          <section class="section">
          <div class="container">
          <h1 class="title is-2 has-text-white">Your Music Profile</h1>
            <div class="content">
              <button class="button is-medium" style="primary" data-id="${user.id}" id="renderquiz" type="submit">Take Quiz</button>
            </div>
            <div class="content">
              <h2 class="title is-2">your quizzes</h2>
            </div>
          </div>
          </section>
        </div>`
}
export const handleloginsubmit = async function(event){
  event.preventDefault();
  const $homepage = $(event.target).closest('#homepage');
  const $login = $(event.target).closest('#loginform');
  let infoarray = $login.serializeArray();
  //console.log(infoarray)
  let username = infoarray[0].value;
  //console.log(username)
  let password = infoarray[1].value;
  //console.log(password)
  let r = axios.post('http://localhost:3000/account/login',
    {
      name: username,
      pass: password
    });
  r.then(response => {
    console.log(response.data);
    window.jwt = response.data.jwt;
    let usertorender = response.data.data;
    //console.log(usertorender)
    //console.log(renderuserprofile(usertorender))
    //console.log($homepage)
    console.log($homepage)
    $homepage.replaceWith(renderuserprofile(usertorender));
  }).catch(error => {
    console.log(error);
  });
}
export const handlesignout = async function(event){
  const $userprofile = $(event.target).closest('#homepage');
  //axios request to backend to sign out
  $userprofile.replaceWith(renderhomepage);
}
export const handlechangepassword = async function(event){

}

export const handlerenderquiz = async function(event){
  const $genresearch = $(event.target).closest('#txt-search');
  // let infoarray = $genresearch.serializeArray();
  
  // console.log(infoarray);
}
export const handlesignupsubmit = async function(event){
  event.preventDefault();
  //getInfo();
    const $homepage = $(event.target).closest('#homepage');
    //console.log($homepage);
    let infoarray = $homepage.serializeArray();
    let person = {};
     person.username = infoarray[0].value;
    // person.email = infoarray[1].value;
    person.password = infoarray[2].value;
    person.artist1 = infoarray[3].value;
    person.artist2 = infoarray[4].value;
    person.artist3 = infoarray[5].value;
    person.genre1 = infoarray[6].value;
    person.genre2 = infoarray[7].value;
    person.genre3 = infoarray[8].value;
    person.raingenre = infoarray[9].value;
    person.workout1 = infoarray[10].value;
    person.workout2 = infoarray[11].value;
    person.workout3 = infoarray[12].value;
    person.sadboi = infoarray[13].value;
    person.firstsong = infoarray[14].value;
    person.momsong = infoarray[15].value;
    person.underalbum = infoarray[16].value;
    person.guiltygenre = infoarray[17].value;
    person.concertartist = infoarray[18].value;
    person.leastfav = infoarray[19].value;

  let r = axios.post('http://localhost:3000/account/create',
    {
      name: person.username,
      pass: person.password,
      data: person
    });

  await r.then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error);
  });

  let p = axios.post('http://localhost:3000/account/login',
  {
    name: person.username,
    pass: person.password
  });
  await p.then(response => {
    console.log(response.data);
    window.jwt = response.data.jwt;
  }).catch(error => {
    console.log(error);
  });
  console.log(window.jwt)
  let bearer = "Bearer "+window.jwt;
  console.log(bearer)
  let j = axios.post('http://localhost:3000/user/'+person.username,
  {
    data: person
  }, {headers: { Authorization: "Bearer " + window.jwt }},);
  await j.then(response => {
    console.log(response.data);
    window.jwt = response.data.jwt;
  }).catch(error => {
    console.log(error);
  });
  let h = axios.get('http://localhost:3000/account/status',
    {headers: { Authorization: "Bearer " + window.jwt }},);
  await h.then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error);
  });
    let userprofile = renderuserprofile(person);
    
    $homepage.replaceWith(userprofile);
}
//on click submit button for login or signup - generate user profile - render html as jquery object, replace index with user profile object
async function main(){
    window.$root = $('#root');
    let homepage = renderhomepage();
    $root.append(homepage)
    // let j = axios.post('http://localhost:3000/public/questions',
    // {
    //   data: popQuestions
    // });
    // await j.then(response => {
    //   console.log(response.data);
    //   window.jwt = response.data.jwt;
    // }).catch(error => {
    //   console.log(error);
    // });
    $root.on("click", "#loginsubmit", handleloginsubmit);
    $root.on("click", "#signupsubmit", handlesignupsubmit);
    $root.on("click", "#signout", handlesignout);
    $root.on("click", "#renderquiz", handlerenderquiz);
    $root.on("click", "#genresubmit", handlerenderquiz);
   // $root.on("click", "#renderquiz", handletakequiz);
    // $root.on("click", "#changepassword", handlechangepassword);
    // $root.on("click", "#deleteaccount", handledeleteaccount);
}
main();
