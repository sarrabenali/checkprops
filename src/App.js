import './App.css';
import profile from './profil/profile.js';
import myPic from './profil/pic.jpg';

function App() {
  const profileStyle = {
    backgroundColor: "rgb",
    margin: 15,
    borderRadius: 20

};

const profilePicStyle = {
  width: 400,
  margin: 15,
  borderRadius: 20
};
  return (
    <div className="App">
      <div >
        <div style={profileStyle}></div>
      <profile
      fullName="SarahBenali" 
      bio="this is my bio" 
      profession="developpeuse">
      <img src={myPic} alt="this is my profile pic" style={profilePicStyle} />
      </profile>
      </div>
    
    </div>
  
  );
}

export default App;
