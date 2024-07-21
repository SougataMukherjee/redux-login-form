import { useDispatch, useSelector } from "react-redux";
import { Constants } from "../Constant";

export default function Logout() {
  const products = useSelector((state) => state.products);
  const users = useSelector((state) => state.loggedInUser);

  const dispatch = useDispatch();

  return (
    <>
      <h1 className="display-6">
        Welcome <span className="user_name">User</span>
      </h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products) => (
            <tr key={products.id}>
              <td>{products.name}</td>
              <td>{products.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.map((user) => (
        <div key={user.id}>
          {user.email}-{user.password}
        </div>
      ))}
      <button
        className="btn btn-outline-danger"
        type="submit"
        onClick={() => {
          dispatch({
            type: Constants.LOGOUT,
            payload: null,
          });
        }}
      >
        Logout
      </button>
    </>
  );
}
