import { ConfigProvider, message } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { primaryTheme } from 'src/assets/themes/primary.theme';
import { MessageApiContext } from 'src/common/context/message-api-context';
import { Header } from 'src/components/header';

const App = () => {
  const [messageApi, messageContainer] = message.useMessage();

  return (
    <ConfigProvider theme={{ token: primaryTheme }}>
      {messageContainer}
      <MessageApiContext.Provider value={messageApi}>
        <Header />
        <Outlet />
      </MessageApiContext.Provider>
    </ConfigProvider>
  );
};

export default App;
