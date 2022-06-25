import Proj1 from "../assets/proj1.jpg";
import Proj2 from "../assets/proj2.jpg";
import Proj3 from "../assets/proj3.webp";
import Proj4 from "../assets/proj4.webp";
import Proj5 from "../assets/proj5.jpg";
import Proj6 from "../assets/proj6.png";

export const ProjectList = [
  {
    name: "Dijkstra Algorithm Visualizer",
    image: Proj1,
    skills: "JavaScript,HTML,CSS" , 
  },
  {
    name: "Chaudr",
    image: Proj2,
    skills: "Go,Vue,JavaScript,Html,Docker,Css",
    Livesite: "na",
    codesite: "https://github.com/Velocityofpie/chaudr",
    description: "This program will be deployed as a web app, so it can be accessed on the browser. We found this to be the lowest cost solution to reach as many devices as possible. However as the server communicates through a normal HTTPS REST API and WebSocket, clients could be written in any form, from terminal apps to native OS apps. The server will be deployed in AWS, in a service called Faregate. This would take care of scaling in and out. We would connect to an external database, preferably AWS RDS, but we didn't have enough time to figure that out. ",
    PurposenGoal:"purpose",
    ProblemsnThought:"problem", 
  },
  {
    name: "Spotify Clone",
    image: Proj3,
    skills: "React,Node.js,MongoDB,SpotifyAPI",
  },
  {
    name: "Social Media Website",
    image: Proj4,
    skills: "React,Node.js,MySQL,GraphQL",
  },
  {
    name: "Dashboard Visualizer",
    image: Proj5,
    skills: "JavaScript,HTML,CSS",
  },
  {
    name: "Mobile Game",
    image: Proj6,
    skills: "React Native,JavaScript,HTML,CSS",
  },
];