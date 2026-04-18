import { useEffect, useState } from "react";

function AdminDashboard() {
  //   const { users } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  //
  useEffect(() => {
    setTimeout(() => {
      setUsers(JSON.parse(window.localStorage.getItem("users")));
    });
  }, []);

  return (
    <div>
      AdminDashboard
      {users?.map((userItem) => {
        return <div key={userItem.pancard}>{userItem.name}</div>;
      })}
    </div>
  );
}

export default AdminDashboard;
