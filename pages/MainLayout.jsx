import React, { useRef, useState } from 'react';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { Button, Checkbox, Form, Input, Divider, Tag } from 'antd';
import bnbIcon from '../public/images/Binance-Coin-BNB-icon.png';
import { Tabs, Table, Progress, Steps, Collapse, Carousel } from 'antd';
const { Step } = Steps;
const { Panel } = Collapse;
// const { Option } = Select;
import Video from '../public/images/Screen Shot 2022-10-30 at 1.00.59 PM.png';
import bnbChart from '../public/images/Screen Shot 2022-10-30 at 12.58.02 AM.png';
//svg
import ArticleSvg from '../public/svg/article.svg';
import Octagonal from '../public/svg/Octagonal.svg';
import userRegister from '../public/svg/userRegister.svg';
import CardSvg from '../public/svg/card.svg';
import GuideSvg from '../public/svg/Guide.svg';

import {
  FaTwitter,
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiCopy } from 'react-icons/fi';
import { AiOutlineStar, AiOutlineLink } from 'react-icons/ai';
import Image from 'next/image';

const MainLayout = () => {
  const ref = useRef();
  const [activeTab, setActiveTab] = useState('buy');
  const [showText, setShowText] = useState(false);
  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#c3333',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'red',
  };

  const coinDetail = [
    { title: 'حجم بازار', price: '55,000 USDT' },
    { title: ' قیمت جهانی', price: '55,000 USDT' },
    { title: 'مارکت کپ', price: '55,000 USDT' },
    { title: 'کل رمز و ارز در گردش', price: '55,000 USDT' },
    { title: 'کل رمز و ارز در دسترس', price: '55,000 USDT' },
  ];

  const coinChanges = [
    { title: ' بالاترین قیمت هفت روزه', price: '123,500USDT' },
    { title: ' پایین ترین قیمت هفت روزه', price: '123,500USDT' },
    { title: ' سقف قیمت ATH', price: '123,500USDT' },
    { title: '   قیمت هفت روزه', price: '123,500USDT' },
    { title: ' بالاترین قیمت هفت روزه', price: '123,500USDT' },
  ];

  const WeeklyTag = [
    {
      title: 'روزانه',
      Changes: '0%',
    },
    {
      title: 'هفتگی',
      Changes: '1%',
    },
    {
      title: 'ماهانه',
      Changes: '2%',
    },
    {
      title: 'سالانه ',
      Changes: '10%',
    },
    {
      title: 'از ابتدا',
      Changes: '300%',
    },
  ];
  const columns = [
    {
      title: 'بازار',
      dataIndex: 'name ',
      key: 1,
      render: (name) => (
        <div>
          <div className="flex flex-row items-center items-center w-[100%] ">
            <AiOutlineStar className="text-gray mx-[5px]" />
            <Image src={bnbIcon} width={24} height={24} className="mx-[10px]" />
            <div className="mr-[5px]">
              <h3 className="">BNB / IRT</h3>
              <h3>بی ان بی/ تومان</h3>
              <p>{name}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'قیمت لحظه ای',
      dataIndex: 'price',
      key: 2,
      render: (price) => (
        <div>
          <p>{price}</p>
        </div>
      ),
    },
    {
      title: 'تغییر ۲۴ ساعته',
      dataIndex: 'change',
      key: 2,
      render: (change) => (
        <div className="bg-greenLight text-greenDark rounded-[6px] text-center w-[54px] px-[10px]  h-[28px] items-center py-[3px]">
          <p>{change}</p>
        </div>
      ),
    },
    {
      title: 'حجم ۲۴ ساعته',
      dataIndex: 'total',
      key: 3,
      responsive: ['md'],
    },
    {
      title: 'عملیات',
      dataIndex: 4,
      key: 4,
      render: () => (
        <Button className=" border-primary rounded-[6px] text-primary h-[40px] px-[12px] py-[6px] w-[110px] bg-transparent text-center">
          {' '}
          معامله حرفه ای
        </Button>
      ),
      responsive: ['md'],
    },
  ];
  const coinOrderItem = [
    {
      key: 1,
      starIcon: AiOutlineStar,
      name: 'بایننس کوین',
      titleEn: 'BNB',
      Thether: 'USDT',
      Rial: 'IRT',
      price: '1,555,000,000',
      total: '1,555,000,000',

      RialFa: ' تومان',
      TheterFa: ' تتر',
      change: '54%',
      img: bnbIcon,
    },
    {
      key: 2,
      starIcon: AiOutlineStar,
      name: 'بایننس کوین',
      titleEn: 'BNB',
      Thether: 'USDT',
      Rial: 'IRT',
      price: '1,555,000,000',
      total: '1,555,000,000',

      RialFa: ' تومان',
      TheterFa: ' تتر',
      change: '54%',
      img: bnbIcon,
    },
  ];

  const socialIcon = [
    { id: 1, src: FaTelegram, href: '/telegram' },
    { id: 2, src: FaTwitter, href: '/telegram' },
    { id: 3, src: FaFacebook, href: '/telegram' },
    { id: 4, src: FaWhatsapp, href: '/telegram' },
  ];
  const coins = [
    {
      id: 1,
      name: 'بایننس کوین',
      price: '1,555,00,000 IRT',
      tage: '10.34%',
      img: bnbIcon,
    },
    {
      id: 2,
      name: 'بایننس کوین',
      price: '1,555,00,000 IRT',
      tage: '10.34%',
      img: bnbIcon,
    },
    {
      id: 3,
      name: 'بایننس کوین',
      price: '1,555,00,000 IRT',
      tage: '10.34%',
      img: bnbIcon,
    },
    {
      id: 4,
      name: 'بایننس کوین',
      price: '1,555,00,000 IRT',
      tage: '10.34%',
      img: bnbIcon,
    },
    {
      id: 5,
      name: 'بایننس کوین',
      price: '1,555,00,000 IRT',
      tage: '10.34%',
      img: bnbIcon,
    },
    {
      id: 6,
      name: 'بایننس کوین',
      price: '1,555,00,000 IRT',
      tage: '10.34%',
      img: bnbIcon,
    },
    {
      id: 7,
      name: 'بایننس کوین',
      price: '1,555,00,000 IRT',
      tage: '10.34%',
      img: bnbIcon,
    },
    {
      id: 8,
      name: 'بایننس کوین',
      price: '1,555,00,000 IRT',
      tage: '10.34%',
      img: bnbIcon,
    },
  ];

  return (
    <section className="2xl:container md:container my-[140-px] text-black py-[70px] rtl ">
      <div className=" grid grid-cols-1 md:grid-cols-12  grid-rows-12 md:gap-[30px]  gap-[8px]">
        {/* BreedCrumbLinks SideBar */}
        {/* <section className="">
            {' '}
            <Breadcrumb>
              <Breadcrumb.Item>
                {' '}
                <Link href="/">همه رمز و ارز ها</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link href="/">بایننس کوین</Link>
              </Breadcrumb.Item>
            </Breadcrumb>{' '}
          </section> */}
        <section className="md:col-span-3 row-start-4 md:row-start-1 md:self-start col-start-1 bg-white md:rounded-lg">
          {' '}
          <Tabs
            className="w-100 "
            defaultActiveKey="buy
            "
            onChange={(key) => {
              setActiveTab(key);
              console.log(key);
            }}
          >
            <Tabs.TabPane tab="خرید" key="buy">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                // onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                >
                  <h2 className="mb-[10px]">فروش رمز ارز</h2>
                  <Input
                    // prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="مقدار پرداختی"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <h2 className="mb-[10px]">برای دریافت</h2>
                  <Input suffix={'BNB'} placeholder="مقدار دریافتی" />
                </Form.Item>

                <Form.Item name="button">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    خرید بایننس کوین{' '}
                  </Button>
                </Form.Item>
              </Form>{' '}
            </Tabs.TabPane>
            <Tabs.TabPane tab="فروش " key="sell ">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                // onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                >
                  <h2 className="mb-[10px]">فروش رمز ارز</h2>
                  <Input
                    // prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="مقدار پرداختی"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <h2 className="mb-[10px]">برای دریافت</h2>
                  <Input suffix={'BNB'} placeholder="مقدار دریافتی" />
                </Form.Item>

                <Form.Item name="button">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    فروش بایننس کوین
                  </Button>
                </Form.Item>
              </Form>
            </Tabs.TabPane>
          </Tabs>{' '}
        </section>
        <section className="md:col-span-3 col-start-1 md:row-start-2 bg-white md:rounded-xl hidden md:flex flex-col leading-[28px]	p-[24px] gap-[24px] items-end ">
          {' '}
          <h2 className="font-normal	text-[16px] "> بازارهای معاملاتی</h2>
          <div className="max-h-[400px] overflow-auto ">
            <div className="flex px-5">
              <div>
                {coins.map((items) => {
                  return (
                    <div className="flex items-center ">
                      <div>
                        {' '}
                        <p className="text-[14px] text-end font-light ">
                          {items.name} /{' '}
                          <span className="text-gray">تومان</span>
                        </p>
                        <p className="text-end font-light	">{items.price}</p>
                      </div>

                      <div className="ml-[8px]">
                        <Image
                          src={items.img}
                          width={24}
                          height={24}
                          alt="logo"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>{' '}
        </section>
        <section className="md:col-span-3 col-start-1  text-gray5 flex justify-center invisible md:visible">
          <FiCopy className="w-[27.76px] h-[27.76px]  p-[6px] t-[0] l-[0] mr-[10px] cursor-pointer text-[#3333]	" />
          {socialIcon.map((iconItem) => {
            return (
              <Link href={iconItem.href}>
                <iconItem.src className="w-[27.76px] h-[27.76px] bg-gray rounded-[50%] p-[6px] t-[0] l-[0] mr-[10px] cursor-pointer	" />
              </Link>
            );
          })}
        </section>
        <section className=" md:col-start-4 md:col-span-9 md:row-start-1 md:bg-white   md:row-span-2   md:rounded-lg md:shadow-xl  ">
          <div className="flex flex-col justify-between h-[100%] ">
            <div className="md:p-[25px]">
              <div className=" justify-between hidden md:flex">
                <div className="flex flex-row items-center text-primary  ">
                  <AiOutlineLink className="mr-[5px]" />
                  <Link href="/">منابع</Link>
                </div>
                <div>
                  <Tag className="text-[#7777]" color="#F7F7F7">
                    ان اف تی
                  </Tag>
                  <Tag className="text-[#7777]" color="#F7F7F7">
                    متاورس
                  </Tag>
                  <Tag className="text-[#CB9633]" color="#FEE59B">
                    رتبه ۱۲
                  </Tag>
                </div>
              </div>
              <div className="grid grid-cols-1 grid-rows-1 gap-y-[8px] md:grid-cols-10 md:py-[37px]">
                <div className="col-span-4 w-[100%] order-2  md:order-none bg-white md:m-[0] m-auto">
                  <Image
                    src={bnbChart}
                    height={425}
                    width="100%"
                    className="m-auto"
                  />
                  <div className="flex my-[24px] w-[100%] justify-between">
                    {WeeklyTag.map((i) => {
                      return (
                        <div className="flex flex-col items-center w-100% h-[47px] justify-between   gap-[10px]">
                          <Tag
                            className="text-black h-[24px] w-[59px] text-[#7777]"
                            color="#F7F7F7"
                          >
                            {i.title}{' '}
                          </Tag>
                          <p className="text-primary">{i.Changes}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-span-6 order-1 md:order-none bg-white pl-[24px]">
                  <div className="flex flex-col justify-between h-[100%]">
                    <div className="flex w-[100%] flex-col h-[300px] md:h-[70px] justify-between p-[14px] items-end  md:p-[0] md:flex-row-reverse ">
                      <div className="flex flex-row-reverse items-center justify-between items-center w-[100%] ">
                        <div className="flex flex-row-reverse">
                          <Image
                            src={bnbIcon}
                            className="ml-[10px] w-[28px] h-[28px]  md:w-[60px] md:h-[60px]"
                          />
                          <div className="mr-[5px]">
                            <h1 className="text-[24px] font-bold">
                              بایننس کوین
                            </h1>
                            <div className="flex flex-row-reverse my-[4px]">
                              <h3 className="mx-[6px] text-gray">BNB</h3>
                              <Tag className="hidden md:inline-block bg-greenLight text-[#00CC66]">
                                10.4%
                              </Tag>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row md:hidden">
                          <FiCopy className="w-[27.76px] h-[27.76px]  p-[6px] t-[0] l-[0] mr-[10px] cursor-pointer text-[#3333]	" />
                          {socialIcon.map((iconItem) => {
                            return (
                              <Link href={iconItem.href}>
                                <iconItem.src className="w-[27.76px] h-[27.76px] bg-gray rounded-[50%] p-[6px] t-[0] l-[0] mr-[10px] cursor-pointer	" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex md:hidden">
                        <Tag className="text-[#7777]" color="#F7F7F7">
                          ان اف تی
                        </Tag>
                        <Tag className="text-[#7777]" color="#F7F7F7">
                          متاورس
                        </Tag>
                        <Tag className="text-[#CB9633]" color="#FEE59B">
                          رتبه ۱۲
                        </Tag>
                      </div>

                      <div className="flex flex-col justify-center items-end w-[100%]">
                        <h3 className="text-gray  text-[14px]">قیمت لحظه ای</h3>
                        <div className="w-[100%] flex flex-row-reverse justify-between">
                          <h2 className="text-[20px]">
                            <span className="text-gray mx-[2px] ">تومان</span>
                            1,555,555,000
                          </h2>
                          <Tag className="block p-[4px] md:hidden bg-greenLight text-[#00CC66]">
                            10.4%
                          </Tag>
                        </div>
                        <p className="text-gray text-[18px]">55,000تتر</p>
                      </div>
                    </div>
                    <div className="flex-col my-[35px] md:my-[70px] flex">
                      <Progress
                        percent={70}
                        strokeColor="#00CC66"
                        showInfo={false}
                      />
                      <div className="flex felx-row justify-between">
                        <div className="flex items-center flex-col">
                          <p className="text-gray text-[12px]">
                            پایین ترین قیمت ۲۴ ساعت
                          </p>
                          <h3>1,555,000,000 USDT</h3>
                        </div>
                        <div className="flex items-center flex-col">
                          <p className="text-gray text-[12px]">
                            بالاترین ترین قیمت ۲۴ ساعت
                          </p>
                          <h3>1,555,000,000 USDT</h3>
                        </div>
                      </div>
                    </div>
                    <div className=" flex-row flex-wrap justify-end	 md:flex hidden h-[144px] ">
                      {coinDetail.map((i) => {
                        return (
                          <div className="flex flex-col w-[150px] items-end h-[51px] border-solid  border-l-[1px]  border-[#c7c7c7] mr-[10px] my-[5px]">
                            <p className="text-gray"> {i.title} </p>
                            <h2>{i.price}</h2>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:bg-[#EFEFF0] bg-[#fff]  w-[100%] flex flex-col mt-[8px] md:mt-[0] md:flex-row items-center justify-between p-[15px]">
              {coinChanges.map((i) => {
                return (
                  <div className="flex flex-row justify-between md:flex-col w-[100%] md:w-[150px]  items-end h-[51px] md:border-solid  md:border-l-[1px]  md:border-[#c7c7c7] mr-[10px] my-[10px]">
                    <p className="text-gray text-[12px]"> {i.title} </p>
                    <h2>{i.price}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className=" md:col-start-4 md:col-span-9 bg-white  md:rounded-lg   p-[24px]">
          <Table
            columns={columns}
            dataSource={coinOrderItem}
            pagination={false}
          />
        </section>
        <section className="md:col-start-4 md:col-span-9 md:rounded-lg">
          <Image src={Video} />
        </section>
        <section className=" md:col-start-4 md:col-span-9 md:rounded-lg p-[14px] ">
          <Steps labelPlacement="vertical">
            <Step
              title={
                <div>
                  <Image src={userRegister} />
                  <h3 className="text-[18px] my-[20px]">
                    {' '}
                    ثبت نام و احراز هویت{' '}
                  </h3>
                </div>
              }
              icon={
                <div className="relative text-center">
                  <Image src={Octagonal} width={24} height={24} />
                  <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-[16px] ">
                    1
                  </p>
                </div>
              }
              description={
                <div>
                  <p>
                    ابتدا در بیتالین ثبت‌نام کنید و سپس با تکمیل احراز هویت
                    خودتان در کمتر از 5 دقیقه وارد دنیای رمزارز شوید.
                  </p>
                </div>
              }
            />
            <Step
              icon={
                <div className="relative text-center">
                  <Image src={Octagonal} width={24} height={24} />
                  <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-[16px] ">
                    2
                  </p>
                </div>
              }
              title={
                <div>
                  <Image src={CardSvg} />
                  <h3 className="text-[18px] my-[20px]">
                    {' '}
                    واریز تومان با کارت بانکی{' '}
                  </h3>
                </div>
              }
              description={
                <div>
                  <p>
                    کارت بانکی خود را در بیتالین ثبت کنید و از طریق درگاه پرداخت
                    امن، حساب خود را شارژ کنید.
                  </p>
                </div>
              }
            />

            <Step
              icon={
                <div className="relative text-center">
                  <Image src={Octagonal} width={24} height={24} />
                  <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-[16px] ">
                    3
                  </p>
                </div>
              }
              title={
                <div>
                  <Image src={GuideSvg} />
                  <h3 className="text-[18px] my-[20px]">
                    {' '}
                    سرمایه‌گذاری در رمزارزها{' '}
                  </h3>
                </div>
              }
              description={
                <div>
                  <p>
                    {' '}
                    بیت‌کوین یا سایر رمزارز موردنظر خود را به سرعت و آسانی خرید
                    و فروش کنید.
                  </p>
                </div>
              }
            />
          </Steps>
        </section>
        <section className="md:col-start-4 hidden md:block md:col-span-9 relative bg-white  md:rounded-lg">
          <div
            className={`p-[24px] overflow-hidden transition-[max-height] duration-[500ms]	 ${
              showText ? 'max-h-[1530px]' : 'max-h-[130px] '
            }`}
          >
            <h1>بایننس کوین چیست ؟</h1>
            <p className="my-[20px]">
              {' '}
              بایننس کوین یک ارز دیجیتال رمز نگاری شده در بستر بلاک چین است که
              در ژانویه ۲۰۰۹ و پس از سقوط بازار مسکن ایجاد شد. خالق این رمز ارز
              ساتوشی ناکاموتو است. هنوز مشخص نیست این نام متعلق به چه فرد یا
              سازمانی است. یکی از مهم‌ترین ویژگی‌های این ارز رمزپایه محبوب، غیر
              متمرکز بودن آن است. در این شبکه تمام داده‌ها بر بستر بلاک چین
              نگه‌داری می‌شود و هیچ نفر سومی به‌عنوان واسطه وارد معامله‌های این
              شبکه نمی‌شود. تاریخچه تمام تراکنش‌ها برای همیشه در بلاک چین ثبت
              می‌شود و هرگز قابل تغییر و حذف نیست؛ همین ویژگی از مزیت‌های بلاک
              چین است چرا که از هر گونه تقلب و کلاهبرداری جلوگیری می‌کند.
            </p>
          </div>
          <div
            className={`flex justify-center items-end ${
              showText
                ? 'bg-transparent '
                : 'absolute top-[52px] left-0 right-0 z-[99] h-[100px] bg-gradient-to-t from-white to transparent '
            }`}
          ></div>
          <div className="w-100 mt-[20px]  flex justify-center  items-start h-[50px]">
            <button
              className="text-[14px] text-primary"
              onClick={() => {
                setShowText(!showText);
                console.log(showText);
              }}
            >
              بیشتر
            </button>
          </div>
        </section>
        <section className="md:col-start-4 md:col-span-9 gap-[10px] bg-white p-[24px]  md:hidden block  ">
          <div className="flex flex-col">
            <div className="flex flex-col items-end h-[100%] ">
              <div className="flex flex-row-reverse  justify-between w-[100%]">
                <p className="text-gray">معرفی</p>
                <Link legacyBehavior className="text-primary" href="/">
                  <div className="flex flex-row-reverse items-center cursor-pointer text-primary	">
                    بیشتر
                    <GrFormPrevious className="text-primary" />
                  </div>
                </Link>
              </div>
              <h2 className="text-[16px] font-bold mt-[24px] mb-[4px] leading-[24px]">
                تتر چیست ؟
              </h2>
              <p className="font-[300]">
                ...تتر یک ارز دیجیتال رمز نگاری شده در بستر بلاک چین است
              </p>
            </div>
            <div className="flex flex-row-reverse items-center mt-[23px] ">
              <GrFormNext
                onClick={() => {
                  ref.current.next();
                }}
              />
              <div className=" w-[50%] ">
                <Carousel
                  ref={ref}
                  autoplay
                  slidesToShow={3}
                  dotPosition="bottom"
                  pauseOnHover={true}
                  dots={false}
                  draggable
                >
                  <div>
                    <Tag
                      className="text-[#CB9633] border-[1px] border-[#CB9633]"
                      color="#FEE59B"
                    >
                      وایت پیپر{' '}
                    </Tag>
                  </div>
                  <div>
                    <Tag
                      className="text-[#CB9633] border-[1px] border-[#CB9633]"
                      color="#FEE59B"
                    >
                      نمودار قیمت
                    </Tag>
                  </div>
                  <div>
                    <Tag
                      className="text-[#CB9633] border-[1px] border-[#CB9633]"
                      color="#FEE59B"
                    >
                      وب سایت رسمی
                    </Tag>
                  </div>
                  <div>
                    <Tag
                      className="text-[#CB9633] border-[1px] border-[#CB9633] ml-[5px]"
                      color="#FEE59B"
                    >
                      صفحه اصلی
                    </Tag>
                  </div>
                </Carousel>
              </div>
              <GrFormPrevious
                onClick={() => {
                  ref.current.next();
                }}
              />
            </div>
          </div>
        </section>
        <section className="md:col-start-4 md:col-span-9  bg-white md:rounded-lg">
          <div className="flex flex-col py-[32px] px-[24px]">
            <div className="mb-[48px]  text-end ">
               <h1 className="font-bold text-[20px]	">سوالات متداول</h1>
            </div>
            <Collapse>
              <Panel header="مزایای بیتالین نسبت به رقبا چیست؟" key="1">
                <p>hello</p>
              </Panel>
              <Panel header="درصد سود بیتالین به چه صورت است؟" key="2">
                <p>hello</p>
              </Panel>
              <Panel
                header="چرا می بایست اطلاعات شخصی خود را برای خرید و فروش ارزهای دیجیتال ارائه دهم؟"
                key="3"
              >
                <p>hello</p>
              </Panel>
              <Panel
                header="چگونه از حساب ارزهای دیجیتال خود برداشت کنیم؟"
                key="4"
              >
                <p>hello</p>
              </Panel>
              <Panel header="چرا به بیتالین اعتماد کنیم؟" key="5">
                <p>hello</p>
              </Panel>
              <Panel header="احراز هویت در بیتالین چگونه است؟" key="6">
                <p>hello</p>
              </Panel>
            </Collapse>
          </div>
        </section>
        <section className="md:col-start-4 md:col-span-9">
          <div className="flex flex-col p-[24px] items-end">
            <h1 className="text-[20px] font-bold mb-[15px]">مقالات مرتبط</h1>
            <div className="flex flex-row-reverse my-[30px]">
              <div className="ml-[10px]">
                <Image
                  src={ArticleSvg}
                  alt="article"
                  width={31.73}
                  height={32}
                />
              </div>
              <h3 className="text-[16px]">مزایای بیتالین نسبت به رقبا چیست؟</h3>
            </div>
            <div className="flex flex-row-reverse my-[30px]">
              <div className="ml-[20px]">
                <Image
                  src={ArticleSvg}
                  alt="article"
                  width={31.73}
                  height={32}
                />
              </div>
              <h3 className="text-[16px]">
                چگونه با پیاده روی کردن کسب درآمد کنیم؟ آموزش بازی رایگان لایف
                کوین{' '}
              </h3>
            </div>
            <div className="flex flex-row-reverse my-[30px]">
              <div className="ml-[20px]">
                <Image
                  src={ArticleSvg}
                  alt="article"
                  width={31.73}
                  height={32}
                />
              </div>
              <h3 className="text-[16px]">
                {' '}
                چگونه با پیاده روی کردن کسب درآمد کنیم؟ آموزش بازی رایگان لایف
                کوین{' '}
              </h3>
            </div>
          </div>
        </section>
      </div>
      <style jsx global>
        {`
    
          .ant-tabs-rtl .ant-tabs-nav .ant-tabs-tab {
            margin: 0px 0 0 0px;
          }
          .ant-tabs-ink-bar {
            width: 137px !important;
          }

          bottom > .ant-tabs-nav::before,
          .ant-tabs-top > div > .ant-tabs-nav::before,
          .ant-tabs-bottom > div > .ant-tabs-nav::before {
            wodth: 100%;
          }
          .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list,
          .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
            position: relative;
            display: flex;
            width: 100%;
            transition: transform 0.3s;
            justify-content: space-around;
          }

          .ant-tabs {
            box-sizing: border-box;
            margin: 0;
            color: rgba(0, 0, 0, 0.85);
            font-size: 14px;
            font-variant: tabular-nums;
            line-height: 1.5715;
            list-style: none;
            font-feature-settings: 'tnum';
            display: flex;
            padding: 0px 16px 24px 16px;
          }

          .ant-tabs-top > .ant-tabs-nav::before,
          .ant-tabs-bottom > .ant-tabs-nav::before,
          .ant-tabs-top > div > .ant-tabs-nav::before,
          .ant-tabs-bottom > div > .ant-tabs-nav::before {
            position: absolute;
            right: 0;
            left: 0;
            border-bottom: 1px solid #cfcfcf;
            content: '';
          }
          .ant-tabs-top > .ant-tabs-nav, .ant-tabs-bottom > .ant-tabs-nav, .ant-tabs-top > div > .ant-tabs-nav, .ant-tabs-bottom > div > .ant-tabs-nav {
    margin: 0 0 0px 0;
}

          .ant-tabs-tab {
            width: 137px;
            position: relative;
            display: inline-flex;
            align-items: center;
            padding: 12px 0;
            font-size: 14px;
            background: transparent;
            border: 0;
            outline: none;
            cursor: pointer;
            justify-content: center;
          }

          .ant-tabs-ink-bar {
            position: absolute;
            background: #fecb38;
            pointer-events: none;
            width:50%!important;
          }

          .ant-tabs > .ant-tabs-nav,
          .ant-tabs > div > .ant-tabs-nav {
            position: relative;
            color: #999999;
            display: flex;
            flex: none;
            align-items: center;
          }

          .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
            color: #151515;
            text-shadow: 0 0 0.25px currentcolor;
            font-size: 14px;
          }

          //form styles

          .ant-input-affix-wrapper > input.ant-input {
            font-size: large;
          }

          .ant-btn-primary {
            color: #fff;
            border-color: transparent
            width: 100%;
            background-color: ${activeTab === 'buy' ? '#00CC66' : '#F6465D'};
            text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
            box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
            padding: 5px 10px;
            border-radius: 6px;
            gap: 10px;
            width: 100%;
            height: 40px;
          }
          .ant-input {
            box-sizing: border-box;
            margin: 0;
            padding: 0;

            font-variant: tabular-nums;
            list-style: none;
            font-feature-settings: 'tnum';
            position: relative;
            display: inline-block;
            width: 100%;
            min-width: 0;
            padding: 4px 11px;
            color: rgba(0, 0, 0, 0.85);
            font-size: 18px;
            line-height: 1.5715;
            background-color: #f7f7f7;
            background-image: none;
            border: 1px solid #d9d9d9;
            border-radius: 2px;
            transition: all 0.3s;
          }
          .ant-form {
            box-sizing: border-box;
            margin: 32px 0;
            padding: 0;
            color: rgba(0, 0, 0, 0.85);
            font-size: 16px;

            font-variant: tabular-nums;
            line-height: 28px;
            list-style: none;
            font-feature-settings: 'tnum';
          }

          .ant-input-affix-wrapper {
            position: relative;
            display: inline-block;
            width: 100%;
            min-width: 0;
            padding: 4px 11px;
            color: rgba(0, 0, 0, 0.85);
            font-size: 14px;
            line-height: 1.5715;
            background-color: #f7f7f7;
            background-image: none;
            border: 1px solid #d9d9d9;
            border-radius: 2px;
            transition: all 0.3s;
            display: inline-flex;
          }
          .ant-input-prefix,
          .ant-input-suffix {
            display: flex;
            flex: none;
            align-items: center;
            font-weight: 700;
            font-size: 14px;
            color: #999999;
          }
          //Collapse
          .ant-collapse > .ant-collapse-item > .ant-collapse-header {
            padding:16px 24px;
            font-size:16px;
            gap:8px
          }
          
          .ant-collapse{
            background:transparent;
            border:none
          }
          .ant-collapse > .ant-collapse-item{
            border:none
          }
          //Steps 
          .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-tail::after {
            background-color: #ffffff;
    width: 100%;
    height: 4px;
    border-radius: 20px;          }
          .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-tail::after {
    background-color: #ffffff;
    width: 100%;
    height: 4px;
    border-radius: 20px;
}
.ant-steps-label-vertical .ant-steps-item-tail {
    margin-left: 58px;
    padding: 0.5px 0px;
}
.ant-steps-label-vertical .ant-steps-item-content {
   
    text-align: right !important;
}


.ant-steps-label-vertical .ant-steps-item-content {
    display: block;
    width: 224px !important;
    margin-top: 8px;
    text-align: center;
    line-height: 28px;

}

.ant-tag.ant-tag-rtl {

    text-align: center;
}

.ant-collapse > .ant-collapse-item > .ant-collapse-header {
  flex-direction:row-reverse
}

`}
      </style>
    </section>
  );
};

export default MainLayout;
