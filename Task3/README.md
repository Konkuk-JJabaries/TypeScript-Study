## 비동기 그게 도대체 뭘까

---

JavaScript의 비동기 처리란 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고

다음 코드를 먼저 실행하는 JavaScript의 특성을 이야기합니다.

쉽게 말하면 JavaScript에서는 오래 걸리는 연산에서 연산을 기다려주지 않고

다음 코드로 진행한다는 뜻입니다.

예시 코드를 살펴보겠습니다.

```JavaScript
// #1
console.log('Hello');

// #2
setTimeout(function() {
	console.log('Bye');
}, 3000);

// #3
console.log('Hello Again');
```

지금까지 생각했던 방식으로 출력 순서를 확인하자면

```zsh
Hello
Bye
Hello Again
```

이라고 생각했었을 껍니다.

하지만 JavaScript에서는

```zsh
Hello
Hello Again
Bye
```

순서로 출력이 됩니다. 이게 바로 비동기의 개념입니다.

setTimeout 함수에서 3초를 기다린 뒤, 출력하도록 되어있지만

JavaScript 엔진에서는 3초를 기다리는 대신 다른 코드를 먼저 수행한 뒤에,

기다린 코드의 시간이 만료된 이후에 출력이 됩니다.

여기까지가 비동기에 대한 방법입니다.

간단하게 비동기에 대한 것들을 알아봤습니다.

<https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/>

이 곳을 참고하여 진행한다면 훨씬 더 높은 이해도를 가질 수 있게 될 것입니다.
