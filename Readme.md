# Wetube Reloaded

# 글로벌 라우터
# 사용하는 주체에 따라서 라우터를 나누지만, 경우에 따라서 예외를 두기도 함. ex. 회원가입을 /users/join으로 하는 것보다 /join으로 하는 게 더 깔끔한 것처럼.
/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/:id -> see user profile
/users/logout -> logout
/users/edit -> edit my profile
/users/delete -> Delete my profile

/videos/:id -> Watch Video
/videos/upload -> upload video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/:id/comments -> Comment on a video
/videos/:id/comments/delete -> Delete A Comment of a Video