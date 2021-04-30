# vue project 환경 설정 - webpack 

새로운 프로젝트에 시작하기에 앞서 웹팩 설정을 정리하고, +공-부라는 것을 해보고자 한다.

만약 vue-cli를 사용한다면, 웹팩이나 eslint, babel 등을 따로 설정해주지 않아도 된다. 난 vue를 처음 사용해보는 것이어서 vue-cli를 사용하지 않고, 스크래치부터 세팅하고자 시작하고자한다.

## 웹팩이 뭐에요?
웹팩은 JS 앱의 **정적 모듈 번들러**이다. 
웹팩이 애플리케이션을 처리할 떄, 내부적으로 프로그램 내의 모듈 관계를 엮어서 **의존 그래프**(dependency graph)를 그려준다.
그리고 이는 하나 이상의 *번들* 파일을 만든다.


## 모듈은 뭔가요?

modular programming에서는 프로그램을 모듈이라는 기능의 단위로 나누게 된다.

각 모듈이 프로그램을 나눔으로써, verification, 디버깅, 테스팅을 쉽게 만들어준다.
잘 쓰여진 모듈은 견고한 추상화와 캡슐화를 할 수 있게 해준다. 
이는 모듈이 전체 프로그램 안에서 일관된 디자인과 명확한 목적을 갖게 해준다.

**웹팩에서의 모듈** 
웹팩에서의 모듈은 여러 방식으로 의존 관계를 표현하고 있다.
- es6 `import`
- CommonJS `require()`
- AMD `define`, `require`
- css/sass/less 파일의 `@import` 
- stylesheet `url(...)`의 image url
- HTML `<img src=...>` 파일

## webpack 설치하기
프로그램의 모듈을 모아서 하나의 번들 파일을 만들어주는 웹팩 설정을 해보자!
웹팩 공식문서의 getting started를 따라서 해보기로 했다.

프로젝트의 구성은 `src`와 `dist`로 나눈다.
src 폴더에는 애플리케이션의 소스코드가 위치하고, dist 폴더에는 최적화되고 minimized된 배포 코드가 들어가게 된다. 배포 코드가 브라우저에서 보여지게 되는 코드이다. 

[HtmlWebpackPlugin](https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin)이 있을 경우, 알아서 dist/index.js 파일을 만들어주게 된다.

- **webpack, webpack-cli 설치**

  webpack-cli는 커맨드 라인으로 웹팩을 실행시킬 수 있게 해준다.
  두 개를 devdependency로 설치한다.

  ```
  npm i -D webpack webpack-cli
  ```

- **package.json 수정**

  👀 이건 처음보는 내용 !_!

  코드가 예상치 못하게 퍼블리쉬되는 것을 막기 위해 설정해줘야 하는 것이 있다.
  package.json에 `private:true`를 추가하고, `main` 엔트리를 지워야 한다.

## Vue 설정


