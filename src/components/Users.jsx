import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";


function Users() {
  const userAPI = "https://randomuser.me/api/?results=50";

  const [resultAPI, setResultAPI] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [postPerPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);

  const indexOfLastPage = postPerPage * currentPage; // 10
  const indexOfFirstPage = indexOfLastPage - postPerPage; // 0
  const currentPost = resultAPI.slice(indexOfFirstPage, indexOfLastPage);


  useEffect(() => {
    resultAPIFromUrl();
  }, []);

  const resultAPIFromUrl = async () => {
    setIsLoading(true);
    const response = await fetch(userAPI);
    const data = await response.json();
    setResultAPI(data.results);
    setIsLoading(false);
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/features">Features</Link>
        <Link to="/users">Users</Link>
      </nav>

      <h1>Users</h1>

      {currentPost.length !== 0 ? (
        <div>
          {currentPost.map((user, index) => {
            return (
              <div key={index} className="user-container">
                <img
                  src={user.picture.large}
                  alt="user"
                  className="user-image"
                />
                <div className="user-profile">
                  <h3 className="user-name">
                    {user.name.first} {user.name.last}
                  </h3>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                  <p>{user.location.city}</p>
                  <p>{user.location.country}</p>
                </div>
              </div>
            );
          })}
          <Pagination 
            postPerPage={postPerPage}
            currentPage={currentPage}
            setCurrentPage={setcurrentPage}
            resultAPI={resultAPI}
          /> 
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Users;


/* <Pagination resultAPI={resultAPI} /> 
import Pagination from "../Pagination";
*/