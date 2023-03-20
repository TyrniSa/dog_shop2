
import { logoutUser } from "../redux/apiCalls"; 

const Dashboard = () => {

  const logout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem('persist:root');
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <button onClick={() => logout()} className='btn btn-primary'>
          Logout
        </button>
      </div>
    </div>
  )
};

export default Dashboard;