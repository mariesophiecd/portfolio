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
            <h2 className='projects-h2'><span className='vertical-h2'>Latest</span> Works</h2>
            <div>
                <img onClick={() => navigate('/project1')} src={turretTesting} alt='Turret Testing Project' />
                <h3>Project #1</h3>
                <p>Turret Testing - post training project with futureproof </p>

                <img onClick={() => navigate('/project2')} src={enviromates} alt='' />
                <h3>Project #2</h3>
                <p>Environmental app - final project for futureproof </p>
            </div>
            <div>
                <img onClick={() => navigate('/project3')} src={questionRoulette} alt='' />
                <h3>Project #3</h3>
                <p>Question Roulette - quiz app project for futureproof </p>
                <img onClick={() => navigate('/project4')} src={pinkola} alt='' />
                <h3>Project #4</h3>
                <p>Pinkola - UX Design project for a life coaching website</p>
            </div>
        </div>
    )
}
