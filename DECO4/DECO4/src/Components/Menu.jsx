import 'react';
import 'react-dom';
import '../App.css';

function Menu(){
  return(
    <>
    <div className='Menu__container'>
        <a className='Menu__links' href=''>HOME</a>
        <a className='Menu__links' href=''>ABOUT</a>
        <a className='Menu__links' href=''>CONTACT</a>
    </div>
    </>
  )
}

export default Menu;