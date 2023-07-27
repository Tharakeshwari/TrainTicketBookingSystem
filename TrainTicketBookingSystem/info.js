import React from 'react';
function Info(props) {
    const setSeats=(value)=>{
        if(value==="ac1"){

        }
        else if(value==="ac2"){
            
        }
        else if(value==="ac3"){

        }
        else if(value==="sleeper"){

        }
        else if(value==="first"){

        }
        else if(value==="second"){

        }
    }
    return ( 
        <>
        <div className='i11'>
            <br></br><br></br>
            <fieldset style={{width:"90%"}}>
                <legend>PASSANGER&nbsp;{props.n+1}</legend>
                <input type="text" placeholder='Name'style={{border:'none',width:'17%',height:"3vh",borderRadius:"10px"}}>
                    </input>
                    <br></br><br></br>
                    <input type="number" placeholder='Age'style={{border:'none',width:'18%',height:"5vh",borderRadius:"10px"}}>
                    </input><br></br><br></br>
                    <input type="number" placeholder='Aadhar Number'style={{border:'none',width:'18%',height:"5vh",borderRadius:"10px"}}>
                    </input><br></br><br></br>
                    <select style={{border:'none',width:'18%',height:"5vh",borderRadius:"10px"}}>
                        <option value='Class'>Class</option>
                        <option value="AC 1" onClick={setSeats("ac1")}>AC 1</option>
                        <option value="AC 2"onClick={setSeats("ac2")}>AC 2</option>
                        <option value="AC 3"onClick={setSeats("ac3")}>AC 3</option>
                        <option value="Sleeper"onClick={setSeats("sleeper")}>SLEEPER</option>
                        <option value="First Class"onClick={setSeats("first")}>FIRST CLASS</option>
                        <option value="Second Class"onClick={setSeats("second")}>SECOND CLASS</option>
                    </select>
                    <br></br><br></br>
                    <select style={{border:'none',width:'18%',height:"5vh",borderRadius:"10px"}}>
                        <option value='Gender'>Gender</option>
                        <option value='Male'>MALE</option>
                        <option value='Female'>FEMALE</option>
                    </select>
                    <br></br><br></br> 
            </fieldset>
        </div>
        </>
     );
}

export default Info;