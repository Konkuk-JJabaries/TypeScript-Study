{
    /** 1번 */
    let values = [3, 1, 3, 5, 2, 4, 4, 4];

    const answer_1_1 = values.reduce((acc, cur) => {
        acc.includes(cur) ? '' : acc.push(cur);
        return acc;
    }, []);
    const answer_1_2 = [...new Set(values)];
}

{
    /** 2번 */
    let users = [
        { id: 11, name: 'Adam', age: 23, group: 'editor' },
        { id: 47, name: 'John', age: 28, group: 'admin' },
        { id: 85, name: 'William', age: 34, group: 'editor' },
        { id: 97, name: 'Oliver', age: 28, group: 'admin' },
    ];

    const answer_2 = users.filter(user => user.name.includes('o') || user.name.includes('O'));
}

{
    /** 3번 */
    let users_1 = [
        { id: 11, name: 'Adam', age: 23, group: 'editor' },
        { id: 47, name: 'John', age: 28, group: 'admin' },
        { id: 85, name: 'William', age: 34, group: 'editor' },
        { id: 97, name: 'Oliver', age: 28, group: 'admin' },
    ];

    const answer_3_Adam = users_1.some(user => user.name === 'Adam' && user.group === 'admin');
    const answer_3_John = users_1.some(user => user.name === 'John' && user.group === 'admin');
    const answer_3_William = users_1.some(
        user => user.name === 'William' && user.group === 'admin',
    );
    const answer_3_Oliver = users_1.some(user => user.name === 'Oliver' && user.group === 'admin');
}

{
    /** 4번 */
    let nested = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    const answer_4_1 = nested.reduce((acc, cur) => acc.concat(...cur), []);
    const answer_4_2 = nested.reduce((acc, cur) => [...acc, ...cur], []);
    const answer_4_3 = [].concat.apply([], nested);
}

{
    /** 5번 */
    let users_2 = [
        { id: 11, name: 'Adam', age: 23, group: 'editor' },
        { id: 47, name: 'John', age: 28, group: 'admin' },
        { id: 85, name: 'William', age: 34, group: 'editor' },
        { id: 97, name: 'Oliver', age: 28, group: 'admin' },
    ];
    const answer_5 = users_2.reduce(
        (acc, cur) => ({ ...acc, [cur.age]: acc[cur.age] + 1 || 1 }),
        {},
    );
}

{
    /** 6번  */
    let users_3 = [
        { id: 11, name: 'Adam', age: 23, group: 'editor' },
        { id: 47, name: 'John', age: 28, group: 'admin' },
        { id: 85, name: 'William', age: 34, group: 'editor' },
        { id: 97, name: 'Oliver', age: 28, group: 'admin' },
    ];
    const answer_6 = users_3.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});
}

{
    /** 7번 */
    let cities = {
        Lyon: 'France',
        Berlin: 'Germany',
        Paris: 'France',
    };

    const answer_7_1 = Object.keys(cities).reduce(
        (acc, cur) => ((acc[cities[cur]] = [...(acc[cities[cur]] || []), cur]), acc),
        {},
    );
    const answer_7_2 = Object.keys(cities).reduce((acc, cur) => {
        const country = cities[cur];
        acc[country] = [...(acc[country] || []), cur];
        return acc;
    }, {});
}

{
    /** 8번 */
    let arrA = [1, 4, 3, 2];
    let arrB = [5, 2, 6, 7, 1];
    const answer_8 = [...new Set([...arrA, ...arrB])];
}

{
    /** 9번 */
    let arrA = [1, 4, 3, 2];
    let arrB = [5, 2, 6, 7, 1];
    const answer_9 = arrA.filter(a => arrB.includes(a));
}
