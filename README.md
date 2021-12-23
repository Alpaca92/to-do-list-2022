# Learn Recoil as doing make a todo list

## Skills

✔ React.js

✔ Recoil

✔ Styled-components

✔ React-query

✔ React-helmet

✔ React-router

✔ React-hook-form

<br />
<hr />
<br />

## Recoil

### What is recoil ?

`Recoil`은 `Vue.js`를 했다면 `Vuex`와 같은 개념이라고 생각하면 된다

전역변수를 만들어 저장하는 공간이다

<br />
<hr />
<br />

### Installation recoil

일단 [Recoil documentation](https://recoiljs.org/)이 시키는대로 설치를 해보자

```jsx
$ npm i recoil
```

<br />
<hr />
<br />

### Start use recoil

그리고 `react query`를 사용할 때 `index.tsx`에서 `<App />`을 `<QueryClientProvider>`로 감쌌던 것 처럼 `<RecoilRoot>`로 감싸주자

```jsx
// src/index.tsx

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom";
import App from "./App";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
```

그리고 새로운 파일에 전역변수(react에서는 이를 `atom`이라고 부른다)을 만들자

```jsx
// src/atoms.ts

import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});
```

여기서 `key`는 고유의 이름이라고 생각하면 되고 `default`는 말그대로 기본값을 정해주는 것이다

이를 사용 할 때에는 `useRecoilValue(<atom name>)`를 원하는 `component`에서 사용하면 된다

또한 `atom`을 수정하고 싶을 때에는 `useSetRecoilState(<atom name>)`을 사용하면 되는데 이는 `setter function`을 불러온다

이 `setter function`은 감사하게도 `useState()`에서 사용했던 `setter function`이랑 같은 args를 갖고 동일하게 동작한다

<br />
<hr />
<br />

## React-hook-form

### Installation

```js
$ npm i react-hook-form
```

### Usage

```js
const { register } = useForm();

console.log(register("todo"));
/*
Object
  name: "todo"
  onBlur: async event => {…}
  onChange: async event => {…}
  ref: ref => {…}
  [[Prototype]]: Object
*/
```

`register`라는 함수는 기존에 만들어서 사용했던 `onChange`, `onSubmit`과 같은 함수들을 대신해준다

`register`안에 있는 `onChange`는 기존에 만들어서 사용했던 `onChange`와 같은 역할을 하고 (focused)

`onBlur`는 unfocused일 때 사용되는 함수이다

```js
function App() {
  const { register } = useForm();

  return (
    <div>
      <form>
        <input {...register("todo")} type="text" placeholder="write a to do" />
        <button>click me</button>
      </form>
    </div>
  );
}
```

기본적으로는 위와 같이 `input`에 `props`를 주는 형식으로 사용한다

`required`를 통해 메세지도 보낼 수가 있는데 이를 위해서는 html의 `required`는 빼줘야한다

그렇지 않으면 정상적으로 작동하지 않는다

```js
// is okay

<input
  {...register("email", { required: "이메일을 입력해주세요" })}
  type="email"
  placeholder="Email"
/>
```

```js
// is not okay : you must remove 'required' attribute in html tag

<input
  {...register("email", { required: "이메일을 입력해주세요" })}
  type="email"
  placeholder="Email"
  required
/>
```
