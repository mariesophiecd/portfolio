import React from 'react';
import { useNavigate } from 'react-router-dom';
import enviromates from '../../assets/enviromates.svg';
import pinkola from '../../assets/pinkola.svg';
import questionRoulette from '../../assets/questionRoulette.svg';
import turretTesting from '../../assets/turretTesting.svg';
import './style.css';

export default function Projects(){

    const navigate = useNavigate();

    return (
        <div className='projects-container'>
            <h2 className='vertical-h2'>Latest</h2>
            <h2 className='pink-h2'>Works</h2>
            <div className='projects-section'>
                <div className='first-row'>
                    <img onClick={() => navigate('/project1')} src={turretTesting} alt='Turret Testing Project' />
                    <h3 className='project-num'>Project #1</h3>
                    <p className='project-name'>Turret Testing - post training project with futureproof </p>

                    <img onClick={() => navigate('/project2')} src={enviromates} alt='' />
                    <h3 className='project-num'>Project #2</h3>
                    <p className='project-name'>Environmental app - final project for futureproof </p>
                </div>
            </div>
            <div className='second-row'>
                <img onClick={() => navigate('/project3')} src={questionRoulette} alt='' />
                <h3 className='project-num'>Project #3</h3>
                <p className='project-name'>Question Roulette - quiz app project for futureproof </p>
                <img onClick={() => navigate('/project4')} src={pinkola} alt='' />
                <h3 className='project-num'>Project #4</h3>
                <p className='project-name'>Pinkola - UX Design project for a life coaching website</p>
            </div>
        </div>
    )
}
