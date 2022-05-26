
import { Button } from '../components';
import { Card } from '../components/card/Card';
import { Input } from '../components/input/Input';
import { Navigation } from '../components/navigation/Navigation';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { SocialMedia } from '../components/social_media/SocialMedia';
import { InputSelect } from '../components/InputSelect/InputSelect';
import LinkedIn from '../icons/LinkedIn.svg';
import Twitter from '../icons/Twitter.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [phone, setPhone] = useState('');

  const changePhone = (value: string) => {
    setPhone(value);
  }

  return (
    <div>
      <Button text="Регистрация" color={"red"} onClick={() => setPhone('o====3') } />
      <Navigation text="Поиск" active={true} />
      <Input placeholder="year" value={phone} onChange={changePhone} />
      <Link to='/card/1'><Card name="Nissan" year={2012} description="new car" color="white" price={8000} phone={55555555} engineCapacity={2.0} /></Link>
      <SocialMedia link={"https://twitter.com/?lang=ru"} img={Twitter} />
      <SocialMedia link={"https://twitter.com/?lang=ru"} img={LinkedIn} />
      <PageTitle text="НАЙТИ И СРАВНИТЬ ВЫГОДНЫЕ ПРЕДЛОЖЕНИЯ НА НАШЕМ САЙТЕ" />
      <InputSelect select={true} avatar="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3" />
    </div>
  );
}