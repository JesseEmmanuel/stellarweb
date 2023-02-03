import React from 'react'

function StartupLogPagination({ rowPerPage, totalRows, paginate }) {
    const pageNumbers = [];

    for(let i =1; i<= Math.ceil(totalRows / rowPerPage); i++)
        pageNumbers.push(i);
  return (
    <nav aria-label="Page navigation">
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li className="page-item">
                    <a className="page-link" onClick={() => paginate(number)} href="#0">{number}</a>   
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default StartupLogPagination