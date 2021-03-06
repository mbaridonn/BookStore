import React, { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import { IBook } from "../Books/IBook";

interface IPaginatorProps {
  books: IBook[];
  pageLimit: number;
  handleClick: any;
}

export const Paginator = (props: IPaginatorProps) => {
  const [pages, setPages] = useState<number[]>([]);
  const [activePage, setActivePage] = useState(1);
  // const [pageLimit, setPageLimit] = useState(0);

  const changePage = (page: number) => {
    const start = (page - 1) * props.pageLimit;
    const end = page * props.pageLimit;
    const selectedBooks = props.books.slice(start, end);
    props.handleClick(selectedBooks);
    setActivePage(page);
  };

  useEffect(() => {
    const initTotalPages = (totalBooks: number, pageLimit: number) => {
      const totalPages = Math.ceil(totalBooks / pageLimit);
      const pages = [];
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      setPages(pages);
    };

    initTotalPages(props.books.length, props.pageLimit);
  }, [props.books, props.pageLimit]);

  return (
    <Container style={{maxWidth: "80%", marginTop: "20px" }}>
      <Pagination>
        {pages.map((page) => (
          <Pagination.Item
            key={page}
            active={page === activePage}
            onClick={() => changePage(page)}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};
