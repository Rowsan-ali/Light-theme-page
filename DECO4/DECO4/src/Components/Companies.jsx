import 'react';
import 'react-dom';
import '../App.css';

import github from '../imgs/github.png'
import linkedin from '../imgs/linkedin.png'
import google from '../imgs/google.png'
import vector from '../imgs/Vector.png'


function Companies(){
    return(
        <>
        <div className='Companies__container'>
            <div><h2 className='companies__heading'>TRUSTED BY COMPANIES</h2></div>
            <div className='companies__logo__container'>
            <img className='companies__logo' src={github}></img>
            <img className='companies__logo' src={google}></img>
            <img className='companies__logo' src={linkedin}></img>
            <img className='companies__logo' src={vector}></img>
            </div>
        </div>
        </>
    )
}

export default Companies;