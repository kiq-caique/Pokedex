import React from "react";

const Pagination = (props) => {
  const { pages, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className="pagination-container">
      <button onClick={onLeftClick}>
        <div>⬅️</div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onLeftClick}>
        <div>➡️</div>
      </button>
    </div>
  );
};

export default Pagination;
