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

## What is recoil ?

`Recoil`은 `Vue.js`를 했다면 `Vuex`와 같은 개념이라고 생각하면 된다

전역변수를 만들어 저장하는 공간이다

<br />
<hr />
<br />

## Installation recoil

일단 [Recoil documentation](https://recoiljs.org/)이 시키는대로 설치를 해보자

```jsx
$ npm i recoil
```

<br />
<hr />
<br />

## Start use recoil

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
