//[...id] = 복수의 동적 파라미터 값을 반영하는 path
import React from "react";
import style from "./[id].module.css";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fetchOneBook from "@/lib/fetch-one-book";
import { useRouter } from "next/router";
import Head from "next/head";

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
      {
        params: { id: "3" },
      },
    ],
    //대비책 false = 없는 페이지로 간주하겠따
    // fallback: "blocking",
    fallback: true,
  };
};

// const mockBook = {
//   id: 1,
//   title: "한 입 크기로 잘라 먹는 리액트",
//   subTitle: "자바스크립트 기초부터 애플리케이션 배포까지",
//   description:
//     "자바스크립트 기초부터 애플리케이션 배포까지\n처음 시작하기 딱 좋은 리액트 입문서\n\n이 책은 웹 개발에서 가장 많이 사용하는 프레임워크인 리액트 사용 방법을 소개합니다. 인프런, 유데미에서 5000여 명이 수강한 베스트 강좌를 책으로 엮었습니다. 프런트엔드 개발을 희망하는 사람들을 위해 리액트의 기본을 익히고 다양한 앱을 구현하는 데 부족함이 없도록 만들었습니다. \n\n자바스크립트 기초 지식이 부족해 리액트 공부를 망설이는 분, 프런트엔드 개발을 희망하는 취준생으로 리액트가 처음인 분, 퍼블리셔나 백엔드에서 프런트엔드로 직군 전환을 꾀하거나 업무상 리액트가 필요한 분, 뷰, 스벨트 등 다른 프레임워크를 쓰고 있는데, 실용적인 리액트를 배우고 싶은 분, 신입 개발자이지만 자바스크립트나 리액트 기초가 부족한 분에게 유용할 것입니다.",
//   author: "이정환",
//   publisher: "프로그래밍인사이트",
//   coverImgUrl:
//     "https://shopping-phinf.pstatic.net/main_3888828/38888282618.20230913071643.jpg",
// };

export const getStaticProps = async (context: GetStaticPropsContext) => {
  console.log(context);
  const id = Number(context.params?.id);
  const book = await fetchOneBook(id);
  if (!book) {
    return {
      notFound: true,
    };
  }
  return {
    props: { book },
  };
};

const Index = ({ book }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  if (router.isFallback)
    return (
      <>
        <Head>
          <title>박필립스 </title>
          {/* <meta property="og:image" content={coverImgUrl} /> */}
          <meta property="og:image" content="thumbnail.png" />
          {/* <meta property="og:title" content={title} /> */}
          <meta property="og:title" content="한입북수" />
          {/* <meta property="og:description" content={description} /> */}
          <meta
            property="og:description"
            content="한입북스에 등록된 도서들을 만나보세요 "
          />
        </Head>
        <div>로딩중입니다..</div>
      </>
    );

  if (router.isFallback) {
    return "로딩중입니다!";
  }
  if (!book) {
    return (
      <div className={style.errorMessage}>
        <p>책 정보를 가져올 수 없습니다. 다시 시도해주세요.</p>
      </div>
    );
  }
  const { title, subTitle, description, coverImgUrl } = book;
  // const router = useRouter();
  // const { id } = router.query;
  // // console.log(router);
  // const {
  //   query: { id },
  // } = router;

  // console.log(id);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
        <div
          className={style.cover_img_container}
          style={{ backgroundImage: `url("${coverImgUrl}")` }}
        >
          <img src={coverImgUrl} alt="bookImg" />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
};

export default Index;
