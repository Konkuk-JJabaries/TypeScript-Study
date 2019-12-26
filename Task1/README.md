## JavaScript 개발환경 구축하기

---

JavaScript 그리고 TypeScript를 개발하기 위해 일단 환경부터 만들어 보겠습니다.

일단 기본적으로 Node.js를 설치해야 합니다.

Node.js 는 이 [링크](https://nodejs.org/ko/)를 접속하면 설치가능합니다.

Node.js 는 LTS 버전과 Current 버전이 존재합니다.

LTS 버전은 **Long Term Support** 라는 뜻이며, 안정적인 버전으로 해당 버전에 대한 취약점, 또는 개선 사항을 패치해준다는 뜻입니다.

Current 버전은 아직 개발이 진행중인 버전을 뜻합니다. 해당 버전에 있던 기능이 패치를 통해 없어질 수도 있는 불안정한 버전을 말합니다.

Node.js 의 설치가 끝나면 terminal에서

```zsh
$ node --version
$ npm --version
```

라는 명령어를 통해 설치가 되었음을 확인할 수 있습니다.

여기서 갑작스럽게 나오는 npm 은 **node package manager** 입니다.

Node.js를 통해 개발될 때에 다양한 외부 라이브러리를 설치하거나 버전관리를 할 때에 쓰이는 패키지 매니저입니다.

여기까지 왔다면 이제 Node.js를 개발할 준비가 된 것입니다.

이제 TypeScript라는 언어의 개발환경을 만들어보겠습니다.

<br></br>

## TypeScript 개발환경 구축하기

---

TypeScript는 JavaScript를 기반으로 만들어진 언어입니다.

따라서 JavaScript에서 사용하는 엔진을 활용하여 돌아갑니다.

아래의 명령어를 통해 TypeScript를 설치합니다.

```zsh
$ npm install -g typescript
```

이 명령어는 TypeScript를 전역에 설치하는 것입니다. 설치한 후에

```zsh
$ tsc --v
```

라는 명령어를 입력하여 TypeScript 설치를 확인할 수 있습니다.

tsc는 TypeScript Compiler의 준말로 TypeScript를 JavaScript로 컴파일하여 이를 다시 node로 실행하는 방법을 사용합니다.

이 컴파일에는 다양한 옵션이 존재합니다.

하지만 처음 개발할 때에 그런 내용들까지 필요는 없기 때문에 굳이 설명하지는 않겠습니다.

> 혹시 궁금하다면 직접 검색해서 찾아보는 것을 추천합니다.

그럼 여기까지 TypeScript 개발환경을 모두 만든 것입니다.

그럼 본격적으로 TypeScript 개발을 시작해주시기 바랍니다.

### 화이팅 ^^
