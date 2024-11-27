import React from "react";
import BookItemSkeleton from "./book-item-skeleton";

const BookListSkeleton = ({ count }: { count: number }) => {
  // props도 전달 받은 값대로 배열을 만들겠다 fill(0) 모든 값 0을 가지고 있는 배열
  return new Array(count)
    .fill(0)
    .map((_, index) => (
      <BookItemSkeleton key={`book-item-skeleton-${index}`} />
    ));
};

export default BookListSkeleton;
