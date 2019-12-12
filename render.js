
export const renderhomepage=function(){
    return `
    <section class="section has-background-primary" >
    <form id="homepage">
      <h1 class="title has-text-white">Sample Quiz Genre Search</h1>

        <div class="columns">
          <div id="genresearchhomepage" class="column is-11">
            <input class="input" type="search" id="txt-search" placeholder="Hip-hop">
          </div>
          <div class="column is-1">
            <div class="field">
              <div class="control">
                  <input class="button is-dark" id = "genresubmit" type="submit" value="Search" />
              </div>
            </div>
          </div>
            
        </div>
        <label class="label" id="matches"></label>

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
// export const renderquizpage = function(questions){
//   return `<div class="section">
//   <h1 class = "title">Twitter Quiz</h1>
//   </div>`
// }

// export const renderquizpop = function(){
//   return`<div id="quizpop">
//   <section class="section">
//     <div class="container">
//     <h1 class="title is-1 has-text-white">Pop Music Quiz</h1>  
//         <div class="content">
//           <div class="subtitle">
//           <form>
//             <ol type="1">
//               <li class="">Which artist recently had a song featured on a Spiderman movie?</li>
//                 <div class="control">
//                   <label class="radio">
//                     <input type="radio" name="answer">
//                     Post Malone
//                   </label>
//                   <label class="radio">
//                     <input type="radio" name="answer">
//                     Khalid
//                   </label>
//                 </div>
//               <li class="">In his album No. 6 Collaborations Project, who did Ed Sheeran not partner with?</li>
//               <div class="control">
//                 <label class="radio">
//                   <input type="radio" name="answer">
//                   Camila Cabello
//                 </label>
//                 <label class="radio">
//                   <input type="radio" name="answer">
//                   Ella Mai
//                 </label>
//                 <label class="radio">
//                   <input type="radio" name="answer">
//                   Ariana Grande                
//                   </label>
//               </div>  
//               <li class="">What album did Khalid release in 2019?</li>
//                 <div class="select">
//                   <select>
//                     <option>Select</option>
//                     <option>Free Spirit</option>
//                     <option>American Teen</option>
//                     <option>Suncity</option>
//                   </select>
//               </div>
//             </ol>
//           </div>
//           <button class="button is-medium" style="primary" data-id="" id="submitquiz" type="">Submit</button>
//           </form>
//         </div>
//     </div>
//   </section>
//   </div>`
// }
//add in checkbox options for genre to take quiz in
export const renderuserprofile = function(user){
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
            <div class="content">
              <button class="button is-medium is-dark" style="primary" data-id="${user.id}" id="updateprofile">Update Profile</button>
            </div>
          </div>
          <br>
          <div class="select" id="dropdown">
              <select id="selectBox">
                <option>Choose Genre</option>
                <option>rap</option>
                <option>pop</option>
                <option>indie</option>
                <option>rocknroll</option>
                <option>country</option>
                <option>hiphop</option>
              </select>
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
    //console.log(response.data);
    window.jwt = response.data.jwt;
    let usertorender = response.data.data;
    //console.log(usertorender)
    //console.log(renderuserprofile(usertorender))
    //console.log($homepage)
    //console.log($homepage)
    $homepage.replaceWith(renderuserprofile(usertorender));
  }).catch(error => {
    console.log(error);
  });
}
export const handlesignout = async function(event){
  const $userprofile = $(event.target).closest('#userprofile');
  //axios request to backend to sign out
  jwt = "";
  $userprofile.replaceWith(renderhomepage);
}
export const handleSearchQuiz = async function(event){
  // ID is "matches" to move to the sample quiz page
  event.preventDefault();
  let $homepage = $(event.target).closest("#homepage")
  
  let title = document.getElementById("matches").textContent;
  console.log(title);

  let h = axios.get('http://localhost:3000/public/'+title,
  );
  await h.then(response => {
    console.log(response.data);
    let quizarray = response.data.result;
    let samplequizpage = renderSampleQuiz(quizarray);
    $homepage.replaceWith(samplequizpage);

  }).catch(error => {
    console.log(error);
  });
}

