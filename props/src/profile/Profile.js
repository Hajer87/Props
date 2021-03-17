 import photo from '../images/photo.jpg'
 import Photo from './Photo.js'
 import PropTypes from 'prop-types';
 import '../styles/Profile.css'


 function Profile (props){
       
      
       return (
             <div className='profile'>
             
              <Photo>
             <img src= {photo} alt='photo de profil' style={{ border: 'solid 2px black', margin:10 , maxWidth: 150, borderRadius:50}}></img>
             </Photo>
             <div className='info'>
             <span style={{ color:'green', fontWeight:'bold', textDecoration:'underline'}}>{props.fullName}</span>
             <br/>
             <p> {props.bio}</p>
             <br/>
             <p> {props.profession} </p>
            </div>
            <div >  <button style ={{color:'black' }}onClick={()=> props.HandleName ('Welcome Brendan Eich')}> OK</button></div>
             </div>
       )
 }
 export default Profile;

Profile.propTypes = {
      fullName: PropTypes.string,
      bio: PropTypes.string,
      profession: PropTypes.string
    };

