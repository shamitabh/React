import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  loading,
}) => {
  if (loading) {
    return null;
  } else {
    const pageNumbers = [];
    const numberOfPages = Math.ceil(totalPosts / postsPerPage);

    for (let i = 1; i <= numberOfPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a
              // '!#' means there will be no navigation when clicked on the link
              href="!#"
              className="page-link"
              onClick={() => {
                currentPage > 1
                  ? paginate(currentPage - 1)
                  : paginate(numberOfPages);
              }}
            >
              Previous
            </a>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber} className="page-item">
              <a
                // '!#' means there will be no navigation when clicked on the link
                href="!#"
                className="page-link"
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              // '!#' means there will be no navigation when clicked on the link
              href="!#"
              className="page-link"
              onClick={() => {
                currentPage < numberOfPages
                  ? paginate(currentPage + 1)
                  : paginate(1);
              }}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Pagination;
