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

  return (
    <div className="pagination">
      <button className="btn" onClick={() => getPageByButton(currentPage - 1)}>PREV</button>

      {pageNumbers.map((data, index) => {
        return (
          <li
            className="pagination-item"
            onClick={() => getPageByNumber(data)}
            key={index}
          >
            {data}
          </li>
        );
      })}

      <button className="btn" onClick={() => getPageByButton(currentPage + 1)}>NEXT</button>
    </div>
  );
};

export default Pagination;