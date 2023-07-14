import React ,{useState} from 'react'

const Usestatewithobject=()=>{

    const [name,setName]=useState({firstname:'',lastname:''})

    function handlename(e){
            setName({...name,firstname:e.target.value})
            console.log(e)
    }
    function handlelastname(e){
        setName({...name,lastname:e.target.value})
        console.log(e)
    }
    return (
      <form>
        <input type="text" value={name.firstname} onChange={handlename} />
        <input type="text" value={name.lastname} onChange={handlelastname} />
        <h2>firstname:{name.firstname}</h2>
        <h2>lastname:{name.lastname}</h2>
      </form>
    );
}

export default Usestatewithobject;