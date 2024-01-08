import { ConfigProvider, message } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { primaryTheme } from 'src/assets/themes/primary.theme';
import { MessageApiContext } from 'src/common/context/message-api-context';
import { useUser } from 'src/common/hooks/use-auth';
import { Header } from 'src/components/header';
import { AuthDal } from 'src/data-access-logic/auth/auth.dal';

const App = () => {
  const [messageApi, messageContainer] = message.useMessage();
  const user = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    AuthDal.listenAuthStateChange(dispatch);
  }, [user]);

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
