import React, { ReactNode } from 'react';
//반드시 모듈로 바꾸고 모듈화 시켜서 가져와야함
import style from './index.module.css';
import SearchableLayout from '@/components/searchable-layout';
import Books from '@/mock/book.json';
import BookItem from '@/components/book-item';

const Home = () => {
  // style 모듈에서 h1 타입을 줄거야
  return (
    <main className={style.container}>
      <section>
        <h1>지금 추천하는 도서</h1>
        {Books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h1>등록된 모든 도서</h1>
        {Books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </main>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Home;
