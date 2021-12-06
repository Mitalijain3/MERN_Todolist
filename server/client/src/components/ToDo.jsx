import React,{useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { FaRegTrashAlt} from "react-icons/fa";
import { FaCheckSquare} from "react-icons/fa";

const ToDo = () => {
  const history= useHistory();
  const [userdata, setuserData] = React.useState("");
  const [listItem,setlistItem]=React.useState([]);
  const callToDoPage= async()=>{
    try {
      const res = await fetch("/ToDo", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        }
      });
      const data = await res.json();
      console.log(data);
      setlistItem(data);
      console.log(listItem);
      if (res.status !== 200) {
        throw new Error(res.error);
        history.push('/login');
      }
    } catch (err) {
      console.log(err);
      history.push('/login');
    }
  };

useEffect(() => {
callToDoPage();
},[handleSubmit]);

function handleChange(event) {
  const Value = event.target.value;
  setuserData(Value);
}
const handleSubmit = async (e) => {
  e.preventDefault();
 console.log(userdata);
  const res = await fetch("/ToDo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
    userdata
    }),
  });
  const data = await res.json();
  console.log("message: "+ data);
  if (!data) {
    window.alert("Item not added");
    console.log("Item not added");
  } else {
    setuserData('');
  }
};
const handleDelete= (id)=>{
      fetch("/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id
    }),
  });
console.log(id);
window.location.reload(false);
}
  return (
    <div>
       <div className="container todo">
      <form method="POST">
      <div className='InputH1'>
          <h1 className="H1">TO DO LIST</h1>
          </div>
        <div className="Input">
         
      <input onChange={handleChange} type="text" value={userdata} className='ToDoInput'/>
      <button onClick={handleSubmit} className='ToDoButton'
      >
      <FaCheckSquare/>
      </button>
      </div>
      </form>
      <div>
        <ul>

          {listItem.map((list)=><div className="ToDolidiv"><li key={list._id}className="ToDoli" >{list.item}</li>
          <button onClick={()=>handleDelete(list._id)} className="ToDoliButton" > <FaRegTrashAlt/>  </button>
          </div>)}
        </ul>
      </div>
    </div>
    </div>
  )
}



export default ToDo
