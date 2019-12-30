## Request를 사용해보기

---

실력을 높이는 가장 좋은 방법은 빠르게 개발해보는 것입니다.

그래서 우리는 네이버 실시간 검색어 순위 1위~20위까지 링크를 redirect 해서

검색한 링크에 존재하는 연관검색어를 가져올 것입니다.

여기서 사용할 모듈은 **cheerio** 와 **request-promise** 입니다.

개발하면서 배우는 것이 많겠지만, 일단은 [Promise](https://developers.google.com/web/fundamentals/primers/promises?hl=ko), [HTTP 메세지](https://developer.mozilla.org/ko/docs/Web/HTTP/Messages)의 동작 방식을 아는 것이 중요합니다.

출력 양식은 다음과 같습니다.

```TypeScript
    const result = [
        [ '김복남 살인사건', '김복남 정체', '김복남 남편', '김복남 살던 섬 이름' ],
        [ '기묘한 이야기 시즌4', '밀리 바비 브라운', '핀은 왜 밴드를 하죠'],
        // ... 이러한 형식으로 1위부터 20위까지의 연관 검색어를 수집합니다
    ]
```

총 20개의 string 배열이 출력되어야 합니다.

추가적으로 현재 Task5의 directory에 terminal이 위치해있다면,

```zsh
$ npm install
```

이라는 명령어 입력 시, cheerio와 request-promise를 바로 사용할 수 있으며,

```zsh
npm start index.ts
```

라는 명령어 입력 시, index.ts가 compile 과정을 거치지 않고 바로 실행되는 것을 볼 수 있습니다.

<br></br>

### 그 외 읽기자료

-   [비동기/콜백](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)

-   [Promise](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)

-   [Promise.all](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
