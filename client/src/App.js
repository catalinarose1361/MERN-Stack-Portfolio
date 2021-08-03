import React from 'react'
import {useState, useEffect} from 'react'

import './App.css';

function App() {
  //using state which at first is empty but soon will store data collected from our MongoDB 
  const [projects, setProjects] = useState([
    {
      title: " ",
      description: " ",
      technologies: [ ],
      heroku: " ",
      github: " ",
      image: " "
    }
  ])
  //fetch the data from the route and return a json
  useEffect(() => {
    fetch('/projects').then(res => {
      if(res.ok) {
        return res.json()
      }
      //take json response and set state equal to the json response
    }).then(jsonRes => setProjects(jsonRes))
  })

  return (
    <div className="App">

      {projects.map(project => {
        return (
          <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p>{project.heroku}</p>
            <p>{project.github}</p>
            <img src={project.image}/>
            <list>Technologies: <li>{project.technologies[0]}</li></list>
          </div>
        
        )
      })}

    </div>
  );
}

export default App;