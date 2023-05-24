import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

function App(){
  return(
    <BrowserRouter>
      <Link to="/">Home Page</Link><br/>

      <Link to="/products/1">product1</Link><br/>
      <Link to="/products/2">product2</Link><br/>
      <Link to="/products/3">product3</Link><br/>

      <Link to="/products/1/notice">product1 notice</Link><br/>
      <Link to="/products/2/notice">product2 notice</Link><br/>
      <Link to="/products/3/notice">product3 notice</Link><br/>

      <Link to="/users">users</Link><br/>
      <Link to="/users/coupon">쿠폰</Link><br/>
      <Link to="users/question">질문</Link><br/>
      <Link to="users/notice">도움말</Link><br/>

      <Routes>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/products/:id/notice" element={<ProductNotice/>}/>
        <Route path="/users/*" element={<Outlet/>}>
          <Route path="" element={<Users/>}/>
          <Route path="coupon/" element={<Coupon/>}/>
          <Route path="question/" element={<Question/>}/>
          <Route path="notice/" element={<Notice/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Product(){
  return <h1>hello product</h1>
}

function ProductNotice(){
  return <h1>Hello product notice!</h1>
}

function Users(){
  return <h1>안녕하세요 사용자님!</h1>
}

function Coupon(){
  return <h1>쿠폰 사용</h1>
}

function Question(){
  return <h1>질문이 무엇입니까?</h1>
}

function Notice(){
  return <h1>도움말이 무엇입니까?</h1>
}

export default App;