var anything = require('../lib/index.js')


let object_demo = {
    name: "小明",
    age: 18,
    friends: {
        name: '小红',
        age: 17
    }
}



function run_time(run) {
    console.log(`当前时间:${new Date()}`)
    let t1 = new Date();
    run()
    console.log('运行时间:' + (new Date() - t1));
}


run_time(() => {
    console.log(object_demo.g_object_to_json());
})



// run_time(() => {

// })


// run_time(() => {

// })



// run_time(() => {

// })


// run_time(() => {

// })













