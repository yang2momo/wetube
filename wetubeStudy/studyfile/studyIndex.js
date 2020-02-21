// import express from "express";
// import morgan from "morgan";
// import helmet from "helmet";
// import cookieParser from "cookie-parser";
// import bodyParser from "cookie-parser";
// // var express = require('express'); // import express
// var app = express(); // app 변수를 선언해서 express를 실행

// const PORT = 4000;
// const handleListening = () => {
//     console.log(`Listing on: http://localhost:${PORT}`);
// }

// const handleProfile = (req, res) => {
//     app.get("/", handleHome);
// }
// // requdest object , response object
// // handleHome은 응답을 전송한다.
// const handleHome = (req, res) => {
//     // console.log(req);
//     res.send('Hello from home');
// }
// // 유저가 home을 요청하고 Hello from home로응답하는 사이에 두는 함수
// const betweenHome = (req, res, next) => {
//     console.log("I'm middleware");
//     next();
// };

// app.use(betweenHome); // 새로고침할때마다 중간에 이걸꼭함
// // 유저의 home(/)요청과 handleHome사이에 있다.

// app.use(morgan("dev"));
// app.use(helmet());

// const middleware = (req, res, next) => {
//     console.log('볼수없습니다.');
//     // console.log(`Listing on: http://localhost:${PORT}`);
//     app.get("/", handleHome);
//     // next();
// }

// // app.use(cookieParser());
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(middleware);
// app.get("/", handleHome); // url "/"로 시작할때
// app.get("/profile", middleware, handleProfile);

// // listenting 하기 시작할때 handleListening 함수호출
// app.listen(PORT, handleListening); // 4000번 포트를 listen 해라