import Info from "./info";

const Input=(num)=>{
    const rows=[];
    for(let i=0;i<num;i++){
        rows.push(<Info n={i}/>);
    }
    return rows;
}
export default Input;