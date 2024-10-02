import { useEffect, useState } from "react"
import Spinner from "../layout/Spinner"


function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`https://api.github.com/users`,{
        headers: {
            Authorization: `token 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`
        }
    })
    const data = await response.json()
    console.log(data)
    setUsers(data);
    setLoading(false)
  }



  if(!loading){
    return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 
        lg:grid-cols-2 md:grid-cols-2">
             {users.map((user)=>(
                <h3>{user.login}</h3>
             ))}
        </div>
      )
  }
  else{
    return <h3>Loading...</h3>
  }
}

export default UserResults