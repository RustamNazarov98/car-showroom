import React from 'react';
import {
    Footer,
    Header,
    HotList,
    Navbar,
    SearchBlock
} from "../components";

const HomePage = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <SearchBlock/>
      <HotList/>
      <Footer/>
    </>
  );
}
export default HomePage
