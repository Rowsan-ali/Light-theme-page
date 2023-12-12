import 'react';
import 'react-dom';
import '../App.css';

import image_1 from '../imgs/image_code.png'
import image_2 from '../imgs/imagesomething.png'

function Features(){
    return(
        <>
        <div className='Features_container'>
            <div className='Text_container'>
                <h1 className='text_heading'>LEARN AND GROW FROM ANY <br></br>DEVICE</h1>
                <p className='text_subheading'>Lorem Ipsum is simply dummy text of the printing and<br></br> typesetting industry. Lorem Ipsum has been the industry's <br></br>standard dummy text ever since the 1500s, </p>
           <button className='text_btn' href=''>BOOK A CALL</button>
            </div>
            <div className='Image_container'>
                <img className='image_graphic' src={image_1}></img>
            </div>


            
        </div>


        <div className='Features_container_2'>
            <div className='Text_container'>
                <h1 className='text_heading'>LEARN AND GROW FROM ANY <br></br>DEVICE</h1>
                <p className='text_subheading'>Lorem Ipsum is simply dummy text of the printing and<br></br> typesetting industry. Lorem Ipsum has been the industry's <br></br>standard dummy text ever since the 1500s, </p>
           <button className='text_btn' href=''>BOOK A CALL</button>
            </div>
            <div className='Image_container'>
                <img className='image_graphic' src={image_2}></img>
            </div>


            
        </div>
        </>
    )
}

export default Features;