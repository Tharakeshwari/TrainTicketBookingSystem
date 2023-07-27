import React,{ useEffect,useState} from "react";
import './view.css';
import axios from "axios";
function DataBaseView(){
    const [content, addContent]=useState([]);
    useEffect(()=>{
    axios.get('http://localhost:8080/appointment').then(function (response) {
    addContent(response.data);
    });
    })
    return(
        <div>
            <center>        
            <h1>APPOINMENT BOOKING DETAILS</h1>
            <table style={{textAlign:"center"}}>
                <tr style={{height:"65px",width:"900px"}}>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Problem</th>
                    <th>City</th>
                </tr>
                {content.map((value)=>(
                    <tr style={{height:"65px"}}>
                        <td style={{width:"70px"}}>{value.id}</td>
                        <td>{value.name}</td>
                        <td style={{width:"70px"}}>{value.age}</td>
                        <td style={{width:"80px"}}>{value.gender}</td>
                        <td style={{width:"90px"}}>{value.date}</td>
                        <td style={{width:"80px"}}>{value.time}</td>
                        <td>{value.problem}</td>
                        <td style={{width:"90px"}}>{value.place}</td>
                    </tr>
                ))}
                    
            </table>
            </center>
        </div>
    )
}
export default DataBaseView;