import React, { useEffect, useState } from 'react'
import phonesService from '../services/phones';
import { Link } from 'react-router-dom';



function List() {
  const [phones, setPhones] = useState([]);
  
  useEffect(() => {
    phonesService.list()
      .then((phones) => {
        console.log(phones)
        setPhones(phones)
      })
  } , 
  [])

  return (
    <div>
      <div>Welcome to our list page</div> 
    {
      phones.map((phone) => <ul class="card">
        <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
        <div>{phone.description}</div>
      </ul> )
    } </div>
  )
}

export default List