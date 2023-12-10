import Avatar from "react-avatar"

const Users = ({ username }) => {
  return (
    <>
        <div className="flex items-center mb-2 gap-x-2 cursor-pointer hover:bg-gray-200 rounded-md p-1">
            <Avatar name={username} size={45} round="50%" className="" />
            <span className="text-lg font-medium font-mukta">{username}</span>
        </div>
    </>
  )
}

export default Users