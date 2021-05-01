# eslint, prettier, babel 환경 설정

Vue-trello project에서 eslint와 prettier를 사용해서 일관된 코드 스타일을 맞추고자한다. 

## 🖍 ESLint와 Prettier

논리적 오류가 아닌, 실수 때문에 에러가 발생할 수 있다. 이를 방지하기 위해 정적으로 코드에서 패턴을 분석하여 알려주는게 `린트`의 역할이다. 

ESLint는 자바스크립트 표준인 ECMAScript를 분석해주는 린트이다. 
지금보니 ESLint는 ECMAScript의 줄임말인 ES와 Lint의 합성어였다.

ESLint를 잘 사용한다면, 프로젝트에서 일관된 코드 패턴을 가져갈 수 있다. 
ESLint 자체도 포맷팅의 기능이 있다. 그러나, prettier가 더 좋기 떄문에 ESLint와 Prettier를 같이 사용한다. prettier는 코드 스타일을 맞춰주는 도구이다. 

정리하자면 ESLint는 코드 포매터이자, 에러를 분석해주는 도구이고, Prettier는 코드 포매터이다.


## 🛠 ESLint 설정


- 설치
  ```
  npm i -D eslint 
  ```

- **eslint-config-airbnb-base**

  airbnb style을 따르고자 하는데, 리액트를 사용하지 않을 경우엔 `eslint-config-airbnb-base`를 사용해야 한다고 한다. 
  이 패키지와 같이 설치해야 하는 것들을 peerDependency라고 하는데, 이를 확인해보고 설치하자.

  -  peerdependency 확인하기
  
    `eslint`와 `eslint-plugin-import`가 있다. 
    eslint-plugin-import는 es6+의 import/export syntax를 linting해주는 플러그인이다.

    ```
    $ npm info "eslint-config-airbnb-base@latest" peerDependencies
    {
      eslint: '^5.16.0 || ^6.8.0 || ^7.2.0',
      'eslint-plugin-import': '^2.22.1'
    }
    ```

  - `eslint-config-airbnb-base`와 peerdependency 설치하기
  
    ```
    npx install-peerdeps --dev eslint-config-airbnb-base
    ```

  설치를 마쳤으면, eslint 설정파일을 만들어서 설정해주면 된다.
  eslint 설정파일인 `.eslintrc.js` 파일을 생성하자. 

- **extends**

  설정 파일은 다른 설정 파일의 내용들(rules, plugins, language option 등)을 상속받을 수 있다.

  따라서 설정 파일은 세 가지 종류가 존재하게 된다.

  1. base config: 확장될 설정들
  2. derived config: base config를 확장하는 설정
  3. resulting actual config: derived config를 base config에 합친 결과물
   
  `eslint-config`는 설정 파일 이름에서 빠질 수 있다. 예를 들어 airbnb는 eslint-config-airbnb로 해석된다.

  이 플젝은 `eslint-config-airbnb-base`를 사용할 것이므로, 이를 extend에 추가한다.

- **extend와 plugin의 차이는 무엇일까?**
  
  extend는 설정 파일에 있는 rule 전체를 적용시킨다. 
  
  반면, 플러그인은 사용자가 필요한 rule들을 개별적으로 설정해주어야 한다. 플러그인 자체만으로는 어떠한 rule도 강제하지 않는다. 따라서 어떠한 rule을 사용할 것인지를 직접 설정해주어야 한다. 플러그인이 설정파일을 제공한다면, 플러그인에 그 플러그인을 추가한 후, extends에 설정파일을 넣어주어야 한다. 

- **plugin**

  eslint에서 서드파티 플러그인을 사용할 수 있다. `eslint-plugin` 접두사는 생략될 수 있다. 
  위에서 extend와 plugin의 차이에서 살펴보았듯이 플러그인에 추가한다고 해서 플러그인의 룰들이 적용되지는 않는다. 필요한 플러그인의 룰이 있다면, extends에 적용시키면 될 것 같다.

  Vue.js의 공식 ESLint plugin은 `eslint-plugin-vue`이다. 
  ```
  npm install --save-dev eslint eslint-plugin-vue
  ```
  현재 이 프로젝트에는 vue.js version 2가 설치되어있으므로, extends에 'plugin:vue/recommended'

- **language option**
  environment를 설정하는 것은 미리 지정된 전역 변수를 사용할 수 있게 한다. 이 플젝에서는 browser, node, es6, jest를 설정하고자 한다.

- **eslint 검사를 안할 파일 설정**

  특정한 파일이나 폴더를 eslint가 무시하게 해야 한다.
  이는 `.eslintignore`에 설정한다.

  eslint는 항상 `node_modules/`와 dot-file과 dot-folder는 무시한다.


## 🛠 Prettier 설정

prettier와 eslint를 같이 사용해주기 위해서 `eslint-config-prettier`를 설치한다. 이 패키지는 eslint에서 모든 포매팅 관련 룰들을 비활성화시키는 역할을 한다. `eslint-plugin-prettier`도 설치해주자. 이는 포맷팅 규칙을 Prettier를 사용해서 추가시켜준다.

```
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

extends의 가장 마지막에 `"plugin:prettier/recommended"`를 추가하자.  꼭 마지막이어야 다른 설정들을 오버라이드할 수 있다.

```js
{
  extends: ["airbnb-base", "pretteir:prettier/recommended"],
}
```

프리티어에 대한 개별 설정은 `.prettierrc`파일에 넣어주면 된다.

## 📄 최종 .eslintrc.js 파일

```js
module.exports = {
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'pretteir:prettier/recommended'
  ],
  plugins: ['vue', 'import'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  }
};
```

## 출처
- [Eslint](https://eslint.org/)
- [[Lint] ESLint + Prettier 설정하기](https://baeharam.netlify.app/posts/lint/Lint-ESLint-+-Prettier-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
- [ESLint vs Prettier](https://enlear.academy/eslint-vs-prettier-57882d0fec1d)
- [What's the difference between plugins and extends in eslint?
](https://stackoverflow.com/questions/53189200/whats-the-difference-between-plugins-and-extends-in-eslint)