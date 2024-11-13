//[...id] = 복수의 동적 파라미터 값을 반영하는 path
import React from 'react';

import { useRouter } from 'next/router';

const Book = () => {
  const router = useRouter();
  // console.log(router);
  const {
    query: { id },
  } = router;

  console.log(id);
  return <h1>Book</h1>;
};

export default Book;
