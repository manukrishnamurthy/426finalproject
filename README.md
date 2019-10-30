# 426finalproject

We will build an app that is a group-playlist curating site where groups of friends can create playlists that match with each others interests, meant for long road trips or study sessions. Each person within the group must create an account on the website. Creating an account will prompt each user to fill a survey that collects data about the users favorite songs and artists. After each user fills out their profiles, they can add the profiles of the other group members to their “group”. The group will then curate a playlist based on the artists and songs that has overlap by each user. After adding overlapped songs from each user’s database of favorites, songs will be added to the collective playlist from each song’s Spotify radios, so that songs that each user might be inclined to listen to will comprise of an even proportion of the group playlist. 

After a users fills out the survey, our website will hold an object containing information about the songs, artists, and genres that they provided. We will run an algorithm on this object to determine which songs, artists, and genres to display on their profile page. Each profile page will have two variants; on one, the user can see which group playlists they are a part of. On the other, other users can see how many groups the user's profile is linked to.

The group page will have song data for the playlist, in addition the users profile pages. Furthermore, the group will have a list of each song's spotify URL at the bottom, so this data can be used in the Spotify web interface if needed. 



	We plan on using the Spotipy API  to identify the radio stations that match songs that a user has selected and cross-match them with songs another user has selected as well.
