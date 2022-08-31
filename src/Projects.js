import React from 'react'
import './Projects.css'
import Cards from './Cards'
import projectData from './projectData'

function Project() {

  const cards = projectData.map(item => {
    return <Cards key={item.id} {...item} />
  })

  return (
    <div className='main_project' id='projects'>
    <div className='main_cont_project'>
        
    <div className='main-child-one_project'>
    <h2 className="hr-lines_project">02. Projects</h2>
    </div>
    </div>
    
    <div className='main-child-two_project'>
    {cards}
    </div>

    </div>
  )
}

export default Project