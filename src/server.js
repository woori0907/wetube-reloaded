// npm과 nodejs가 express를 찾아서 불러옴
import express from "express";

// express를 불러오면 app을 만들어야함
const app = express();
const PORT = 4000;

const gossipMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send("not allowed");
    }
    else{
        next();
    }
}

/* 서버 : 항상 켜져있는 컴퓨터.
request를 listening하고 있음.
request : 접속하려는 사이트에 접속하겠다고 브라우저가 요청하는 것 ex.주소입력
listen : 요청을 받아들일 준비를 하고 있는 것.
*/

// 위에서 만든 application 설정
// get : get request가 올 경우 callback함수를 처리함.
// route handler : js의 event 처럼 res, req 인자가 있음(이름 변경 가능. 그러나 꼭 두개 다 들어가야함!)
// req : 
// res : 
const handleHome = (req, res) => {
    //return res.end(); 
    // res.end() : 서버가 request를 끝내는 것. 아까처럼 무한대기하지 않음!
    return res.send("LoveYou!");
    // res.send() : request에 응답을 보내는 것!
};

const handleLogin = (req, res) => {
    return res.send("Login!");
};

const handleProtected = (req, res) =>{
    return res.send("welcome to the private lounge");
}

// .use : 글로벌 미들웨어를 만들어줌. 내가 만든 미들웨어를 모든 라우터에서 사용할 수 있음. 반드시 순서를 지켜야함. 호출할 때는 use먼저 호출하고 get을 호출해야함. 만약 순서를 바꾸면 use함수는 실행하지 않음. 미들웨어는 글로벌로 할 수도 있고, get 함수에 인자로 주면서 한곳에서만 실행할 수 있게도 할 수 있음. 다만 미들웨어가 제대로 작동하기 위해서는 next함수를 반드시! 호출해야함. 만약 하지 않으면 일반적인 controller와 다를바 없음.
app.use(gossipMiddleware);
app.use(privateMiddleware);
// 여기서 get request를 받으면 express는 handleHome 함수로 req, res 오브젝트를 넘겨줌. addEventlistener에서 event 오브젝트를 넘겨주듯이!
app.get("/", gossipMiddleware, handleHome);/* 이 상태에서는 우리가 응답을 해주지 않았기 때문에 브라우저는 계속 기다리기만 함.*/
app.get("/login", handleLogin);
app.get('/protected', handleProtected);

// 어떤 port를 listening해야할지 정해야함. 보통 높은 숫자의 포트는 비어있는 경우가 많음.
const handlelistening = () => console.log(`Server Listening on port http://localhost:${PORT}`);

// listen 함수는 콜백함수를 필요로 함. addEventListener처럼!
app.listen(4000, handlelistening);

