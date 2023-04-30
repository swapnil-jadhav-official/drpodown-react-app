import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import './App.css'
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
       Yes
      </a>
    ),
    icon: <SmileOutlined />,
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        Probably Not
      </a>
    ),
    
    disabled: false,
  },
 
];
const App = () => (
  <Dropdown className='dropdown'
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      Should you use the dropdown?
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default App;