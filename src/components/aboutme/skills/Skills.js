import React from 'react'
// import { Button } from 'react-bootstrap';
import { Routes,Route,Link } from 'react-router-dom';
import PersonalSkill from './PersonalSkill'
import TechnicalSkill from './TechnicalSkill'
import { LinkContainer } from 'react-router-bootstrap'

export default function Skills() {
  return (
    <div>
        <div className="mt-4 d-flex flex-row justify-content-center">
            <Link className="btn btn-primary me-3" to="/personalskill">Personal Skill</Link>
            <Link className="btn btn-primary" to="/technicalSkill">Technical Skill</Link>
        </div>
    </div>
  )
}
