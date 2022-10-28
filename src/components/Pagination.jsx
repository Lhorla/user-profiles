import React from "react";

const Pagination = ({
  postPerPage,
  currentPage,
  setCurrentPage,
  resultAPI,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(resultAPI.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const getPageByNumber = (number) => {
    setCurrentPage(number);
  };

  const getPageByButton = (e) => {
    const button = e.target;
    const number = parseInt(button.innerText);
    setCurrentPage(number);
  };

  return (
    <div className="pagination">

      <button
        className="btn"
        onClick={getPageByNumber.bind(null, currentPage - 1)}
      >
        Previous
      </button>

      {pageNumbers.map((number) => {
        return (
          <button
            key={number}
            className="btn"
            onClick={getPageByButton}
            style={{
              backgroundColor: number === currentPage ? "black" : "aquamarine",
            }}
          >
            {number}
          </button>
        );
      })}

      <button
        className="btn"
        onClick={getPageByNumber.bind(null, currentPage + 1)}
      >
        Next
      </button>

    </div>
  );
};


export default Pagination;