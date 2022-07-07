
import Proj1 from "../assets/Screenshot_from_2022-06-25_15-45-445654.png";

import Proj2 from "../assets/imageviewer2.png";

export const ProjectList = [
  {
    name: "Chaudr",
    image: Proj1,
    type:"Chatting web App",
    skills: "Go, Vue, JavaScript, Html, Docker, Css",
    Livesite: "",
    codesite: "https://github.com/Velocityofpie/chaudr",
    description: "This program will be deployed as a web app, so it can be accessed on the browser. We found this to be the lowest cost solution to reach as many devices as possible. However as the server communicates through a normal HTTPS REST API and WebSocket, clients could be written in any form, from terminal apps to native OS apps. The server will be deployed in AWS, in a service called Faregate. This would take care of scaling in and out. We would connect to an external database, preferably AWS RDS, but we didn't have enough time to figure that out. ",
    PurposenGoal:"Our design is client-centric and relies mainly on client-side logic. When rooms are created, a user generates a room passphrase and stores it locally. This passphrase is used for AES-256 cipher encryption. The user shares his username for the room and the username is stored on the server to differentiate between users in the same room. When a user wants to add another user to a room they are a part of, the existing user must first send a handshake request to the server. The room will send a random code to the user that is a part of the room. Then, the user shares the room id, room passphrase, and handshake code to the user requesting to join the room, using whatever method is available, such as sending a screenshot. The new user sends the code to the server, along with the room id, and their username. The server checks if the given code and accept the user into the room. We provide a security guarantee that your data will not be leaked by anyone hacking into our servers, simply because we don't store any data incoming, and all data is processed in memory. Since we don't store a room's passphrase, we cannot decrypt incoming messages either. Transport is secured using HTTPS and WSS (Secure Websockets).",
    ProblemsnThought:"There might be attackers masquerading as users. Attackers might try to decrypt data in transit. Attackers might masquerade as servers and redirect people to their site. DDOSing the servers to bring them down. Unknown exploits in underlying protocols used like in HTTPS. Malicious users purposely leak information in rooms.", 
    livesitestat:false,
    codestat: true,
  },
  {
    name: "Photo Ablum",
    image: Proj2,
    type:"Ablum",
    skills: "Java,scene builder",
    Livesite: "",
    codesite: "https://github.com/Velocityofpie/Photos-App",
    description: "This project was a desktop photo application that allows storage and management of photos in one or more albums, edit information, and tags. With the ability to have multiple users.",
    PurposenGoal:"The photo app has to be able to create albums, delete albums, Rename albums. Opening an album displays all photos, with their thumbnail images and captions, Once an album is open the user can, add a photo, remove a photo, caption/recaption a photo, display a photo in a separate display area. The photo display should also show its caption, its date-time of capture, tags, add a tag to a photo, delete a tag from a photo, copy a photo from one album to another.",
    ProblemsnThought:"There problem I ran into was to organize all the tags to  the right group of album,photos,users. Authentication was a big problem for me, I ran into problem were it would mix photos with different account but mange throught it.", 
    livesitestat:false,
    codestat: true,
  },
  
];