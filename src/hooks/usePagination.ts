import { useState } from "react";

const usePagination = (totalItems: number) => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const nextPage = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (page: number) => setPage(Math.min(Math.max(page, 1), totalPages));

  return {
    page,
    itemsPerPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    setItemsPerPage,
  };
};

export default usePagination;