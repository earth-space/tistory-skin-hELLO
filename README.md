# 📃 커스텀용 티스토리 스킨 제작중
hELLO 스킨을 수정하여 커스텀용 스킨을 제작중입니다.    
진행 사항은 [개인 블로그](https://earth-ing.tistory.com/) 에서 확인가능합니다.  
기여(테마제공)를 위한 작업이 아닌 개인학습 및 스킨 적용을 목적으로한 프로젝트이며  
원본의 저작권은 아래를 참고해주시면 되겠습니다.

수정작업에 익숙해지면 기여해보고 싶습니다.
<br/>
<br/>


## 적용
혹시 이 테마를 개인블로그에 적용하고싶으시거나 커스텀 방식을 살펴보고 싶으시다면  
[hELLO](https://pronist.tistory.com/5)를 참조하여 받아주시고  
같은 방식으로 preview, deploy를 진행하실 수 있습니다.  
단, deploy 전 몇가지 수정이 필요합니다.  
<br/>
### ✔ views/Sidebar/Category.pug  
* 카테고리(게시판 이름) 앞에 [Font Awesome](https://fontawesome.com/icons) 아이콘을 적용하기위한 커스텀 코드가 있습니다.  
* 개인의 카테고리에 맞춰 원하시는 아이콘 코드로 수정해주시면 됩니다. 아이콘은 위의 Font Awesome 사이트에서 찾으실 수 있습니다.  
* 아이콘의 style은 46번째 줄에서 확인 가능하며 그대로 사용하시거나 수정하셔도 무방합니다.  
* 48번째 줄에는 [animaite.css](https://github.com/animate-css/animate.css) 를 이용한 hover animation이 있습니다.  
* 애니메이션을 수정하거나 삭제하실 수 있습니다.  

### ✔ assets/styl/App.styl  
* 원본에 있던 light.css, dark.css cdn 대신 이 파일에 light, dark에 해당하는 커스텀 코드가 있습니다.  
* 폰트 추가 및 수정도 주석을 참조하여 변경하실 수 있습니다.   

<br>

## 저작권

[MIT](https://github.com/pronist/hELLO/blob/master/LICENSE)

Copyright 2020-2022. [SangWoo Jeong](https://github.com/pronist). All rights reserved.
