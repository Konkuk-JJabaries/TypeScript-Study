## 다른 모듈들을 사용해보기

---

앞에서 네이버 크롤링을 진행하면서 cheerio, request-promise 모듈을 사용해보았습니다.

nodejs에서는 다양한 모듈들을 지원합니다.

다음 과제에서 사용될 11번가 개발때에 쓸 iconv-lite, xml2js 같은 모듈들도 있고

puppeteer 라는 모듈과 lodash라는 모듈도 있습니다.

이번 과제에서는 Gmail에서 mail 제목과 수신자 가져오기를 해보겠습니다.

Gmail은 네이버처럼 request나 cheerio를 사용하지 않고,

puppeteer를 사용하여 자동화 chrome인 Chromium 를 사용하게 됩니다.

현재 Task6 디렉토리에서

```zsh
npm install
```

명령어를 입력하여 설치를 진행한 뒤에 개발을 하면 됩니다.

```zsh
npm start index.ts
```

이 명령어를 수행했을 때에 Chromium이 자동으로 실행되는 것을 확인할 수 있습니다.

puppeteer의 documentation을 찾아서 확인해보면서 개발하다보면 금방 개발 할 수 있을 것입니다.

출력 양식은 다음과 같습니다.

```TypeScript
{
    mail_count : 50;     // 최소 1개, 최대 50개 입니다. 메일의 개수가 적으면 어쩔 수 없겠죠?
    mail_list : [
        { sender : 'Name of Sender', title : 'Title of Mail' },
        ...
    ]
}
```

원래는 가시적인 도구였던 Chromium이라는 도구를 통해 자동화 도구의 재미를 알려주고자 했으나,

WSL같은 경우에는 Chromium이 되질 않습니다. 따라서 보이지 않는 방법으로 실행하는 수 밖에 없괴

가본세팅은 보이지 않도록 처리되었으니 WSL에서도 될 것으로 생각됩니다. 확인해보고 다시 알려주세용

> 정 안되면 7번으로 바로 넘어가주세요