export const renderSampleQuiz = function(quiz){
  return `
  <h3>Sample Quiz I</h3>
  <form id = 'sample_quiz' enctype="text/plain">
  
  This quiz is only a sample quiz. Since you are not logged in, you will not be able to submit these answers.
  
  <P>${quiz[0].question}<BR>
  <input type="radio">${quiz[0].answers.a}<BR>
  <input type="radio">${quiz[0].answers.b}<BR>
  <input type="radio">${quiz[0].answers.c}<BR>
  <input type="radio">${quiz[0].answers.d}<BR>
  </p>
  
  <P>${quiz[1].question}<BR>
  <input type="radio">${quiz[1].answers.a}<BR>
  <input type="radio">${quiz[1].answers.b}<BR>
  <input type="radio">${quiz[1].answers.c}<BR>
  <input type="radio">${quiz[1].answers.d}<BR>
  </p>
  
  <P>${quiz[2].question}<BR>
  <input type="radio" name="1.The word which means house is">${quiz[2].answers.a}<BR>
  <input type="radio" name="1.The word which means house is">${quiz[2].answers.b}<BR>
  <input type="radio" name="1.The word which means house is">${quiz[2].answers.c}<BR>
  <input type="radio" name="1.The word which means house is">${quiz[2].answers.d}<BR>
  </p>
  
  <br>
  <br>
  <br>
  <br>
  <div class="control">
  <input class="button is-dark" id = "sample_submit" type = "submit" value="Return to Homepage">
  </div>
  </form>
  `
}
// export const handlerenderquiz = async function(event){
//   const $genresearch = $(event.target).closest('#txt-search');
//   // let infoarray = $genresearch.serializeArray();
  
