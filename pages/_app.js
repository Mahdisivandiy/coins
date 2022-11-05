import '../styles/globals.css';
import { ConfigProvider } from 'antd';

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider direction="rtl">
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
