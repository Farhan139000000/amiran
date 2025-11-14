
import React from 'react';
import { InfoCard } from './components/InfoCard';
import { CopyableField } from './components/CopyableField';
import { WelcomeIcon, ListIcon, PriceIcon, PaymentIcon, WarningIcon, QuestionIcon } from './components/Icons';

const App: React.FC = () => {
  const products = [
    "شمش یلدا", "شمش منشور سازمان ملل", "شمش ملکه گلها", "شمش تولد",
    "شمش پروانه", "شمش کوروش", "شمش گل رز", "شمش گل‌های داوودی",
    "شمش فروهر", "شمش پاسارگاد", "شمش فرشته", "شمش حافظیه",
    "شمش آزادی", "شمش نفیس شادی", "کارت فرکانس گل و بلبل", "کارت فرکانس پرنیا",
    "کارت فرکانس آناهیتا", "وان یکاد", "کارت طلایی ونوس",
    "کارت طلایی شمش طلا بوعلی سینا", "کارت طلایی شمش طلا ویژه کودکان",
    "شمش مادر", "شمش استاد شجریان", "شمش حرم امام حسین", "تمبر نقره استاد شهریار"
  ];

  return (
    <div className="bg-slate-100 min-h-screen font-[Vazirmatn,sans-serif] text-slate-800 p-4 sm:p-6 md:p-8">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');
        `}
      </style>
      <main className="max-w-3xl mx-auto flex flex-col gap-8">
        {/* Section 1: Title */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-800">فروشگاه امیران</h1>
          <p className="text-lg md:text-xl text-slate-600 mt-2">راهنمای خرید و پرداخت</p>
        </header>

        {/* Section 2: Welcome */}
        <InfoCard title="به فروشگاه امیران خوش آمدید!" icon={<WelcomeIcon />} color="blue">
          <p className="text-slate-600 leading-relaxed">
            باعث افتخار ماست که فروشگاه امیران را برای خرید انتخاب کرده‌اید. ما آماده ارائه بهترین خدمات به شما هستیم.
          </p>
        </InfoCard>

        {/* Section 3: Product List */}
        <InfoCard title="لیست محصولات" icon={<ListIcon />} color="purple">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 pr-4">
            {products.map((product, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-purple-500">◆</span>
                <a
                  href="https://www.shemshetala.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-purple-700 hover:underline transition-colors"
                >
                  {product}
                </a>
              </li>
            ))}
          </ul>
        </InfoCard>
        
        {/* Section 4: Price Inquiry */}
        <InfoCard title="استعلام قیمت" icon={<PriceIcon />} color="green">
          <p className="text-slate-600 mb-4">
            برای مشاهده قیمت لحظه‌ای هر یک از محصولات، لطفاً روی لینک زیر کلیک کنید:
          </p>
          <a
            href="https://www.shemshetala.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto text-center bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-md"
          >
            مشاهده قیمت‌ها
          </a>
        </InfoCard>
        
        {/* Section 5: Payment Method */}
        <InfoCard title="نحوه پرداخت" icon={<PaymentIcon />} color="indigo">
            <p className="text-slate-600 mb-4">
              پرداخت در حال حاضر فقط از طریق کارت به کارت امکان‌پذیر است.
            </p>
            
            <CopyableField
              label="شماره کارت جهت واریز:"
              value="6037997335523842"
            />
            
            <p className="text-slate-600 my-4">
             پس از پرداخت، لطفاً تصویر رسید را در پیام‌رسان 'بله' به شماره زیر ارسال فرمایید:
            </p>

            <CopyableField
              label="شماره تماس در 'بله':"
              value="09129212452"
            />
            
            <div className="mt-6 flex items-start p-4 rounded-lg bg-yellow-50 border-r-4 border-yellow-400">
                <div className="flex-shrink-0 text-yellow-500">
                    <WarningIcon />
                </div>
                <div className="mr-3">
                    <p className="text-sm font-bold text-yellow-800">نکته مهم</p>
                    <p className="text-sm text-yellow-700">
                      هنگام ارسال رسید، حتماً نام محصول خریداری شده را نیز ذکر کنید.
                    </p>
                </div>
            </div>
        </InfoCard>

        {/* Final Section */}
        <footer className="text-center mt-4">
            <div className="inline-flex items-center gap-2 text-slate-600 bg-white p-4 rounded-lg shadow-sm">
                <QuestionIcon />
                <p>آیا مایل به استعلام قیمت محصول خاصی هستید یا توضیحات بیشتری نیاز دارید؟</p>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