//   // console.log(infoarray);
// }
export const handlesignupsubmit = async function(event){
  event.preventDefault();
  //getInfo();
    const $homepage = $(event.target).closest('#homepage');
    //console.log($homepage);
    let infoarray = $homepage.serializeArray();
    console.log(infoarray)
    let person = {};
     person.username = infoarray[0].value;
     person.email = infoarray[1].value;
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
    let p = axios.post('http://localhost:3000/account/login',
    {
      name: person.username,
      pass: person.password
    });
    p.then(response => {
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
    j.then(response => {
      console.log(response.data);
      window.jwt = response.data.jwt;
    }).catch(error => {
      console.log(error);
    });
      let userprofile = renderuserprofile(person);
      
      $homepage.replaceWith(userprofile);
  }).catch(error => {
    console.log(error);
    alert("That account already exists, please log in")
  });

}
export const handleupdateprofile = async function(event){
  console.log(jwt)
  let h = axios.get('http://localhost:3000/account/status',
    {headers: { Authorization: "Bearer " + window.jwt }},);
  await h.then(response => {
    console.log(response.data.user.data.username);
    let updateform = renderupdateform(response.data.user.data);
    let $userprofile = $(event.target).closest('#userprofile');
    $userprofile.replaceWith(updateform);
  }).catch(error => {
    console.log(error);
  });
}
export const renderupdateform = function(user){
  return`<form id="updateform" data-id = ${user.username}>
  <div class="field">
      <label class="title has-text-white">Music Preference Survey</label>
      <br>
      <br>
      <p class="is-size-4 has-text-white">Top 3 artists</p>
      <div class="control">
        <input class="input" type="text" id = "artist1" placeholder=${user.artist1} name="Artist1">
      </div>
      <div class="control">
        <input class="input" type="text" id = "artist2" placeholder=${user.artist2} name="Artist2">
      </div>
      <div class="control">
        <input class="input" type="text" id = "artist3" placeholder=${user.artist3} name="Artist3">
      </div>
      <br>
      <p class="is-size-4 has-text-white">Top 3 genres</p>
      <div class="control">
        <input class="input" type="text" id = "genre1" placeholder=${user.genre1} name="Genre1">
      </div>
      <div class="control">
        <input class="input" type="text" id = "genre2" placeholder=${user.genre2} name="Genre2">
      </div>
      <div class="control">
        <input class="input" type="text" id = "genre3" placeholder=${user.genre3} name="Genre3">
      </div>
      <br>
      <p class="is-size-4 has-text-white">Rainy Day Genre</p>
      <div class="control">
        <input class="input" type="text" id = "RainGenre" placeholder=${user.raingenre} name="RainGenre">
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
          <input class="button is-dark" id = "updatesubmit" type="submit" />
      </div>
  </div>
</form>`

}
export const handleupdatesubmit= async function(event){
  event.preventDefault();
  let $update = $(event.target).closest('#updateform');
  let infoarray = $update.serializeArray();
  console.log(infoarray)
  const username = $update.data('id');
  let h = axios.get('http://localhost:3000/account/status',
    {headers: { Authorization: "Bearer " + window.jwt }},);
  await h.then(response => {
    console.log(response.data.user.data);
    window.usertoupdate= response.data.user.data
    
  }).catch(error => {
    console.log(error);
  });
  if(infoarray[0].value!="")(usertoupdate.artist1=infoarray[0].value);
  if(infoarray[1].value!="")(usertoupdate.artist2=infoarray[1].value);
  if(infoarray[2].value!="")(usertoupdate.artist3=infoarray[2].value);
  if(infoarray[3].value!="")(usertoupdate.genre1=infoarray[3].value);
  if(infoarray[4].value!="")(usertoupdate.genre2=infoarray[4].value);
  if(infoarray[5].value!="")(usertoupdate.genre3=infoarray[5].value);
  if(infoarray[6].value!="")(usertoupdate.raingenre=infoarray[6].value);
  if(infoarray[7].value!="")(usertoupdate.workout1=infoarray[7].value);
  if(infoarray[8].value!="")(usertoupdate.workout2=infoarray[8].value);
  if(infoarray[9].value!="")(usertoupdate.workout3=infoarray[9].value);
  if(infoarray[10].value!="")(usertoupdate.sadboi=infoarray[10].value);
  if(infoarray[11].value!="")(usertoupdate.firstsong=infoarray[11].value);
  if(infoarray[12].value!="")(usertoupdate.momsong=infoarray[12].value);
  if(infoarray[13].value!="")(usertoupdate.underalbum=infoarray[13].value);
  if(infoarray[14].value!="")(usertoupdate.guiltygenre=infoarray[14].value);
  if(infoarray[15].value!="")(usertoupdate.concertartist=infoarray[15].value);
  if(infoarray[16].value!="")(usertoupdate.leastfav=infoarray[16].value);

  let b = axios.post('http://localhost:3000/user/'+username,
  {
    data: usertoupdate
  },
    {headers: { Authorization: "Bearer " + window.jwt }},);
  await b.then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error);
  });
  $update.replaceWith(renderuserprofile(usertoupdate));

}
export const handlegeneratequiz = async function(event){
  
  let $userprofile = $(event.target).closest("#userprofile");
  let $selectbox = $(event.target).closest("#dropdown")
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  let j = axios.get('http://localhost:3000/public/'+selectedValue,);
    await j.then(response => {
      console.log(response.data);
      let quizpage = renderquiz(response.data.result, selectedValue);
      $selectbox.replaceWith(quizpage);
      // if(counter==0){$userprofile.append(quizpage); counter = counter+1;}
      // else{ 
      //   console.log("hello")
      //   let $renderedquiz = $(event.target).closest("#quizform");
      //   console.log($renderedquiz)
      //   console.log(quizpage)
      //   $renderedquiz.replaceWith();
      // }
    }).catch(error => {
      console.log(error);
    });
}
export const renderquiz = function(quizarray, quiztype){
  return`
  <form id = "quizform" data-id=${quiztype} enctype="text/plain">
  <h1 class="title has-text-white">Quiz!</h1>
  
  <h2 class="subtitle has-text-white">${quizarray[0].question}</h2>
  <input type="radio" name="answer0" value = "${quizarray[0].answers.a}">${quizarray[0].answers.a}<BR>
  <input type="radio" name="answer0" value = "${quizarray[0].answers.b}">${quizarray[0].answers.b}<BR>
  <input type="radio" name="answer0" value = "${quizarray[0].answers.c}">${quizarray[0].answers.c}<BR>
  <input type="radio" name="answer0" value = "${quizarray[0].answers.d}">${quizarray[0].answers.d}<BR>
  <br>
  <h2 class="subtitle has-text-white">${quizarray[1].question}</h2>
  <input type="radio" name="answer1" value = "${quizarray[1].answers.a}">${quizarray[1].answers.a}<BR>
  <input type="radio" name="answer1" value = "${quizarray[1].answers.b}">${quizarray[1].answers.b}<BR>
  <input type="radio" name="answer1" value = "${quizarray[1].answers.c}">${quizarray[1].answers.c}<BR>
  <input type="radio" name="answer1" value = "${quizarray[1].answers.d}">${quizarray[1].answers.d}<BR>
  <br>
  <h2 class="subtitle has-text-white">${quizarray[2].question}</h2>
  <input type="radio" name="answer2" value = "${quizarray[2].answers.a}">${quizarray[2].answers.a}<BR>
  <input type="radio" name="answer2" value = "${quizarray[2].answers.b}">${quizarray[2].answers.b}<BR>
  <input type="radio" name="answer2" value = "${quizarray[2].answers.c}">${quizarray[2].answers.c}<BR>
  <input type="radio" name="answer2" value = "${quizarray[2].answers.d}">${quizarray[2].answers.d}<BR>
  <br>
  <h2 class="subtitle has-text-white">${quizarray[3].question}</h2>
  <input type="radio" name="answer3" value = "${quizarray[3].answers.a}">${quizarray[3].answers.a}<BR>
  <input type="radio" name="answer3" value = "${quizarray[3].answers.b}">${quizarray[3].answers.b}<BR>
  <input type="radio" name="answer3" value = "${quizarray[3].answers.c}">${quizarray[3].answers.c}<BR>
  <input type="radio" name="answer3" value = "${quizarray[3].answers.d}">${quizarray[3].answers.d}<BR>
  <br>
  <h2 class="subtitle has-text-white">${quizarray[4].question}</h2>
  <input type="radio" name="answer4" value = "${quizarray[4].answers.a}">${quizarray[4].answers.a}<BR>
  <input type="radio" name="answer4" value = "${quizarray[4].answers.b}">${quizarray[4].answers.b}<BR>
  <input type="radio" name="answer4" value = "${quizarray[4].answers.c}">${quizarray[4].answers.c}<BR>
  <input type="radio" name="answer4" value = "${quizarray[4].answers.d}">${quizarray[4].answers.d}<BR>
  <br>
  <h2 class="subtitle has-text-white">${quizarray[5].question}</h2>
  <input type="radio" name="answer5" value = "${quizarray[5].answers.a}">${quizarray[5].answers.a}<BR>
  <input type="radio" name="answer5" value = "${quizarray[5].answers.b}">${quizarray[5].answers.b}<BR>
  <input type="radio" name="answer5" value = "${quizarray[5].answers.c}">${quizarray[5].answers.c}<BR>
  <input type="radio" name="answer5" value = "${quizarray[5].answers.d}">${quizarray[5].answers.d}<BR>
  <br>
  <h2 class="subtitle has-text-white" value=${quizarray[6].question}>${quizarray[6].question}</h2>
  <input type="radio" name="answer6" value = "${quizarray[6].answers.a}">${quizarray[6].answers.a}<BR>
  <input type="radio" name="answer6" value = "${quizarray[6].answers.b}">${quizarray[6].answers.b}<BR>
  <input type="radio" name="answer6" value = "${quizarray[6].answers.c}">${quizarray[6].answers.c}<BR>
  <input type="radio" name="answer6" value = "${quizarray[6].answers.d}">${quizarray[6].answers.d}<BR>
  <br>
  <h2 class="subtitle has-text-white">${quizarray[7].question}</h2>
  <input type="radio" name="answer7" value = "${quizarray[7].answers.a}">${quizarray[7].answers.a}<BR>
  <input type="radio" name="answer7" value = "${quizarray[7].answers.b}">${quizarray[7].answers.b}<BR>
  <input type="radio" name="answer7" value = "${quizarray[7].answers.c}">${quizarray[7].answers.c}<BR>
  <input type="radio" name="answer7" value = "${quizarray[7].answers.d}">${quizarray[7].answers.d}<BR>
  <br>
  <br>
  <br>
  <br>
  <div class="control">
  <input class="button is-danger" id = "cancelquiz" type = "cancel" value="Cancel">
  <input class="button is-info" id = "submitquiz"  value="Submit">
  </div>
  </form>
  `
}
export const handlecancelquiz = async function(event){
  let $quizform = $(event.target).closest("#quizform");
  $quizform.replaceWith(`<div class="select" id="dropdown">
  <select id="selectBox">
    <option>Choose Genre</option>
    <option>rap</option>
    <option>pop</option>
    <option>indie</option>
    <option>rocknroll</option>
    <option>country</option>
    <option>hiphop</option>
  </select>
</div>`)
}
export const handlesubmitquiz = async function(event){

  let $quizform = $(event.target).closest("#quizform");
  const quiztype = $quizform.data('id');
  let buttonval = $("#quizform").find("input[name='answer0']:checked").val();
  //console.log(buttonval);
  let buttonval1 = $("#quizform").find("input[name='answer1']:checked").val();
  //console.log(buttonval1)
  let buttonval2 = $("#quizform").find("input[name='answer2']:checked").val();
  //console.log(buttonval2);
  let buttonval3 = $("#quizform").find("input[name='answer3']:checked").val();
  //console.log(buttonval3)
  let buttonval4 = $("#quizform").find("input[name='answer4']:checked").val();
  //console.log(buttonval4)
  let buttonval5 = $("#quizform").find("input[name='answer5']:checked").val();
  //console.log(buttonval5);
  let buttonval6 = $("#quizform").find("input[name='answer6']:checked").val();
  //console.log(buttonval6)
  let buttonval7 = $("#quizform").find("input[name='answer7']:checked").val();
 // console.log(buttonval7)
 let useranswers = [buttonval, buttonval1, buttonval2, buttonval3, buttonval4, buttonval5, buttonval6, buttonval7];
  let j = axios.get('http://localhost:3000/public/'+quiztype,);
  await j.then(response => {
    console.log(response.data.result);
    let questionarray = response.data.result;
    let correctanswers = [];
    for(let y = 0; y<questionarray.length; y++){
        correctanswers.push(questionarray[y].correctAnswer);
    }
    let scorevar = 0;
    for(let u = 0; u<8; u++){
      if(correctanswers[u]==useranswers[u]){
        scorevar = scorevar+1;
      }
    }
    let h = axios.get('http://localhost:3000/account/status',
    {headers: { Authorization: "Bearer " + window.jwt }},);
    h.then(response => {
    //console.log(response.data.user.name);
    let userName = response.data.user.name;
    let Quiz = new Object;
    let percentage = (scorevar / 8)*100;
    Quiz.user = userName;
    Quiz.score = scorevar;
    Quiz.percent = percentage;
    Quiz.genre = quiztype;
          let v = axios.post('http://localhost:3000/private/scores/'+userName,
          {
            data: Quiz,
            type: "merge"
          },{headers: { Authorization: "Bearer " + window.jwt }});
          v.then(response => {
            //console.log(response.data);
          }).catch(error => {
            console.log(error);
          });
          let f = axios.get('http://localhost:3000/private/scores/'+userName,{headers: { Authorization: "Bearer " + window.jwt }});
          f.then(response => {
            //console.log(response.data.result);
            let recentscore = response.data.result[response.data.result.length-1]
            //console.log(recentscore)
            let userscorepage = rendermyscore(recentscore);
            $quizform.replaceWith(userscorepage);
            //let scorearray = response.data.result;
            //let userscorearray = [];
            // for(let h = 0; h<scorearray.length; h++){
            //   if(scorearray[h].user==userName){
            //     userscorearray.push(scorearray[h])
            //   }
            // }
            // //console.log(userscorearray);
            // $quizform.replaceWith(renderscorepage(userscorearray))
          }).catch(error => {
            console.log(error);
          });
    }).catch(error => {
      console.log(error);
    });
    console.log(scorevar)
  }).catch(error => {
    console.log(error);
  });

  //get request to private datastore for array of score objects
  //create array of score objects from response with userName = username in score object
  //call renderscorepage function - replaces quizform
}
export const rendermyscore = function(score){
  return`
    <div id="recentscorepage">
      <h1 class="title has-text-centered">Your Score</h1>
      <div class = "box">
        <h1 class="title has-text-centered">${score.genre}: ${score.score}/8 ${score.percent}%</h1>
      </div>
        <div class="control">
        <input class="button is-info" id = "seeallscores"  value="See All Scores" />
        </div>
    </div>
  `
  //shows user the score they just got
  //show all scores button
}
export const handlestartfresh= async function(event){

}
export const handleseeallscores = async function(event){
  let $recentscorepage = $(event.target).closest("#recentscorepage");
  let v = axios.get('http://localhost:3000/private/scores/',{headers: { Authorization: "Bearer " + window.jwt }});
          v.then(response => {
            console.log(response.data);
            let users = response.data.result;
                  let h = axios.get('http://localhost:3000/private/scores',{headers: { Authorization: "Bearer " + window.jwt }});
                h.then(response => {
                  console.log(response.data.result);
                  let scorearrays = response.data.result;
                  let allscores = [];
                  for(let i = 0; i<users.length; i++){
                    for(let u = 0; u<scorearrays[users[i]].length; u++){
                      allscores.push(scorearrays[users[i]][u])
                    }
                  }
                  console.log(allscores);
                  $recentscorepage.replaceWith(renderscorepage(allscores))
                }).catch(error => {
                  console.log(error);
                });
          }).catch(error => {
            console.log(error);
          });

  // let $recentscorepage = $(event.target).closest("#recentscorepage")
  // $recentscorepage.replaceWith(`

  // `)
//shows all scores
//start fresh button
//back to profile button
}
export const takeanotherquiz = async function(event){
  let $scorepage = $(event.target).closest("#scorepage");
  $scorepage.replaceWith(`<div class="select" id="dropdown">
  <select id="selectBox">
    <option>Choose Genre</option>
    <option>rap</option>
    <option>pop</option>
    <option>indie</option>
    <option>rocknroll</option>
    <option>country</option>
    <option>hiphop</option>
  </select>
</div>`);

}
export const renderscorepage = function(scorearray){
  let scorepage = `<div id="scorepage"><h1 class="title has-text-centered">Scoreboard</h1>`;
  for(let r = 0; r<scorearray.length; r++){
    scorepage = scorepage+`
    
      <div class = "box">
        <h1 class="title has-text-centered">${scorearray[r].user}: ${scorearray[r].genre}: ${scorearray[r].score}/8 ${scorearray[r].percent}%</h1>
      </div>
    `
  }
  scorepage = scorepage+ `<div class="control">
  <input class="button is-danger" id = "startfresh"  value="Delete My Scores" />
  <input class="button is-info" id = "takeanotherquiz"  value="Take another Quiz" />
  </div></div>`
  return scorepage;
  }
  export const handledeletescores = async function(event){
    let h = axios.get('http://localhost:3000/account/status',
    {headers: { Authorization: "Bearer " + window.jwt }},);
    h.then(response => {
    //console.log(response.data.user.name);
    let userName = response.data.user.name;
    let $scorepage = $(event.target).closest("#scorepage");
      let f = axios.delete('http://localhost:3000/private/scores/'+userName,{headers: { Authorization: "Bearer " + window.jwt }});
      f.then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
      $scorepage.replaceWith(`<div class="select" id="dropdown">
      <select id="selectBox">
        <option>Choose Genre</option>
        <option>rap</option>
        <option>pop</option>
        <option>indie</option>
        <option>rocknroll</option>
        <option>country</option>
        <option>hiphop</option>
      </select>
    </div>`)
    // let h = axios.get('http://localhost:3000/account/status',
    // {headers: { Authorization: "Bearer " + window.jwt }},);
    // h.then(response => {
    //   console.log(response.data.user.data);
    //   renderuserprofile(response.data.user.data)
    // }).catch(error => {
    //   console.log(error);
    // });
  }).catch(error => {
    console.log(error);
  });
  }
