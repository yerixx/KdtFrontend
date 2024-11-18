import { BookData } from "@/types";

const fetchBooks = async (q?: string): Promise<BookData[]> => {
  //url 정의
  let url = "https://onbite-books-server-five.vercel.app/book";

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default fetchBooks;
