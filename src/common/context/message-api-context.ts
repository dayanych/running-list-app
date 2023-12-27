import { MessageInstance } from 'antd/es/message/interface';
import { createContext } from 'react';

export const MessageApiContext = createContext<null | MessageInstance>(null);
