import React ,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Chatcontainer from '../components/Chatcontainer'
import RightSideBar from '../components/RightSideBar'

const Home = () => {
    const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
        <div className= {`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ? 'md:grid-cols-[250px_2fr_250px] xl:grid-cols-[280px_2.5fr_280px]': 'md:grid-cols-2'}`}>            <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
            <Chatcontainer selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
            <RightSideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
        </div>
    </div>
  )
}

export default Home