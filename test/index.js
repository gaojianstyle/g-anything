// var anything = require('../lib/index.js')
var anything = require('../dist/anything.min.js')

let object_demo = {
    name: "小明",
    age: 18,
    friends: {
        name: '小红',
        age: 17
    }
}



function run_time(run) {
    console.log(`#####################当前时间:${new Date()}#####################`)
    let t1 = new Date();
    run()
    console.log('运行时间:' + (new Date() - t1));
}


run_time(() => {
    console.log(object_demo.g_object_to_json());
})


/**
 * g_time() 
 * 方式: 函数调用
 * 作用: 输出当前时间点可得到的全部信息
 * 返回: object对象
 */
run_time(() => {
    // console.log(g_time())
    console.log("2023-2-28 8:50:11".g_time_format());
})
// {
//   time: '2023-02-28 08:50:11',
//   time_s1: '2023-02-28 08:50:11.000',
//   time_s2: 'February 28 2023, 8:50:11 am',
//   week: 2,
//   M: '2',
//   MM: '02',
//   MMM: 'Feb',
//   MMMM: 'February',
//   Q: '1',
//   D: '28',
//   DD: '28',
//   d: '2',
//   ddd: 'Tue',
//   dddd: '星期二',
//   w: '9',
//   A: 'AM',
//   a: 'am',
//   YYYY: '2023',
//   YY: '23',
//   HH: '08',
//   H: '8',
//   hh: '08',
//   h: '8',
//   m: '50',
//   mm: '50',
//   s: '11',
//   ss: '11',
//   sss: '000',
//   x: '1677545411',
//   X: 1677545411000,
//   start_day: '2023-02-28 00:00:00',
//   start_week: '2023-02-26 00:00:00',
//   start_isoWeek: '2023-02-27 00:00:00',
//   start_month: '2023-02-01 00:00:00',
//   start_years: '2023-01-01 00:00:00',
//   end_day: '2023-02-28 23:59:59',
//   end_week: '2023-03-04 23:59:59',
//   end_isoWeek: '2023-03-05 23:59:59',
//   end_month: '2023-02-28 23:59:59',
//   end_years: '2023-12-31 23:59:59',
//   years: 2023,
//   months: '02',
//   date: 28,
//   hours: 8,
//   minutes: 50,
//   seconds: 11,
//   milliseconds: 0
// }

// run_time(() => {

// })



// run_time(() => {

// })


// run_time(() => {

// })













