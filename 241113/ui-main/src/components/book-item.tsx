import React from "react";
import type { BookData } from "@/types";
import Link from "next/link";
import style from "./book-item.module.css";

const BookItem = ({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) => {
  // console.log(props);

  return (
    <Link className={style.container} href={`/book/${id}`}>
      <img src={coverImgUrl} alt="img" />

      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subtitle}>{subTitle}</div>
        <div className={style.description}>{description}</div>
        <br />
        <div className={style.author}>
          {author}|{publisher}
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
