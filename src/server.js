// npm과 nodejs가 express를 찾아서 불러옴
import express from "express";

// express를 불러오면 app을 만들어야함
const app = express();
const PORT = 4000;

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
// 여기서 get request를 받으면 express는 handleHome 함수로 req, res 오브젝트를 넘겨줌. addEventlistener에서 event 오브젝트를 넘겨주듯이!
app.get("/", handleHome);/* 이 상태에서는 우리가 응답을 해주지 않았기 때문에 브라우저는 계속 기다리기만 함.*/
app.get("/login", handleLogin);


// 어떤 port를 listening해야할지 정해야함. 보통 높은 숫자의 포트는 비어있는 경우가 많음.
const handlelistening = () => console.log(`Server Listening on port http://localhost:${PORT}`);

// listen 함수는 콜백함수를 필요로 함. addEventListener처럼!
app.listen(4000, handlelistening);

