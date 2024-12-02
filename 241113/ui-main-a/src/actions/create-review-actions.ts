/* eslint-disable @typescript-eslint/no-explicit-any */

//해당 함수가 Server Action의 기능을 가지게 해줌
"use server";
import delay from "@/util/delay";
//next 재검증기능 = snapshot
import { revalidatePath } from "next/cache";

export const createReviewAction = async (_: any, formData: FormData) => {
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  console.log(bookId, content, author);

  if (!content || !author || !bookId) {
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해주세요!",
    };
  }
  try {
    await delay(2000);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    // 1. 특정 주소 해당 및 관련 컴포넌트 페이지들의 재검증
    // revalidatePath(`book/${bookId}`);
    // // 2. 특정 경로의 모든 페이지를 재검증
    // revalidatePath(`book/[id]`, "page");
    // // 3. 특정 레이아웃을 갖는 모든 페이지 재검증
    // revalidatePath(`/(with-searchbar)`, "layout");
    // // 4. 현재 작업중인 모든 페이지 재검증
    // revalidatePath("/", "layout");
    // 5. 태그를 기준, 데이터 캐시 재검증 => 추천
    revalidatePath(`review-${bookId}`);
    return {
      status: true,
      error: "",
    };
  } catch (err) {
    console.error(err);
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다 : ${err}`,
    };
  }
};