//back to userprofile button=replacewith
//on click submit button for login or signup - generate user profile - render html as jquery object, replace index with user profile object
async function main(){
    console.log("hello")
    window.$root = $('#root');
    let homepage = renderhomepage();
    $root.append(homepage)
    let j = axios.post('http://localhost:3000/public/pop',
    {
      data: popQuestions
    });
    await j.then(response => {
      console.log("hello")
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
    let r = axios.post('http://localhost:3000/public/rocknroll',
    {
      data: rockquestions
    });
    await r.then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
    let k = axios.post('http://localhost:3000/public/country',
    {
      data: countryquestions
    });
    await k.then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
    let l = axios.post('http://localhost:3000/public/indie',
    {
      data: indieQuestions
    });
    await l.then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
    let m = axios.post('http://localhost:3000/public/rap',
    {
      data: rapQuestions
    });
    await m.then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
    let v = axios.post('http://localhost:3000/public/hiphop',
    {
      data: hipHopQuestions
    });
    await v.then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
    $root.on("click", "#loginsubmit", handleloginsubmit);
    $root.on("click", "#signupsubmit", handlesignupsubmit);
    $root.on("click", "#signout", handlesignout);
    $root.on("click", "#updateprofile", handleupdateprofile);
    $root.on("click", "#updatesubmit", handleupdatesubmit);
    $root.on("change", "#selectBox", handlegeneratequiz)
    $root.on("click", "#genresubmit", handleSearchQuiz);
    $root.on("click", "#sample_submit", renderhomepage);
    $root.on("click", "#cancelquiz", handlecancelquiz);
    $root.on("click", "#submitquiz", handlesubmitquiz);
    $root.on("click", "#startfresh", handledeletescores);
    $root.on("click", "#seeallscores", handleseeallscores)
    $root.on("click", "#takeanotherquiz", takeanotherquiz)
}
main();

