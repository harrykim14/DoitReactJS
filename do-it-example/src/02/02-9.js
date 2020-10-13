function parse(qs) {
    const queryString = qs.substr(0); // queryString = 'banana=10&apple=20&orange3=30'
    const chunks = queryString.split('&');
    
    // let result = {};
    // for (var i = 0; i < chunks.length; i++){
    //     var parts = chunks[i].split('=');
    //     var key = parts[0];
    //     var value = parts[1];
    //     result[key] = value;
    // }


    // forEach
    // let result = {};
    // chunks.forEach((chunk) => {
    //     const [ key, value ] = chunk.split('=');
    //     result[key] = value;
    // })

    // map
    // const result = chunks.map((chunk) => {
    //     const [ key, value ] = chunk.split('=');
    //     return { key : key, value : value };
    // })

    // return result

    return chunks
        .map((chunk) => {
            const [ key, value ] = chunk.split('=');
            return { key, value };
        })
        .reduce((result, item) => { 
            result[item.key] = item.value;
            return result;
        }, {});
}

let qs = 'banana=10&apple=20&orange=30';

console.log(parse(qs));


function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));