import './App.css';
import 'antd/dist/antd.css';

import HeaderContent from './components/HeaderContent/HeaderContent'
import Search from './components/Search/Search'
import Cards from './components/Cards/Cards'
import FooterContent from './components/FooterContent/FooterContent'



import { Layout, Space, Card } from 'antd';
const { Header, Content, Footer } = Layout;




function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{ background: "white" }}>
          <HeaderContent />
        </Header>
        <Content style={{ padding: '0 50px' , textAlign: "left" }}>
          <Search />
          <div className="content_header">Moscow Restaurants</div>

          <Cards />

        </Content>
        <Footer style={{ textAlign: 'center', background: "#262626" }}><FooterContent /></Footer>
      </Layout>
    </div>
  );
}

export default App;
