import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  console.log(q);
  return <div>search 페이지 : {q}</div>;
};

export default Page;

// 프로그래머스 사이트
// 민간 자격 시험 pccp (*코딩 전문 역량 인증평가)
