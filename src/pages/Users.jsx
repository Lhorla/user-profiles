import React, { useState, useContext, useEffect } from "react";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <Navbar />
      <main className="header-users">
        <h1>All Users</h1>

        {currentPost.length !== 0 ? (
          <div className="user-container">
            {currentPost.map((user, index) => {
              return (
                <div key={index} className="user-card">
                  <div>
                    <img
                      src={user.picture.large}
                      alt="user"
                      className="user-image"
                    />
                  </div>
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
      </main>
      <Footer />
    </div>
  );
}

export default Users;

/* <Pagination resultAPI={resultAPI} /> 
import Pagination from "../Pagination";
*/
