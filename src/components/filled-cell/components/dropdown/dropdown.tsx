import {
  ArrowRightOutlined,
  CloseOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import { Dropdown as DropdownAntd, MenuProps } from 'antd';
import React, { PropsWithChildren } from 'react';
import { StateStatus } from 'src/common/constants/state-status';
// import styles from 'src/components/dropdown/dropdown.module.scss';

type DropdownProps = {
  updateState: (status: number) => void;
  deleteState: () => void;
};

const Dropdown = ({
  children,
  updateState,
  deleteState,
}: PropsWithChildren<DropdownProps>) => {
  const items: MenuProps['items'] = [
    {
      key: 'empty',
      label: <span>Empty</span>,
      icon: <Icon icon="ph:square" />,
      onClick: () => updateState(StateStatus.Empty),
    },
    {
      key: 'fulldone',
      label: <span>Full done</span>,
      icon: <FontAwesomeIcon icon={faSquare} />,
      onClick: () => updateState(StateStatus.FullDone),
    },
    {
      key: 'halfdone',
      label: <span>Half done</span>,
      icon: <Icon icon="lucide:triangle-right" rotate={2} />,
      onClick: () => updateState(StateStatus.HalfDone),
    },
    {
      key: 'delay',
      label: <span>Delay</span>,
      icon: <ArrowRightOutlined />,
      onClick: () => updateState(StateStatus.Delay),
    },
    {
      key: 'failed',
      label: <span>Failed</span>,
      icon: <CloseOutlined />,
      onClick: () => updateState(StateStatus.Failed),
    },
    { type: 'divider' },
    {
      key: 'delete',
      label: <span>Delete</span>,
      icon: <DeleteOutlined />,
      danger: true,
      onClick: deleteState,
    },
  ];

  return (
    <DropdownAntd
      menu={{ items }}
      trigger={['click']}
      placement="top"
      arrow={true}
    >
      {children}
    </DropdownAntd>
  );
};

export default Dropdown;
