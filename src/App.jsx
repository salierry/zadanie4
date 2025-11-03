import React from 'react';
import { Layout, Table, Form, Input, Button, Select, DatePicker, Radio, Checkbox, Space, Menu, message } from 'antd';
import { PhoneOutlined, MailOutlined, UserOutlined, CalendarOutlined } from '@ant-design/icons';
import './App.css';

// ИМПОРТЫ ИЗОБРАЖЕНИЙ
import kguLogo from './img/KGU.png';
import imagePic from './img/image.jpg';
import kartinkaPic from './img/kartinka.jpg';

const { Header, Content, Footer } = Layout;
const { Option } = Select;
const { TextArea } = Input;

const App = () => {
  const [form] = Form.useForm();

  const tableData = [
    { key: 1, number: 1, combined: 'Объединённая ячейка', mergedColumn: 'Ячейка' },
    { key: 2, number: 2, column1: 'Ячейка', column2: 'Ячейка', mergedColumn: 'Ячейка' },
    { key: 3, number: 3, column1: 'Ячейка', column2: 'Ячейка', mergedColumn: 'Ячейка' },
    { key: 4, number: 4, column1: 'Ячейка', column2: 'Ячейка', mergedColumn: 'Ячейка' },
    { key: 5, number: 5, column1: 'Ячейка', column2: 'Ячейка', mergedColumn: 'Ячейка' },
    { key: 6, number: 6, column1: 'Ячейка', column2: 'Ячейка', mergedColumn: 'Ячейка' },
    { key: 7, number: 7, column1: 'Ячейка', column2: 'Ячейка', mergedColumn: 'Ячейка' },
    { key: 8, number: 8, column1: 'Ячейка', column2: 'Ячейка', mergedColumn: 'Ячейка' },
  ];

  const tableColumns = [
    {
      title: '№',
      dataIndex: 'number',
      key: 'number',
      align: 'center',
    },
    {
      title: 'Заголовок объединённого блока',
      children: [
        {
          title: 'Колонка 1',
          dataIndex: 'column1',
          key: 'column1',
          align: 'center',
          render: (text, record) => record.combined ? { children: record.combined, props: { colSpan: 2 } } : text
        },
        {
          title: 'Колонка 2',
          dataIndex: 'column2',
          key: 'column2',
          align: 'center',
          render: (text, record) => record.combined ? { props: { colSpan: 0 } } : text
        },
      ],
    },
    {
      title: 'Объединённая колонка',
      dataIndex: 'mergedColumn',
      key: 'mergedColumn',
      align: 'center',
    },
  ];

  const onFinish = (values) => {
    console.log('Form values:', values);
    message.success('все четко форма отправлена');
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('заполняй все давай');
  };

  const validatePhone = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('телефон забыл'));
    }
    
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(value)) {
      return Promise.reject(new Error('цифрами пиши давай'));
    }
    
    if (value.length < 5) {
      return Promise.reject(new Error('давай хоть 5 цифр'));
    }
    
    return Promise.resolve();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    {
      key: 'links',
      label: 'Ссылки',
      onClick: () => scrollToSection('links')
    },
    {
      key: 'table',
      label: 'Таблица',
      onClick: () => scrollToSection('table')
    },
    {
      key: 'form',
      label: 'Форма',
      onClick: () => scrollToSection('form')
    }
  ];

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="header-content">
          <div className="logo-title">
            {/* ИСПРАВЛЕННЫЙ ПУТЬ */}
            <img src={kguLogo} alt="Логотип" className="logo" />
            <h1 className="site-title">Задание 4</h1>
          </div>
          
          <Menu
            className="desktop-menu"
            theme="dark"
            mode="horizontal"
            items={menuItems}
          />

          <Menu
            className="mobile-menu"
            theme="dark"
            mode="horizontal"
            items={menuItems}
          />
        </div>
      </Header>

      <Content className="content">
        <div className="sections-container">
          <div id="links" className="section links-section">
            <div className="section-content">
              <h2>Ссылки</h2>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <a href="http://kubsu.ru/">КубГУ (http)</a>
                <a href="https://kubsu.ru/">КубГУ (https)</a>
                <a href="https://kubsu.ru/">
                  {/* ИСПРАВЛЕННЫЙ ПУТЬ */}
                  <img src={imagePic} alt="Картинка" className="responsive-image" />
                </a>
                <a href="./Catalog/second-page.html">Сокращённая внутренняя</a>
                <a href="./MainPage.html">Сокращённая главная</a>
                <a href="#form">Ссылка на фрагмент текущей страницы</a>
                <a href="https://www.kubsu.ru/ru/taxonomy/term/49?page=1&perpage=10&category=post">
                  Ссылка с тремя параметрами
                </a>
                <a href="https://www.kubsu.ru/ru/taxonomy/term/49?id=#zone-footer-wrapper">
                  Ссылка с параметром id
                </a>
                <a href="./MainPage.html">относительная ссылка в текущем каталоге</a>
                <a href="./about/about.html">относительная ссылка в каталоге about</a>
                <a href="./Catalog/third-page.html">На уровень выше</a>
                <a href="./Catalog/catalog2/fourth-page.html">На два уровня выше</a>
                <p>В тексте <a href="https://kubsu.ru/">ссылка</a> внутри абзаца.</p>
                <a href="https://example.com/page#section-id">Фрагмент стороннего сайта</a>
                
                <div className="image-map">
                  <map name="kartinka">
                    <area shape="rect" coords="35,35,350,190" href="https://kubsu.ru" alt="Сайт кубгу, прямоугольник" />
                    <area shape="circle" coords="180,375,125" href="https://kubsu.ru/index.php" alt="Сайт кубгу, круг" />
                  </map>
                  {/* ИСПРАВЛЕННЫЙ ПУТЬ */}
                  <img src={kartinkaPic} useMap="#kartinka" alt="Картинка" className="map-image" />
                </div>

                <a href="">Пустой href</a>
                <a>Без href</a>
                <a href="https://kubsu.ru/" rel="nofollow">nofollow</a>
                <a href="https://kubsu.ru/noindex.html" rel="noindex">noindex</a>

                <ol>
                  <li><a href="http://kubsu.ru" title="Вот">Сайт КубГУ</a></li>
                  <li><a href="http://kubsu.ru" title="Сайт">Сайт КубГУ</a></li>
                  <li><a href="http://kubsu.ru" title="КубГУ">Сайт КубГУ</a></li>
                </ol>

                <a href="ftp://username:password@ftp.example.com/path/to/file.txt">Скачать файл</a>
              </Space>
            </div>
          </div>

          {/* Остальной код без изменений */}
          <div id="table" className="section table-section">
            <div className="section-content">
              <h2>Таблица данных</h2>
              <div className="table-container">
                <Table 
                  dataSource={tableData} 
                  columns={tableColumns} 
                  pagination={false}
                  bordered
                  size="middle"
                  scroll={{ x: true }}
                />
              </div>
            </div>
          </div>

          <div id="form" className="section form-section">
            <div className="section-content">
              <h2>Форма</h2>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="custom-form"
                validateTrigger="onBlur"
              >
                {/* Форма без изменений */}
                <Form.Item
                  label="ФИО"
                  name="fio"
                  rules={[
                    { required: true, message: 'имя фамилии пиши, давай давай' },
                    { min: 2, message: 'наормально пиши не мороси' }
                  ]}
                >
                  <Input 
                    prefix={<UserOutlined />} 
                    placeholder="Введите ФИО" 
                  />
                </Form.Item>

                <Form.Item
                  label="Телефон"
                  name="phone"
                  rules={[
                    { validator: validatePhone }
                  ]}
                >
                  <Input 
                    prefix={<PhoneOutlined />} 
                    placeholder="Введите телефон (только цифры)" 
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: 'email черкани' },
                    { type: 'email', message: 'лее правильно вводи - собака там, туда сюда' }
                  ]}
                >
                  <Input 
                    prefix={<MailOutlined />} 
                    placeholder="Введите email" 
                    type="email"
                  />
                </Form.Item>

                <Form.Item
                  label="Дата рождения"
                  name="bday"
                  rules={[{ required: true, message: 'дату выбери' }]}
                >
                  <DatePicker 
                    style={{ width: '100%' }} 
                    placeholder="Выберите дату"
                    suffixIcon={<CalendarOutlined />}
                    format="DD.MM.YYYY"
                  />
                </Form.Item>

                <Form.Item
                  label="Пол"
                  name="gender"
                  rules={[{ required: true, message: 'че бесполый что ли' }]}
                >
                  <Radio.Group>
                    <Radio value="m">Мужской</Radio>
                    <Radio value="f">Женский</Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  label="Любимый язык программирования"
                  name="langs"
                  rules={[{ required: true, message: 'выбирай любимы язык, мозга не делай' }]}
                >
                  <Select 
                    mode="multiple" 
                    placeholder="Выберите языки"
                    maxTagCount="responsive"
                  >
                    <Option value="Pascal">Pascal</Option>
                    <Option value="C">C</Option>
                    <Option value="C++">C++</Option>
                    <Option value="JavaScript">JavaScript</Option>
                    <Option value="PHP">PHP</Option>
                    <Option value="Python">Python</Option>
                    <Option value="Java">Java</Option>
                    <Option value="Haskell">Haskell</Option>
                    <Option value="Clojure">Clojure</Option>
                    <Option value="Prolog">Prolog</Option>
                    <Option value="Scala">Scala</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Биография"
                  name="bio"
                  rules={[
                    { required: true, message: 'о чебе че нибудь напиши' },
                    { min: 10, message: 'давай побольше настрочи' }
                  ]}
                >
                  <TextArea 
                    rows={4} 
                    placeholder="Расскажите о себе (минимум 10 символов)" 
                    showCount 
                    maxLength={500}
                  />
                </Form.Item>

                <Form.Item
                  name="agree"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('согласие тыкни')),
                    },
                  ]}
                >
                  <Checkbox>
                    С контрактом ознакомлен
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    block
                    size="large"
                  >
                    Сохранить
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Content>

      <Footer className="footer">
        <p>© Царенов Олег, 2025</p>
      </Footer>
    </Layout>
  );
};

export default App;