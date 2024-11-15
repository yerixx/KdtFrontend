import { useEffect, useState } from 'react';

//React에서 Data-Retching과정
const Page = () => {
  const [state, setState] = useState('');
  const fetchData = async () => {
    const response = await fetch('...');
    const data = await response.json();

    setState(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{state}</div>;
};
export default Page;
