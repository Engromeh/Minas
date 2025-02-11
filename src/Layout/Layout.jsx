import React from 'react'
import Sidbar from '../Sidbar/Sidbar'
import Navbar from '../Navbar/Navbar'
import Statistics from '../Statistics/Statistics'

const Layout = () => {
  return (
    <div className="grid grid-cols-12 ">
         <aside className="col-span-3">
        <Sidbar />
      </aside>

      <div className="col-span-6 ">
        <Navbar />
        <Statistics />
       
      </div>
      <aside className="col-span-3">
        {/* <UserInfo /> */}
      </aside>
    </div>
  )
}

export default Layout
