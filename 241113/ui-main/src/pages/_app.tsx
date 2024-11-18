import "@/styles/globals.css";
import { ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import GlobalLayout from "@/components/global-layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  // const router = useRouter();
  // // console.log(router);
  // const onClickBtn = () => {
  //   // push 페이지로 이동 시키기
  //   router.push('/test');
  //   //replace 이동은 하되, 뒤로가기 방지
  //   // router.replace('/test');
  //   //페이지 뒤로가기
  //   // router.back();
  // };

  // useEffect(() => {
  //   router.prefetch('/test');
  // }, []);

  return (
    <>
      {/* <header>
        <Link href={'/'}>Index</Link>
        줄바꿈 하지 않는 선에서의 여백 주기 &nbsp;
        &nbsp;
        <Link href={'/search'} prefetch={false}>
          Search
        </Link>
        <Link href={'/book/1'}>Book/1</Link>
        <div>
          <button onClick={onClickBtn}>/test 페이지로 이동</button>
        </div>
      </header> */}
      <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
    </>
  );
}
