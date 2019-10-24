# 오청당 (OCD)

오청당은 오늘 청소 당번의 줄임말로 군장병들을 위해 청소구역을 자동으로 정해주는 간단한 웹어플리케이션입니다. 

## 실행
    cd ocd
    npm install
    npm run serve

## 기능 설계
메인화면정의서: https://balsamiq.cloud/simtj4u/pmgeypi
설계 PPT: 


## 기능 설명
설명 PPT: 

## 어플리케이션 플로우
![enter image description here](https://lh3.googleusercontent.com/HqIskIxd3aN3-a1ymvJXaZ8O6gNiCdZFeSCAYGm_q8Bw-NDxcZIZFDi5RPj2VOwdYViqVBGAV0XJ "로그인")
처음 오청당 어플리케이션을 열면 로그인 페이지가 로드됩니다. 
![
](https://lh3.googleusercontent.com/zBei8ifiN_13awJiuOKwhmjE0dAbYViqyq6xvlGDZsLkZOdp1Enh5kkwe6WTH3Cg-z9d9Qay3sQM "회원가입")
아직 회원가입을 안했다면 회원가입을 먼저 해야 합니다. 
![enter image description here](https://lh3.googleusercontent.com/hgbKU0Cwn-IYmTMjHTJQTC0hFwuirZ2htmcqIVQVM9JEKouPH7E5MirLoUQ-PYUFSM1yct2PLUB6 "방 입장")
만약 처음 접속하는 것이라면 방을 만들거나 방에 입장을 해야합니다. 방을 만들면 코드가 생성되는데 그것으로 다른 유저들이 만든 방에 입장 할 수 있습니다. 
![enter image description here](https://lh3.googleusercontent.com/t1kHrqUEgsvJvQye6xaG8tSn1cvze8MIcNWzdAdIXy1x0bmr4Atqav1TTICZCuY59M78dmOT3Q7D "방 만들기")

방만들기를 클릭하면 다음 화면이 로드됩니다. 방이름을 정하시고 어떤구역을 청소하는지 정하고 방만들기 버튼을 클릭합니다. 
![enter image description here](https://lh3.googleusercontent.com/7ygOdNoYQWDJCi6jdzPcpre5eWhah9oUaQp7SzxJhUZ66Lzxf7Vfbk9IDr_WI3b8ER9ctNzOuRxy "메인페이지1")![enter image description here](https://lh3.googleusercontent.com/wWJkqbIOzK0hD-lonVOaJiQ5R_jZOxqzQQ6rDXOI9e0X8cPqJBSZnqL8LBhLC83qNf-aEUqCT7v4 "메인페이지2")![enter image description here](https://lh3.googleusercontent.com/nMP_S5sO7T1DPtmD4P7OxC-GcEqljr7L9xqKgBd6nbgTJfQDdwkCqDPomslYXgBQPgILVAZ5TV9i "메인페이지3")
다음 페이지가 메인 페이지입니다. 청소시간까지의 카운트다운과 인원현황, 구역편집 등의 다양한 기능들이 있습니다. 왼쪽으로 부터 청소시간이 10분이상 남을경우, 청소시간 10분전, 청소시간 시 위 3개의 페이지가 로드됩니다. 
![enter image description here](https://lh3.googleusercontent.com/uw7g-aw6YQYQkmc-1g_STPvwyJ9aDJZp14bvI9EyDZoe8dVV63cj4JLk5OwjbDK75Zu3IdEnZ5Jw)![enter image description here](https://lh3.googleusercontent.com/YYxl85RxHj3MQZfIXIuXxmxuiZkTgomeMdjRdSpWmlwQXi_PYn7nasipGNgyfsxMWj1RHi14e_jN)
인원현황페이지는 다음과 같습니다. 청소구역이 정해지기 전에는 체크로만 현황을 표현하였고 만약 청소구역이 정해졌으면 각자의 청소구역이 나열되어 있습니다. 열외가 있다면 열외내용도 함께 포함되어 있습니다. 

구역편집 페이지는 방만들기 페이지와 UI가 같습니다. 

X 버튼을 누를경우 현재 방에서 나오게 되며 방만들기/입장하기 페이지로 이동하게 됩니다. 

로그아웃을 누를경우 로그인페이지로 돌아갑니다. 

## 개발자

계급 성명: 상병 서동성
e-mail: dong.seong.jake.seo@gmail.com

## 제한사항

 - 현재는 프론트엔드만 존재함
 - 백엔드는 차후 개발 예정 (AWS Lambda 활용예정)
 - 청소지정 알고리즘 개선이 필요함

