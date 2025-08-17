export default function Pagination({ currentPage, pageCount, onPageChange }) {
  return (
    <div className="pagination-controls">
      <button onClick={() => onPageChange(0)} disabled={currentPage === 0} className="pagination-button">First</button>
      <button onClick={() => onPageChange(Math.max(0, currentPage - 1))} disabled={currentPage === 0} className="pagination-button">Prev</button>
      <span className="pagination-info">Page {currentPage + 1} of {pageCount}</span>
      <button onClick={() => onPageChange(Math.min(pageCount - 1, currentPage + 1))} disabled={currentPage >= pageCount - 1} className="pagination-button">Next</button>
      <button onClick={() => onPageChange(pageCount - 1)} disabled={currentPage >= pageCount - 1} className="pagination-button">Last</button>
    </div>
  );
}
