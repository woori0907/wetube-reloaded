import express from "express";
import {join} from "../controllers/userController";
import {trending} from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

//각각의 파일은 독립된 모듈임. 만약 이곳에 있는 내용을 사용하려면 export해야함.
// export와 export default는 차이가 있음
// export : 하나의 파일에서 여러개의 변수를 export 할 수 있음. 다만 import하는 쪽에서는 오브젝트 형태로 불러올 수 있으며, export 하는 쪽에서 사용한 변수명 그대로 사용해야함. 변경하면 에러 뜸.
// export default : 파일당 하나의 변수를 export할 수 있음. 파일당 하나이기 때문에 import할 때 내가 원하는 이름으로 설정할 수 있음.
export default globalRouter;