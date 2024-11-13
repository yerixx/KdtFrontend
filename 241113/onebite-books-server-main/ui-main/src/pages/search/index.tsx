import React from 'react';
import { useRouter } from 'next/router';

const Search = () => {
  const router = useRouter();
  console.log(router);
  const {
    query: { q },
  } = router;
  console.log(q);
  return <h1>Search:{q}</h1>;
};

export default Search;
