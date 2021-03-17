import Profile from './profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './profile/NavBar';
import img2 from './images/img2.jpg';



function App() {
 const styleContainer= { display: 'flex', flexDirection:'colomun', padding: 50, margin:50}
 const HandleName  = name =>{
   alert(name)
 }
 return (
      <div className="App">
        <Navbar/>
     
      <div style={styleContainer}>
       
        <Profile fullName='Brendan Eich'  bio='creator of the JavaScript programming language.' profession='CEO of Brave Software.' HandleName={HandleName}/>
       
        <img src={img2} alt='JS' style={{width: 300,  padding :10}}></img> 
      </div>


      
      
    </div>
  );
 
    
}
export default App

