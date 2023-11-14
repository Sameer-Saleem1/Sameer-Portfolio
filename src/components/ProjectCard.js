import React from 'react';
import { NavLink } from 'react-bootstrap';

export default function ProjectCard(props) {
  return (
    <div>
                <div className='project-card'>
                    <img src={props.imgsrc} alt='image1' />
                    <h2 className='project-title'>{props.title}</h2>
                    <div className='project-details'>
                      <p>{props.text}</p>
                      <div className='project-btn'>
                        <NavLink to={props.view} className='btn'>
                          View
                        </NavLink>
                        <NavLink to={props.source} className='btn'>
                          Source
                        </NavLink>
                      </div>
                    </div>
                </div>
    </div>
  )
}
