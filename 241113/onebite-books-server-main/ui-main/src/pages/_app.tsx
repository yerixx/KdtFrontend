import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // console.log(router);
  const onClickBtn = () => {
    router.push('/test');
  };
  return (
    <>
      <header>
        <Link href={'/'}>Index</Link>
        {/* 줄바꿈 하지 않는 선에서의 여백 주기 &nbsp; */}
        &nbsp;
        <Link href={'/search'}>Search</Link>
        <Link href={'/book/1'}>Book/1</Link>
        <div>
          <button onClick={onClickBtn}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
