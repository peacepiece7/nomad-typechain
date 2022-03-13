# 0.2 ~ 0.3 Introduction and What are we building

- 설치하기 `yarn global add typescript`
- typescript configuration setting -> tsconfig.json

  - module : [_String_] 사용하는 js버전 (ES2015 ~ 2022, commonJS, node, nodeNext, AMD .. )
  - target : [_String_] 컴파일 후 js버전 (ES2015 ~ 2022 )
  - sourceMap : [_Boolean_] fileName.js.map으로 파일 반환, 컴파일 결과를 보기좋게 반환
  - ourDir : [_String_] 컴파일 된 파일의 out directory
  - include, exclude : [_Array_] 컴파일에 포함, 제외할 파일목록 (`src/**/*` => `src/*`를 뜻함)

- 컴파일 스크립트 : `tsc`

- 스크립트 실행 전 컴파일하기
  - 접두사 "pre"를 붙여서 전처리할 수 있음, `yarn start`시 `yarn prestart` 후 `yarn start`

```json
// package.json
"scripts": {
    "prestart" : "tsc",
    "start" "node index.js"
 }
```

# 0.4 First steps with Typescript

- optional paremeter

```js
const name = "Nico",
  age = 24,
  gender = "male";
const sayHi = (name, age, gender?) => console.log(name, age, gedner); // Nico 24 undifined "No Error~"
sayHi(name, age);
```

# 0.5 Types in Typescript (tsc-watch)

- `yarn add tsc-watch -dev(-D)` (nodemon같은 거임)
  - `"start" : "tsc-watch --onSuccess \" node dist/index.js \" "`

# 0.6 Interfaces on Typescript

- 객체를 파라메터로 받을 때, interface를 type으로 정의해주기

# 0.7 classes on Typescript

- class를 type으로 정의할 수 있다
- private, public을 class에서 선언할 수 있다. (js는 ES2022부터 #(private)문법 추가됨 그전엔 이거 못 썼음..)

```js
const sayHi = (person: Human) => console.log(person.name, persone.age, persone.gedner);
```
