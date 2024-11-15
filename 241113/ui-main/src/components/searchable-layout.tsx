import React, { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import style from './searchable-layout.module.css';

const SearchableLayout = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState('');

  const router = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search?q=${search}`);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit} className={style.searchbar_container}>
          <input
            value={search}
            type="text"
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요"
          />
          <input type="submit" value={'검색'} />
        </form>
      </div>
      {children}
    </div>
  );
};

export default SearchableLayout;
