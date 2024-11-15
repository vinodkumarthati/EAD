// import { useState } from 'react'
// import './App.css'

// function App() {
//   const[strength,setStrength]=useState("");
//   const[pwd,setPwd]=useState("");
//   const checkStrength=(pwd)=>{
//     let score=0;
//     const exp=[
//       {regex:/[\d{8,}]/},
//       {regex:/[A-Z]/},
//       {regex:/[a-z]/},
//       {regex:/[0-9]/},
//       {regex:/[^A-Za-z0-9]/},
//     ];
//     exp.map((e)=>{
//       if(e.regex.test(pwd)){
//         score++;
//       }
//     });
//     const values=['very weak','weak','medium','strong','very strong'];
//     setStrength(values[score-1]);
//   };
//   const updatePassword=(e)=>{
//     const newPwd=e.target.value;
//     setPwd(newPwd);
//     checkStrength(pwd);
//   };
//   return(
//     <>
//     <h1 id="heading">password strength</h1>
//     <div>
//       <input 
//       type="password"
//       id="password"
//       name="password"
//       value={pwd}
//       onChange={UpdatedPassword}
//       />
//     </div>
//     <p id="result">Strength:<strong>{strength}</strong></p>
//     </>
//   );
// }

// export default App
import { useState } from "react";
import "./App.css";
function App(){
  const[strength,setStrength]=useState("");
  const[pwd,setPwd]=useState("");
  const checkStrength=(pwd)=>{
    let score=0;
    const exp=[
      {regex:/[\d{8,}]/},
      {regex:/[A-Z]/},
      {regex:/[a-z]/},
      {regex:/[0-9]/},
      {regex:/[^A-Za-z0-9]/},
    ];
    exp.map((e)=>{
      if(e.regex.test(pwd)){
        score++;
      }
    });
    const values=["very weak","weak","medium","strong","very strong"];
    setStrength(values[score-1]);
  };
  const UpdatedPassword=(e)=>{
    const newPwd=e.target.value;
    setPwd(newPwd);
    checkStrength(pwd);
  };
  return(
    <>
    <h1>password strength</h1>
    <div>
      <input 
      type="password"
      id="password"
      name="password"
      value={pwd}
      onChange={UpdatedPassword}
      />
    </div>
    <p id="result">Strength:{strength}</p>
    </>
  );
}
export default App;
