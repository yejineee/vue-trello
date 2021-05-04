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

## 📗 학습 정리
- [webpack, vue 설정](https://github.com/yejineee/vue-trello/blob/master/docs/webpack.md)
- [eslint, prettier 설정](https://github.com/yejineee/vue-trello/blob/master/docs/eslint-prettier.md)

- Vue 공식문서 간단 정리
  - [Vue Introduction](https://hackmd.io/cXf2Y39zQ-Kv8sqnYBi_zw)
  - [Vue instance](https://hackmd.io/6N65rm0KTTGk_y_1QhfCeA)
  - [Vue 템플릿 신택스](https://hackmd.io/a1iRCJuuT0-pDC52yjVP2w)
  - [조건부렌더링, 리스트렌더링](https://hackmd.io/1XnTtI1_ShG5G0xnOx0eBg)
  - [컴포넌트](https://hackmd.io/EfHf4_1jQdq09gp2lOkQ-w)
  - [Runtime + Compiler vs Runtime-only](https://hackmd.io/5hF0zrqLSVS9lIYH_Za2Mw)

- Vuex 공식문서 정리
  - [Vuex 코어 개념 : state, getters](https://hackmd.io/BSRVLv-_RlulY-azXSRr2A)
  - [Vuex 코어 개념 : Mutations, Actions](https://hackmd.io/mHGTeQOhSeiQMqpyvRSf0w)

## 🏃‍♀️ 계획과 실행 
~~지켜지지못할~~ 계획과 실행!
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
  - 서버에서 columns 데이터 가져와서 보여주기 - 비동기 액션 적용!
  - 칼럼 생성으로 Store의 state 변경시키기
  - 칼럼 이름 수정하기
  - 유저 스토어 추가하여 스토어 모듈화하기 
  - 지금까지 개발한 내용 정리하기

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
