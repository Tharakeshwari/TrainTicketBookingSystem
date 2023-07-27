import React, { Component } from 'react'
import jsPDF from 'jspdf'
import { Button } from '@mui/material';
class Data extends Component {
    pdfGenerate=()=>{
        var doc=new jsPDF('landscape','px','a4','false');
        doc.addPage();
        doc.text(0,10,'Name');
        doc.save('a.pdf');
    }
    render() { 
        return (
            <>
            <Button onClick={this.pdfGenerate}>Download PDF</Button>
            </>
        );
    }
}
 
export default Data;