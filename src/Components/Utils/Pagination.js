export default function Pagination({ getPage, currentPage, totalPages }) {

  function nextPage() {
    if (currentPage < totalPages)
      getPage(currentPage + 1);
  }

  function previousPage() {
    if (currentPage > 1)
      getPage(currentPage - 1)
  }

  function firstPage() {
    getPage(1)
  }

  function lastPage() {
    getPage(totalPages)
  }

  return (
    <ul className="pagination justify-content-center p-0">

      {/* The previous page button option */}
      <li className={"page-item" + (currentPage === 1 && " disabled")}>
        <button onClick={previousPage} className="page-link rounded-0 shadow-none">Previous</button>
      </li>

      {/* Option for the first page if the current is greater than 2 */}
      {currentPage > 2 ?
        <>
          <li className="page-item">
            <button onClick={firstPage} className="page-link shadow-none">1</button>
          </li>
          <li className="page-item disabled">
            <button className="page-link shadow-none"> ... </button>
          </li>
        </>
        : null}

      {/* The previous page number option */}
      {currentPage > 1 ?
        <li className="page-item">
          <button onClick={previousPage} className="page-link shadow-none">{currentPage - 1}</button>
        </li>
        : null}

      {/* The current active page */}
      <li className="page-item active">
        <button className="page-link shadow-none">{currentPage}</button>
      </li>

      {/* The next page number option */}
      {currentPage < totalPages ?
        <li className="page-item">
          <button onClick={nextPage} className="page-link shadow-none">{currentPage + 1}</button>
        </li>
        : null}


      {/* Option for the last page if the current is smaller than totalPages - 1 */}
      {currentPage < totalPages - 1 ?
        <>
          <li className="page-item disabled">
            <button className="page-link shadow-none"> ... </button>
          </li>
          <li className="page-item">
            <button onClick={lastPage} className="page-link shadow-none">{totalPages}</button>
          </li>
        </>
        : null}

      {/* The next page button option */}
      <li className={"page-item" + (currentPage === totalPages ? " disabled" : null)}>
        <button onClick={nextPage} className="page-link rounded-0 shadow-none">Next</button>
      </li>

    </ul>
  )
}