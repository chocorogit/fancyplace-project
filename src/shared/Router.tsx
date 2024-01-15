import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../page/Layout';
import Mainpage from '../page/Mainpage';
import Authpage from '../page/Authpage';
import ProductDetailpage from '../page/ProductDetailpage';
import GoodsList from '../page/GoodsList';
import Chat from 'page/Chat';
import Detail from 'page/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Authpage />} />
          <Route path="*" element={<ProductDetailpage />} />
          <Route path="/GoodsList" element={<GoodsList />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
