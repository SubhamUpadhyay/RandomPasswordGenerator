import React, { useCallback, useEffect, useState } from "react";  
import ReactDOM from "react-dom/client"
function Fun(){
    const[password,setPassword]=useState("");
    const [length,setlength] = useState(8);
    const[number,setnumber] = useState(false);
    const[specialCharacter,setSpecialCharacter] = useState(false);

    const RandomPassword = useCallback(()=>{
            let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if(number)
                str +=12345678909876543211234567890987654321;
            if(specialCharacter)
                str+="!@#$%^&*()_+<>?:[]{};',./-=`~©®™§¶℠†‡※№℗℣ℵ℅ℓµ∞∑∏∂∆∇∫≈≠≡≤≥⊕⊗⊥∴∵∝∥∠∧∨¬⊂⊃⊆⊇⊆⊇⊄⊅∈∉∪∩⊕⊖⊗⊘∅∇∃∀∴∵∠∟⊿√∛∜°";
            let pass = "";
            for(let i=0;i<length;i++)
                    {
                        pass+=str[Math.floor(Math.random()*str.length)];
                    }
            setPassword(pass)
        
    },[length,number,specialCharacter]);
    
    
    useEffect(()=>{
        RandomPassword();
    },[length,number,specialCharacter]);   //since the dependencies are same we can se the RandomPassword in place of the dependencies in here 
        
    return(
        <>
        <h1>Password Generator</h1> 
        <h1>{password}</h1>
        <input type="range" min={8} max={25} onChange={(e)=>setlength(e.target.value)}></input>  
        <label>length:{length}</label>     
        <input type="checkbox" onClick={()=>setnumber(!number)}></input> 
        <label>Number</label>   
        <input type="checkbox" onClick={()=>setSpecialCharacter(!specialCharacter)}></input>
        <label>Special</label>         

        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Fun/>)
