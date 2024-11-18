import React, { ReactNode } from "react";
//반드시 모듈로 바꾸고 모듈화 시켜서 가져와야함
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import Head from "next/head";

// //SSR 방식
// export const getServerSideProps = async () => {
//   //Home이라는 페이지 컴포넌트가 실행되기 전에 먼저 실행되어서,
//   //컴포넌트에 필요한 데이터를 사전에 패칭 및 불러와주는 기능을 하는 함수

//   // 서버부분이라 브라우저를 모름
//   // window.location; //error
//   // console.log('서버사이드 프롭스!');
//   const [allBooks, recoBooks] = await Promise.all([
//     fetchBooks(),
//     fetchRandomBooks(),
//   ]);

//   return {
//     props: { allBooks, recoBooks },
//   };
// };

//SSG 방식
export const getStaticProps = async () => {
  //Home이라는 페이지 컴포넌트가 실행되기 전에 먼저 실행되어서,
  //컴포넌트에 필요한 데이터를 사전에 패칭 및 불러와주는 기능을 하는 함수
  // 서버부분이라 브라우저를 모름
  // window.location; //error
  // console.log('서버사이드 프롭스!');
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);
  return {
    props: { allBooks, recoBooks },
    revalidate: 3,
  };
};

const Home = ({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>한 입 북스</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta
          property="og:description"
          content="한입북스에 등록된 도서들을 만나보세요"
        />
      </Head>
      <main className={style.container}>
        <section>
          <h1>지금 추천하는 도서</h1>
          {recoBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h1>등록된 모든 도서</h1>
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
      </main>
    </>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Home;