- **`vue-loader`**
  `*.vue`는 `<template>`, `<script>`, `<style>` 3가지 타입의 최상위 언어 블록으로 구성된다.

  vue-loader는 파일을 파싱해서, 각 언어 블록을 추출한 뒤, 필요한 경우 다른 로더에 그 블록들을 넣고(pipe), 마지막으로 Vue.js 컴포넌트 옵션 객체를 default export하는 ES Module로 조합시킨다.

  `vue-loader`와 `vue-template-compiler`를 설치해야 한다.
  둘을 따로 설치하는 이유는 버전을 각각 관리하기 위함이다. 

  ```
  npm install -D vue-loader vue-template-compiler 
  ```

  ```
  // webpack.config.js
  const { VueLoaderPlugin } = require('vue-loader')

  module.exports = {
    module: {
      rules: [
        // ... other rules
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin()
    ]
  }
  ```
  아래의 웹팩 설정까지 마치고 난 후, 뷰 프로젝트가 잘 띄워지는지 확인해보자.
  - src/index.js
    ```js
    // src/index.js
    import Vue from "vue";
    import AppComponent from "./components/AppComponent.vue";

    new Vue({
      render: (h) => h(AppComponent),
    }).$mount("#app");
    ```

  - src/index.html
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body id='app'>
      
    </body>
    </html>
    ```
  - components/AppComponent.vue
    ```html
    // AppComponent.vue
    <template>
        <h1>Hello from the AppComponent</h1>
    </template>
    <script>
      export default {

      }
    </script>
    ```


## 웹팩 로더와 플러그인 설정하기

- 로더와 플러그인

  웹팩에서 로더와 플러그인을 설정하여 최적화를 진행할 수 있다.
  로더는 모듈의 소스코드에 변환을 적용하는 것이다.
  플러그인은 웹팩의 핵심인데, 번들된 결과물에 대한 처리를 진행한다.

  플러그인은 `apply` 메소드를 갖고 있는 자바스크립트 객체이다. 
  이 `apply` 메소드를 웹팩 컴파일러가 호출하여, 전체 컴파일 lifecycle에 접근할 수 있게 한다. 

  이제 본격적인 웹팩 설정 시작!

- Asset Management

  webpack 이전에는 grunt나 gulp와 같은 도구를 써서 asset을 src 폴더에서 dist 폴더로 옮겼다고 한다. 

  웹팩은 동적으로 모든 의존관계를 번들한다. 이게 좋은 이유는 **모든 모듈이 명확히 그 의존 관계를 말하게 되며, 사용하지 않는 의존 관계를 번들링하는 것을 막아주기 때문이다.**

  웹팩은 JS파일이 아니더라도 어떠한 타입의 파일이든 번들링할 수 있다는 것이다.
  이를 위해 로더나 내장 asset modules 서포트가 존재한다. 

- **Loading css**

  css 파일을 `import`하기 위해, `css-loadr`와 `style-loader`가 필요하다. 
  웹팩에서 로더는 

  ```
  npm install --save-dev style-loader css-loader
  ```

  webpack.config.js에 모듈 로더에 대한 설정을 추가하자.

  ```javascript
  const path = require("path");

  module.exports = {
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };
  ```
  모듈 로더는 체이닝된다. 이 체인은 *반대 순서*로 실행된다. 
  첫 번째 로더가 변환 과정을 거친 결과를 다음 로더에게 전달하게 된다.
  **체인을 다 거치고 나면, 웹팩은 JS파일이 나올 것을 기대한다.**

  가장 먼저 css파일은 css-loader를 거치게 된다.
  **css-loader는 `@import`와 `url()`을 해석하여 `import/require()`로 해석해준다.** 이를 통해 css파일을 자바스크립트에서 불러올 수 있다. 

  **style-loader는 css를 DOM에 추가해주는 역할을 한다.**

  style-loader가 css-loader 보다 먼저 나오는 이 순서는 반드시 지켜져야 한다. 

  `test`에 써있는 정규식에 해당되는 파일들에 모듈 로더가 적용된다.
  여기서 쓰인 정규식은 파일명이 .css로 끝나는 파일을 의미한다.

  **이렇게함으로써 해당 파일의 스타일을 적용할 css파일을 `import './style.css'`로 적용시킬 수 있게 된다.**

  빌드시킨 후 개발자도구로 HTML을 확인해보면, `<head>`에 index.js에서 import한 style.css의 내용이 `<style>` 태그 안에 들어간 것을 확인할 수 있다.

  ![스크린샷 2021-04-30 오후 11 53 43](https://user-images.githubusercontent.com/43772082/116712945-4ee82480-aa0f-11eb-9d84-a9f03e8c222b.png)

- **Loading Sass**

  보통 css만 사용하지 않고, scss나 sass로 작성한 뒤, css로 컴파일하게 된다.
  sass 파일을 로딩시키기 위해서 웹팩 설정이 필요하다. 여기서 필요한 로더는 `sass-loader`이다.

  일단은 sass와 sass-loader 설치하자.

  ```
  npm i -D sass-loader sass
  ```

  sass-loader를 체이닝에 추가해야 한다. 
  친절히 주석에 설명해주고 있다. 체이닝은 역순으로 적용된다는걸 기억하자.

  ```js
    module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  ```



- **Minimize css**
  개발 모드에서는 빌드의 결과물이 더 작아야 로드 타임이 줄어든다.
  ❓ 왜?

  `MiniCssExtractPlugin`과 `css-minimizer-webpack-plugin`을 통해 css 최적화를 해보자.

  `MiniCssExtractPlugin`은 css를 여러 개의 파일로 나눠준다. 
  구체적으로는 하나의 JS파일이 포함하고 있는 css파일 별로 나눈다. 
  이를 통해 css와 sourcemap을 `on-demand-loading`을 하게 해준다.
  
  설치랑 설정까지 다음 단계를 거치면 된다.
  ```
  npm install --save-dev mini-css-extract-plugin
  ```

  webpack.config.js파일에 플러그인에 추가한다.
  개발 환경에서는 CSS를 하나의 모듈로 처리해도 상관없기 때문에, 프로덕션 모드일 경우에만 플러그인을 실행시키도록 한다. filename에 설정한 값으로 dist 폴더에 css 파일이 생기게 된다.

  개발 환경에서는 css-loader에 의해 자바스크립트 모듈로 변경된 스타일 시트를 적용하기 위해 style-loader가 사용되었다. 프로덕션 모드에서는 별도의 css 파일로 추출하는 플러그인을 사용하니, 다른 로더가 필요하다. 프로덕션 모드일 경우에는 MiniCssExtractPlugin.loader를 추가한다.

  ```javascript
  const path = require("path");
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");

  module.exports = {
    entry: "./src/index.js",
    plugins: [
      ...(process.env.NODE_ENV === "production"
        ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
        : []),
    ],
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            process.env.NODE_ENV === "production"
              ? MiniCssExtractPlugin.loader
              : // Creates `style` nodes from JS strings
                "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
  };
  ```

  `css-minimizer-webpack-plugin`는 결과물을 작게 만들어주는 플러그인이다. 이 플러그인은 배포 모드에서 css 최적화를 해주는게 디폴트이다.
  이 플러그인의 옵션을 살펴보면 `parallel`이라는게 있다. 이게 멀티 프로세서 시스템에서 parallel하게 동작하도록 해주는 옵션이다. 기본값은 당연히 true..!

  설치!
  ```
  npm install css-minimizer-webpack-plugin --save-dev
  ```
  webpack.config.js에 다음을 추가한다.
  ```js
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  ```
  모든 주석을 지워주는 option도 추가해보자.
  ```js
  new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
  ```

  sass에 주석을 추가해보고, 빌드된 결과물의 `<head>` 에 있는 `<style>`을 보면, 주석은 지워진 것을 확인할 수 있다.

- **HtmlWebpackPlugin**
  이제 HtmlWebpackPlugin을 설치해보자.
  이 플러그인이 있으면 알아서 웹팩 번들링을 해주고, 결과물을 dist/ 폴더에 만들어낸다.
  
  설치!
  ```
  npm install --save-dev html-webpack-plugin
  ```

  템플릿에 사용할 기본 html 파일의 경로를 넣어준다.
  `hash:true`로 설정하여 웹팩 컴파일 때마다 유니크한 해쉬값을 스크리브와 css파일에 추가한다. 이는 브라우저 캐쉬떄문에 변경사항이 즉각 반영되지 않는 것을 막아준다.

  ```js
  plugins: [
  new HtmlWebpackPlugin({
    template: "src/index.html",
    hash: true,
  }),
  ...(process.env.NODE_ENV === "production"
    ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
    : []),
  ],
  ```

## webpack-dev-server

개발할때마다 새로고침하는거 너무 힘드니까, 데브서버 설치해서 수정된 코드가 즉각 반영되도록 하자.

webpack-dev-server를 설치하여 `webpack-dev-server`로 실행해보았는데, 
다음과 같은에러가 났다.

```
Error: Cannot find module 'webpack-cli/bin/config-yargs'
```

webpack, webpack-cli와 webpack-dev-server의 버전이 맞지 않아서 생기는 문제라고 한다. 현재 설치된 버전들은 다음과 같다.

```
"webpack": "^5.36.2",
"webpack-cli": "^4.6.0",
"webpack-dev-server": "^3.11.2"
```

여기서 실행 방식을 `webpack serve`로 바꿔서 실행시키니 해결되었다.

```
npx webpack serve --mode=development --open
```



## 출처
- [Getting Started - webpack](https://webpack.js.org/guides/getting-started/)
- [Asset Management - webpack](https://webpack.js.org/guides/asset-management/)
- [Modules - webpack](https://webpack.js.org/concepts/modules/)
- [Loaders - webpack](https://webpack.js.org/concepts/loaders/)
- [Vue-loader Manual Setup](https://vue-loader.vuejs.org/guide/#manual-setup)