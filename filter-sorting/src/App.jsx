import React, { useEffect, useState } from 'react'



export default function App() {
  const [data, setData] = useState([])
  const [value, setValue] = useState("")
  const [sort , setSort] = useState("")

  const sortOtions = ["name", "email" , "phone", "address" , "status"]

  // searching
  const handelChange = async (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/users?q=${value}`)
      .then((res) => res.json())
      .then((result => setData(result)))
    setValue("")
  }


  // sorting
  const handelSort = (e)=>{
    let value = e.target.value
    setSort(value);
    fetch(`http://localhost:3000/users?_sort=${value}&_order=asc`)
      .then((res) => res.json())
      .then((result => setData(result)))

  }




  useEffect(() => {

    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((result => setData(result)))


  }, [])

  return (
    <>


      <h1 className=' text-center text-2xl font-bold py-2'>Searching Sorting  Using Json Fake REST API</h1>


      <div  className='flex justify-around  items-center'>

        {/* input feild */}

        <form className='flex justify-center gap-2 py-2'>
          <input type="text"
            value={value}
            className=' w-96 p-2 border-black border-2 rounded'
            onChange={(e) => setValue(e.target.value)}

          />
          <button
            className='b-2 border-balck bg-slate-500 text-white p-2  rounded'
            onClick={handelChange}
          >Search</button>
        </form>

        {/* select feild */}


      
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium "
          >
            Select an option
          <select
            id="countries"
            value={sort}
            onChange={handelSort}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-3 "
          >
            <option>Choose a country</option>
            {sortOtions.map((item, index)=>(
              <option value={item} key={index}>{item.toUpperCase()}</option>

            ))}

           
          </select>
          </label>
        


      </div>





      {/* table */}
      <div className="relative overflow-x-auto py-2">
        <table className="w-[1200px] m-auto text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-white">
                No.
              </th>
              <th scope="col" className="px-6 py-3  text-white">
                Name
              </th>
              <th scope="col" className="px-6 py-3  text-white">
                Email
              </th>
              <th scope="col" className="px-6 py-3  text-white">
                Phone
              </th>
              <th scope="col" className="px-6 py-3  text-white">
                Address
              </th>
              <th scope="col" className="px-6 py-3  text-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, address, email, phone, status }) => (
              <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {id}
                </th>
                <td className="px-6 py-4 text-yellow-300 font-bold" >{name}</td>
                <td className="px-6 py-4">{email}</td>
                <td className="px-6 py-4">{phone}</td>
                <td className="px-6 py-4">{address}</td>
                <td className="px-6 py-4">{status}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </>
  )
}
