# 0.2 Introduction and What are we building

- 설치하기 `yarn global add typescript`
- typescript configuration setting -> tsconfig.json

  - module : [_String_] 사용하는 js버전 (ES2015 ~ 2022, commonJS, node, nodeNext, AMD .. )
  - target : [_String_] 컴파일 후 js버전 (ES2015 ~ 2022 )
  - sourceMap : [_Boolean_] fileName.js.map으로 파일 반환, 컴파일 결과를 보기좋게 반환
  - include, exclude : [_Array_] 컴파일에 포함, 제외할 파일목록

- 컴파일 스크립트 : `tsc`

- 스크립트 실행 전 컴파일하기
  - 접두사 "pre"를 붙여서 전처리할 수 있음, `yarn start`시 `yarn prestart` 후 `yarn start`

```js
// package.json
"scripts": {
    "prestart" : "tsc",
    "start" "node index.js"
 }
```
