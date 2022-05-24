
import { Button } from '../components';
import { Card } from '../components/card/Card';
import { Input } from '../components/input/Input';
import { Navigation } from '../components/navigation/Navigation';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { SocialMedia } from '../components/social_media/SocialMedia';
// import LinkedIn from './icons/LinkedIn.svg';
import LinkedIn from '../icons/LinkedIn.svg';
import Twitter from '../icons/Twitter.svg';
export const HomePage = () => {
    return(
        <div>
      <Button text="Регистрация" color={"red"} />
      <Navigation text="Поиск" active={true}  />
      <Input text="не понял как изменять текст внутри инпута"/>
      <Card name="Nissan" description="new car" color="white" price={8000} phone={55555555} engineCapacity={2.0}/>
      <SocialMedia link={"https://twitter.com/?lang=ru"} img={Twitter} />
      <SocialMedia link={"https://twitter.com/?lang=ru"} img={LinkedIn} />
      <PageTitle text="НАЙТИ И СРАВНИТЬ ВЫГОДНЫЕ ПРЕДЛОЖЕНИЯ НА НАШЕМ САЙТЕ"/>
        </div>
    );
}