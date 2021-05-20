# Vue-Trello

- Vue와 Vuex를 익히기 위한 트렐로 클론 프로젝트


## 💡 목표 
- Vue와 Vuex 익히기
- 사용하는 기술에 대한 확실한 학습과 문서화
- 발생했던 이슈와 해결 방법 문서화
- HTML, sass에 대한 이해 
- CI/CD 직접 해보기

## 🛠 기술 스택
- vue
- vuex
- sass
- jest
- webpack
- eslint, prettier, babel

## 💻  개발 노트
- [<엔터가 눌렸을 때, 타이틀 수정하기>에서의 문제와 해결, 리팩토링](https://github.com/yejineee/vue-trello/issues/23)
- [props로 객체가 전달될 때, 타입 체크를 더 확실히하는 방법은 없을까](https://github.com/yejineee/vue-trello/issues/25)
- [<타이틀 수정 바깥을 클릭했을 때, 수정폼 닫히게 하기>까지의 과정](https://github.com/yejineee/vue-trello/issues/27)
- [window.addEventListener와 document.addEventListener의 차이](https://github.com/yejineee/vue-trello/issues/37)
- [동적으로 url의 boardId가 변경됨에 따라 데이터 fetch해오기](https://github.com/yejineee/vue-trello/issues/49)
- [drag and drop Mixin 만들어서 컴포넌트에 적용하기](https://github.com/yejineee/vue-trello/issues/53)


## 📗 학습 정리
- [webpack, vue 설정](https://github.com/yejineee/vue-trello/blob/master/docs/webpack.md)
- [eslint, prettier 설정](https://github.com/yejineee/vue-trello/blob/master/docs/eslint-prettier.md)
- [CSR vs SSR](https://hackmd.io/KQkXXyeDSBeNR8znd2Ok9Q)
- [HTML5, CSS3, Sass](https://hackmd.io/CsQfn7e7TGieeoyo-q-4vw)
- [HTML drag and drop API](https://hackmd.io/mYUmBIERTneQ1nM-iGtkdg)
- [shadow DOM](https://hackmd.io/PUgX5BbkT42W5819-E1Tvg?view)
- [virtual DOM](https://hackmd.io/LcRaiMoSSTyNOW4llJYmuw)


- Vue 2
  - [Vue Introduction](https://hackmd.io/cXf2Y39zQ-Kv8sqnYBi_zw)
  - [Vue instance](https://hackmd.io/6N65rm0KTTGk_y_1QhfCeA)
  - [Vue 템플릿 신택스](https://hackmd.io/a1iRCJuuT0-pDC52yjVP2w)
  - [조건부렌더링, 리스트렌더링](https://hackmd.io/1XnTtI1_ShG5G0xnOx0eBg)
  - [컴포넌트](https://hackmd.io/EfHf4_1jQdq09gp2lOkQ-w)
  - [Runtime + Compiler vs Runtime-only](https://hackmd.io/5hF0zrqLSVS9lIYH_Za2Mw)
  - [Vue Lifecycle & Lifecycle Method](https://hackmd.io/quNH36I6THW43zD_Uck6ow)
  - [vue2의 반응형 동작 원리 살펴보기](https://hackmd.io/9erUGX79SjO1DLS4TB9LYg?both)
  - [mixins](https://hackmd.io/V8RzO1U0TCeI1pa4CLORxw)
  - [plugins & filters](https://hackmd.io/niY2yeUBQ7a44Th4fdyxCQ)

- Vuex 
  - [Vuex 코어 개념 : state, getters](https://hackmd.io/BSRVLv-_RlulY-azXSRr2A)
  - [Vuex 코어 개념 : Mutations, Actions](https://hackmd.io/mHGTeQOhSeiQMqpyvRSf0w)
  - [Vuex 코어 개념 : Modules](https://hackmd.io/zJqGEpn1SCeukNGa53OeUQ?both)

- vue-router
  - [vue-router](https://hackmd.io/u3H7cdiaScyXPiAKhNxLHQ?view)
  - [데이터 fetching - 데이터는 언제 fetch해야할까?](https://hackmd.io/q5Oi49SES8yRidIUk0P95w)

- About 최적화
  - [FE 성능 최적화 - especially vue & vuex](https://hackmd.io/t11IT10OQu2dshd0tiG7Vg)

## 🏃‍♀️ 계획과 실행 
<details>
  <summary>날짜별 계획과 실행</summary>

  - **21.04.30 금** 
    - vue, webpack 설정 후 로컬호스트 띄워보기 - [PR](https://github.com/yejineee/vue-trello/pull/5) ✅ 
    - prettier, eslint 설정하기 ⛔️
    - babel 설정하기 ⛔️
    - es module 사용할 수 있는지 확인해보고 안되면 바벨 설정하기 ⛔️
    - 환경설정한 것 문서화해서 올리기

  - **21.05.01 토** 
    - prettier, eslint 설정하기 ✅ - [PR](https://github.com/yejineee/vue-trello/pull/6)
    - babel 설정하기 ⛔️
    - vue 공식문서 읽기(template 마지막부분 ~ 컴포넌트) 🌗
    - 기본 페이지 마크업 ⛔️
    - 칼럼 추가하기 기능  ⛔️
    - 칼럼에 todo 추가하기 기능 ⛔️
    - 환경설정한 것 문서화해서 올리기
  - **21.05.02 일**
    - vue 공식문서 읽고 정리 ✅ 
    - 기본 마크업 ✅ 
    - 칼럼 추가하기 ✅ - [PR](https://github.com/yejineee/vue-trello/pull/9)
    
  - **21.05.04 화**
    - vuex 학습 및 정리 (코어개념-state, getters, mutations, actions) ✅ 
    - 서버에서 columns 데이터 가져와서 보여주기 - 비동기 액션 적용! ✅ 
    - 칼럼 생성으로 Store의 state 변경시키기 ✅ 
    - 칼럼 이름 수정하기 ⛔️
    - 유저 스토어 추가하여 스토어 모듈화하기 ⛔️
    - 지금까지 개발한 내용 정리하기 ⛔️

  - **21.05.05 수**
    - 칼럼 이름 수정하기 ✅ 
    - 메인 페이지 마크업 다시 정비하기 ✅ 

  -  **21.05.09 일**
     -  vue-router 학습하기 ✅ 
     -  라우팅 적용하기 ✅ 

  -  **21.05.10 월**
     -  동적 라우팅 적용하기 (/board/:boardId) ✅ 
     -  메인 페이지에서 보드 리스트 보여주기 ✅ 
     -  개발 노트 다듬기 & 링크 추가 ✅ 
  -  **21.05.12 수**
     -  vue2 반응형 원리 학습 ✅ 
     -  vue2에서의 최적화 학습 ✅ 
  -  **21.05.13 목**
     -  동적으로 params 바뀜에 따라 columns data fetch ✅
  -  **21.05.16 금**
     -  plugin, mixin, filter 학습 ✅
     -  drag and drop mixin 만들고 컴포넌트에 적용하기 ✅
</details>





## 🌳 브랜치 전략 
- 브랜치 전략은 **GitHub flow**를 따른다.
  혼자 하는 프로젝트라서, 복잡한 브랜치 전략을 가져갈 이유가 없다고 생각한다.
- master에는 배포 가능한 코드들을 넣는다.
- 개발은 master에서 브랜치를 따와서 진행한다.
- PR은 적절한 단위로 나눠서 올린 후, master에 머지한다.

## 🔖 커밋 컨벤션
```
Chore : 빌드 & 패키지 관련 변경
Docs : 문서 올리기
Feat : 신규 기능
Fix : 버그 수정
Markup : 로직없이 마크업 코드 반영시
Refactor : 코드 개선
Style : 코드 변경 없이 포맷, 코드 스타일만 변경 될 경우
Test : 테스트 코드 변경
Update : 기존 기능 변경, 주석, 삭제
```
