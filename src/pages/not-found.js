import { useEffect } from 'react';
import Header from '../components/header';
import { LoadingOutlined } from '@ant-design/icons';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found - Instagram';
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl"><LoadingOutlined className="load" /></p>
        <p className="text-center text-2xl">Sorry ... </p>
        <p className="text-center text-2xl">Page Not Found!</p>
      </div>
    </div>
  );
}
