// npm과 nodejs가 express를 찾아서 불러옴
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";


// express를 불러오면 app을 만들어야함
const app = express();
const PORT = 4000;
const logger = morgan("dev");

//글로벌 미들웨어 : 항상 get함수 전에 호출할 것
app.use(logger);

//라우터 : 여기서 라우터 관리. 
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

// 서버는 항상 돌아가는 컴퓨터. 켜지는 순간부터 listen하며 대기중
const handlelistening = () => console.log(`Server Listening on port http://localhost:${PORT}`);

app.listen(PORT, handlelistening);

