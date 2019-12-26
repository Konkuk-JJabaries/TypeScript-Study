{
    /** 1번 중복 값 제거하기 */
    let values = [3, 1, 3, 5, 2, 4, 4, 4];
    /** 답 : [3, 1, 5, 2, 4] */
}

{
    /** 2번  filter를 사용하여 이름에 영어 'o'가 포함된 users들의 배열 출력 (대소문자 무관) */
    let users = [
        { id: 11, name: 'Adam', age: 23, group: 'editor' },
        { id: 47, name: 'John', age: 28, group: 'admin' },
        { id: 85, name: 'William', age: 34, group: 'editor' },
        { id: 97, name: 'Oliver', age: 28, group: 'admin' },
    ];
    /** 답 : [
     *      { id: 47, name: 'John', age: 28, group: 'admin' },,
     *      { id: 97, name: 'Oliver', age: 28, group: 'admin' }
     * ]
     */
}

{
    /** 3. 특정 유저가 group에 admin 권한을 갖고 있는지 확인 *Tip Arrays.some */
    let users_1 = [
        { id: 11, name: 'Adam', age: 23, group: 'editor' },
        { id: 47, name: 'John', age: 28, group: 'admin' },
        { id: 85, name: 'William', age: 34, group: 'editor' },
        { id: 97, name: 'Oliver', age: 28, group: 'admin' },
    ];
    /** Adam일 경우 false, John일 경우 true */
}

{
    /** 4번 array of arrays 펼치기(reduce 사용) */
    let nested = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    /** 답 : [1, 2, 3, 4, 5, 6, 7, 8, 9] */
}

{
    /** 5번 나이의 빈도를 포함하는 객체를 만들기 */
    let users_2 = [
        { id: 11, name: 'Adam', age: 23, group: 'editor' },
        { id: 47, name: 'John', age: 28, group: 'admin' },
        { id: 85, name: 'William', age: 34, group: 'editor' },
        { id: 97, name: 'Oliver', age: 28, group: 'admin' },
    ];
    /** 답 : {23: 1, 28: 2, 34: 1} */
    /** *Tip const a = '1' => {[a] : 'b'} => {'1' : 'b'} */
}

{
    /** 6번 userid를 키로 만든 object를 만들기 */
    let users_3 = [
        { id: 11, name: 'Adam', age: 23, group: 'editor' },
        { id: 47, name: 'John', age: 28, group: 'admin' },
        { id: 85, name: 'William', age: 34, group: 'editor' },
        { id: 97, name: 'Oliver', age: 28, group: 'admin' },
    ];
    /** 답 :
     * {
     *    11: { id: 11, name: 'Adam', age: 23, group: 'editor' },
     *    47: { id: 47, name: 'John', age: 28, group: 'admin' },
     *    85: { id: 85, name: 'William', age: 34, group: 'editor' },
     *    97: { id: 97, name: 'Oliver', age: 28, group: 'admin' }
     *  }
     */
}

{
    /** 7번  key-value map 역전 */
    let cities = {
        Lyon: 'France',
        Berlin: 'Germany',
        Paris: 'France',
    };
    /** 답:
     * {
     *     France: ["Lyon", "Paris"],
     *     Germany: ["Berlin"]
     * }
     */
}

{
    /** 8번 A와 B의 합집합(순서 상관없음) */
    let arrA = [1, 4, 3, 2];
    let arrB = [5, 2, 6, 7, 1];
    /** 답: [1, 4, 3, 2, 5, 6, 7] */
}
{
    /** 9번 A와 B의 교집합(순서 상관없음) */
    let arrA_1 = [1, 4, 3, 2];
    let arrB_1 = [5, 2, 6, 7, 1];
    /** 답: [1, 2] */
}
