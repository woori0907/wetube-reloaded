import express from "express";
import {upload, see, edit, deleteVideo} from "../controllers/videoController";

const videoRouter = express.Router();

// URL 파라미터 : ': + 문자열' => 이 안에 원하는 변수를 넣을 수 있음. ex. 영상별 id
// url 파라미터를 사용하는 경우 이를 사용하지 않는 라우터를 가장 상위에 둬야함. 왜냐면 express는 위에서부터 순차적으로 해석하는데, 파라미터에는 upload같은 키워드도 변수로 볼 수 있기 때문에 두번째에 있는 upload라는 페이지까지 들어가지도 않고 id로 인식함. 이를 해결하기 위해서는 숫자만 id로 인식하도록 예외처리를 해야함! -> 정규식을 이용해서!
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/upload", upload);

videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);



export default videoRouter;