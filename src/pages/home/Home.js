import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar'

function Home() {
    return (
        <div>
          
          <Topbar/>
          <div className="homeContainer">
             <div className="row">
                 <div className="col-md-3">
                     <div className="side">
                         <Sidebar/> 
                     </div>
                 </div>
                 <div className="col-md-5">
                     <div className="feed">

                     </div>
                 </div>
                 <div className="col-md-4">
                     <div className="rightBar">
                         
                     </div>
                 </div>
             </div>

          </div>
             
        </div>
    )
}

export default Home
