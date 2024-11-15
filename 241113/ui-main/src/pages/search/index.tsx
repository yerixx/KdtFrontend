import React, { ReactNode } from "react";
// import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";
// import books from "@/mock/book.json";
import BookItem from "@/components/book-item";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import fetchBooks from "@/lib/fetch-books";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // console.log(context);
  const q = context.query.q;
  const books = await fetchBooks(q as string);
  return {
    props: { books },
  };
};

const Page = ({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // const router = useRouter();
  // console.log(router);
  // const {
  //   query: { q },
  // } = router;
  // console.log(q);
  return (
    <>
      {/* <h1>Search:{q}</h1> */}
      <div>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  );
};

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
