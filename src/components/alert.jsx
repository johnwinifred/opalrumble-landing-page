import React from 'react';


const Alert = ({type, message})=>{

    let bgColorClass = '';

    if(type === 'success'){
        bgColorClass = 'bg-green-100 border-green-400 text-green-700'
    } else if(type === 'error'){
        bgColorClass = 'bg-red-100 border-red-400 text-red-700';
    }   else if (type === 'warning') {
    bgColorClass = 'bg-yellow-100 border-yellow-400 text-yellow-700';
  }
    

    return(
        <div className={`${bgColorClass} p-4 shadow-md `} role='alert'>
            <p className="font-bold">{type.toUpperCase()}</p>
            <p>{message}</p>
        </div>
    )
};
export default Alert