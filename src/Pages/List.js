import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
const List = () => {
  const [data, setData] = useState('');
  console.log(data);


  useEffect(() => {
    axios.get('http://localhost:8000/userlist').then((response) => {
      setData(response.data);
    }).catch(function (error) {
      console.log(error);
    })
  }, [])

  const handleDelete = (id) => {
    axios.get(`http://localhost:8000/userdelete/${id}`).then((response) => {
      // console.log(response);

        axios.get('http://localhost:8000/userlist').then((response) => {
          setData(response.data);
        }).catch(function (error) {
          console.log(error);
        })

    }).catch(function (error) {
      console.log(error);
    })


  }


  return (
    <div className='container py-4'>
      <h1 className='text-center py-4 fw-bold'>Information</h1>
      <table className='table table-striped table-hover'>
        <thead>
          <tr className='font'>
            <th>Fname</th>
            <th>Lname</th>
            <th>City</th>
            <th>Email</th>
            {/* <th>Password</th> */}
            <th rowSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((result) => (
              <tr className='font'>
                <td className='pt-3'>{result.fname}</td>
                <td className='pt-3'>{result.lname}</td>
                <td className='pt-3'>{result.city}</td>
                <td className='pt-3'>{result.email}</td>
                {/* <td className='pt-3'>{result.password}</td> */}
                <td className='pt-3'><Link to={`/update/${result._id}`} className='fs-4 text-success'><i class="fa-solid fa-pen-to-square"></i></Link></td>
                <td><button  onClick={()=>handleDelete(result._id)} className='fs-4 text-danger btn' ><i class="fa-regular fa-calendar-xmark"></i></button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default List
