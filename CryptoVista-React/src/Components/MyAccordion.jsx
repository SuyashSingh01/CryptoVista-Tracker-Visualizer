import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const getItems = (panelStyle) => [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];
const MyAccordion= () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    borderRadius: token.borderRadiusLG,
    border: 'none',
    backdropFilter: 'blur(20px)', // or whatever the value of 'xl' is in your config
    backgroundImage: 'linear-gradient(to left, #f0fff4, #fde8cd)',
    color: '#fff',
    fontSize: 16,
    lineHeight: '28px',
  };
  return (
    <Collapse className='w-11/12 my-9 h-1000px mx-auto backdrop-blur-xl bg-gradient-to-l from-green-100 to-rose-50'
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        color: '#fff',
        fontSize: 16,
        lineHeight: '28px',
        borderRadius: token.borderRadiusLG,
      }}
      items={getItems(panelStyle)}
    />
  );
};
export default MyAccordion;