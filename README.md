# [什么是g-anything?](https://note.youdao.com/s/2MOZBsDW)

**下一代全端工具框架.**

很多时候我们只是希望快速实现功能,并且拥有**易用性,通用性,可移植性**,g-anything完全可以满足这一点.

云文档(实时更新,推荐) <https://note.youdao.com/s/2MOZBsDW>

## github

<https://github.com/gaojianstyle/g-anything>

## npm

<https://www.npmjs.com/package/g-anything>

# 安装

## CDN引入

```html
<script src="https://cdn.jsdelivr.net/gh/gaojianstyle/g-anything@main/dist/g-anything.min.js"></script>
```

## CDN历史版本

<https://cdn.jsdelivr.net/gh/gaojianstyle/g-anything@main/dist/>

## npm安装

    npm i g-anything
    或
    cnpm i g-anything
    或
    yarn add g-anything
    或
    pnpm i g-anything

## 理念

**一切皆可g-anything.**

和python理念一样,快速便捷的实现我们想要的功能.

## 海纳百川

**在g-anything中可以找到一切你想要的函数.**

g-anything意在集成前后端通用方法,在此过程中并不介意和排斥其他优秀的框架,相反的非常乐意将其他框架都集成到g-anything中,g-anything可以拥抱一切美好,通过对其他框架的集成将一切都转换成对JavaScript的object对象扩展,g-anything将成为下一代工具框架.

# 运行平台

全平台支持

*   \[√] nodejs
*   \[√] 浏览器

# 实现原理

基于object原型链扩展达到引入一次全局调用.

# 使用

### g-anything函数命名规则

1.  g-anything使用下标命名
2.  **g\_** 为所有函数的前缀
3.  调用方式为两种

    1.  **函数调用**
    2.  **点调用**

#### 函数调用示例:

```javascript
/**
 * g_time() 
 * 方式: 函数调用
 * 作用: 解析当前时间点可得到的全部信息
 * 返回: object对象
 */
console.log(g_time());
// 输出
// 	{
//     time: '2023-02-28 08:44:06',
//     time_s1: '2023-02-28 08:44:06.965',
//     time_s2: 'February 28 2023, 8:44:06 am',
//     week: 2,
//     M: '2',
//     MM: '02',
//     MMM: 'Feb',
//     MMMM: 'February',
//     Q: '1',
//     D: '28',
//     DD: '28',
//     d: '2',
//     ddd: 'Tue',
//     dddd: '星期二',
//     w: '9',
//     A: 'AM',
//     a: 'am',
//     YYYY: '2023',
//     YY: '23',
//     HH: '08',
//     H: '8',
//     hh: '08',
//     h: '8',
//     m: '44',
//     mm: '44',
//     s: '6',
//     ss: '06',
//     sss: '965',
//     X: '1677545046',
//     x: 1677545046965,
//     start_day: '2023-02-28 00:00:00',
//     start_week: '2023-02-26 00:00:00',
//     start_isoWeek: '2023-02-27 00:00:00',
//     start_month: '2023-02-01 00:00:00',
//     start_years: '2023-01-01 00:00:00',
//     end_day: '2023-02-28 23:59:59',
//     end_week: '2023-03-04 23:59:59',
//     end_isoWeek: '2023-03-05 23:59:59',
//     end_month: '2023-02-28 23:59:59',
//     end_years: '2023-12-31 23:59:59',
//     years: 2023,
//     months: '02',
//     date: 28,
//     hours: 8,
//     minutes: 44,
//     seconds: 6,
//     milliseconds: 965
//   }

```

#### 点调用示例:

```javascript
/**
 * g_time() 
 * 方式: 函数调用
 * 作用: 格式化并解析指定时间点可得到的全部信息
 * 返回: object对象
 */
console.log("2023-2-28 8:50:11".g_time_format());
// 输出
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
```

# 目录

## object

*   .g\_object\_to\_map(object) json对象 转 map
*   .g\_object\_to\_json(param) json对象 转 json字符串
*   .g\_object\_length(object) 返回json对象节点数
*   .g\_object\_for(object, callback) 循环出json对象 value
*   .g\_object\_keys\_values\_to\_arr(object) 将 json对象 的 key和 value 分离成数组
*   g\_orm\_insert(table\_name, params\_object\_arr) object数组转sql insert语句

## map

*   .g\_map\_to\_object(map) map 转 json 对象
*   .g\_map\_to\_json(map) map 转 json 字符串

## json&#x20;

*   .g\_json\_to\_map (json) json字符串 转 map

## string

*   .g\_string\_replace\_all(string, s1, s2) 替换字符串中的全部的指定字符串,将s1替换成s2
*   g\_string\_to\_utf8\_en(str) 将字符串中字符的ascii编码不是 32\~126 (即所有英文字母和常用符号)的全部转换成utf8编码
*   g\_string\_to\_utf8\_cn(str) 将字符串中所有的汉字全部转换成utf8编码
*   g\_string\_to\_utf8(str) 字符串中除了英文字母外所有字符都转换成utf8编码
*   g\_utf8\_to\_string(str) 字符串中所有utf8编码都转换成字符
*   g\_random\_string(len, charStr) 生成随机字符串

## array

*   .g\_arr\_for(arr, callback) 循环数组对象节点

## 时间

*   g\_time() 获取当前时间点的全部信息
*   .g\_time\_format() 解析一个时间的全部信息
*   .g\_time\_ago(num) 一个时间点以前的信息
*   .g\_time\_add(num) 一个时间点以后的信息
*   g\_time\_between(time1,time2) 判断前者的时间是否在后者时间之前
*   g\_time\_diff(time1,time2) 计算两个时间差的所有详细信息

## other

*   g\_uuid() 生成唯一uuid
*   g\_regular\_folder(folder\_name) 文件夹名称是否合法

# 实例

```javascript
require("daimazun");

let object_demo = {
    name: "小明",
    age: 18,
    friends: {
        name: '小红',
        age: 17
    }
}

// object 转 map
console.log(object_demo.g_object_to_map());
//  {
//   'name' => '小明',
//   'age' => 18,
//   'friends' => { name: '小红', age: 17 }
// }

// object 转 map 转 object
console.log(object_demo.g_object_to_map().g_map_to_object());
// { name: '小明', age: 18, friends: { name: '小红', age: 17 } }

//其他关于 map<=>object<=>json 字符串之间互转 同理调用即可,优雅~,唯一要注意的是每个后面都要带括号

// object 转 json 字符串 后, 将 字符串中所有的 8 全部替换成 99999
console.log(object_demo.g_object_to_json().g_string_replace_all(8, 99999));
// {"name":"小明","age":199999,"friends":{"name":"小红","age":17}}

// 将 object key与value 剥离,行程数组
console.log(object_demo.g_object_keys_values_to_arr());
// {
//   keys: [ 'friends', 'age', 'name' ],
//   values: [ { name: '小红', age: 17 }, 18, '小明' ]
// }

// 遍历 object
object_demo.g_object_for((key, value) => {
    console.log(key, '----', value)
})
// name ---- 小明
// age ---- 18
// friends ---- { name: '小红', age: 17 }

// 遍历数组
let arr_demo = [1, 2, 333, 444];
arr_demo.g_arr_for((key, value) => {
    console.log(key, "----", value)
})
// 0 ---- 1
// 1 ---- 2
// 2 ---- 333
// 3 ---- 444

// 返回 object 一阶节点数目
console.log(object_demo.g_object_length());
// 3



// for in 正常调用,优雅~
let list1 = [1, 2, 3, 45, 90]
for (let i in list1) {
    console.log(i)
}
// 0
// 1
// 2
// 3
// 4


///////////////////////////////////////


// 时间当前时间的所有信息
console.log('获取当前时间的全部信息',g_time(),`当前标准时间`,g_time().time)
//{
//   time: '2022-10-28 16:58:29',
//   time_s1: '2022-10-28 16:58:29.756',
//   time_s2: 'October 28 2022, 4:58:29 pm',
//   week: 5,
//   M: '10',
//   MM: '10',
//   MMM: 'Oct',
//   MMMM: 'October',
//   Q: '4',
//   D: '28',
//   DD: '28',
//   d: '5',
//   ddd: 'Fri',
//   dddd: '星期五',
//   w: '44',
//   A: 'PM',
//   a: 'pm',
//   YYYY: '2022',
//   YY: '22',
//   HH: '16',
//   H: '16',
//   hh: '04',
//   h: '4',
//   m: '58',
//   mm: '58',
//   s: '29',
//   ss: '29',
//   sss: '756',
//   X: '1666947509',
//   x: 1666947509756,
//   start_day: '2022-10-28 00:00:00',
//   start_week: '2022-10-23 00:00:00',
//   start_isoWeek: '2022-10-24 00:00:00',
//   start_month: '2022-10-01 00:00:00',
//   start_years: '2022-01-01 00:00:00',
//   end_day: '2022-10-28 23:59:59',
//   end_week: '2022-10-29 23:59:59',
//   end_isoWeek: '2022-10-30 23:59:59',
//   end_month: '2022-10-31 23:59:59',
//   end_years: '2022-12-31 23:59:59',
//   years: 2022,
//   months: '10',
//   date: 28,
//   hours: 16,
//   minutes: 58,
//   seconds: 29,
//   milliseconds: 756
// }

// 解析当前时间,获取当前时间点可以获得的所有信息
// 以时间或以时间戳为参数
console.log(('2022-10-28 16:19:54').g_time_format())
// 以时间戳为参数
// console.log((Date.now()).g_time_format())
//{
//   time: '2022-10-28 16:25:12', // 时间
//   time_s1: '2022-10-28 16:25:12.323', //精确到毫秒的时间
//   time_s2: 'October 28 2022, 4:25:12 pm', // 特殊标准化时间
//   week: 5, //星期几,1~7
//   M: '10',//单位月份
//   MM: '10',//双位月份
//   MMM: 'Oct',//缩写英文月份
//   MMMM: 'October',//月份,英文全称
//   Q: '4',//季度
//   D: '28',//天数,单位
//   DD: '28',//天数,双位
//   d: '5',//星期,1~7,字符串
//   ddd: 'Fri',//星期,英文缩写
//   dddd: '星期五',//星期,中文
//   w: '44',//年份中的第几周	如42：表示第42周
//   A: 'PM',//大写上午下午
//   a: 'pm',//小写上午下午
//   YYYY: '2022',//4位完整年份
//   YY: '22',//年份
//   HH: '16',//小时，24小时制，有前导零	00到23
//   H: '16',//小时，24小时制，无前导零	0到23
//   hh: '04',//小时，12小时制，有前导零	00到12
//   h: '4',//小时，12小时制，无前导零	00到12
//   m: '25',//没有前导零的分钟数	0到59
//   mm: '25',//有前导零的分钟数	00到59
//   s: '12',//没有前导零的秒数	1到59
//   ss: '12',//有前导零的描述	01到59
//   sss: '323',//毫秒精度
//   x: '1666945512',//时间戳,秒级精度
//   X: 1666945512323,//时间戳.毫秒级精度
//   start_day: '2022-10-28 00:00:00',// 当日最开始的时间
//   start_week: '2022-10-23 00:00:00',// 上周末最开始的时间
//   start_isoWeek: '2022-10-24 00:00:00',// 本周一最开始的时间
//   start_month: '2022-10-01 00:00:00',//本月的第一天
//   start_years: '2022-01-01 00:00:00',//今年的第一天
//   end_day: '2022-10-28 23:59:59',//今天最后的时间
//    end_week: '2022-10-30 23:59:59',//本周六最后的时间
//   end_isoWeek: '2022-10-30 23:59:59',//本周日最后时间
//   end_month: '2022-10-31 23:59:59',// 本页最后一天的最后时间
//   end_years: '2022-12-31 23:59:59',//当前时间点所处年份的最后一天
//   years: 2022,// 年份
//   months: '10',//月
//   date: 28,//日
//   hours: 16,//时
//   minutes: 25,//分
//   seconds: 12,//秒
//   milliseconds: 323//毫秒
// }


// 时间计算,计算指定时间以前的所有信息
console.log(('2022-10-28 16:19:54').g_time_ago(3))
//{
//   year: '2019-10-28 16:19:54', //3年前
//   month: '2022-07-28 16:19:54', //3个月前
//   week: '2022-10-25 16:19:54',   //3个星期前
//   day: '2022-10-25 16:19:54',    // 3天前
//   hour: '2022-10-28 13:19:54',   // 3个小时前
//   minute: '2022-10-28 16:16:54', //3分钟前
//   second: '2022-10-28 16:19:51', //3秒前
//   milliseconds: '2022-10-28 16:19:53.997' //3个时间戳单位以前
// }



// 时间计算,一个时间点的加
console.log(('2022-10-28 16:19:54').g_time_add(3))
// 参数含义和g_time_ago相同
//{
//   year: '2025-10-28 16:19:54',
//   month: '2023-01-28 16:19:54',
//   week: '2022-11-18 16:19:54',
//   day: '2022-10-31 16:19:54',
//   hour: '2022-10-28 19:19:54',
//   minute: '2022-10-28 16:22:54',
//   second: '2022-10-28 16:19:57',
//   milliseconds: '2022-10-28 16:19:54.003'
// }

// 判断前者的时间是否在后者时间之前
console.log(g_time_between("2022-10-28 16:47:35",'2022-10-29 16:47:42'))
// false


// 计算两个时间差的所有详细信息
console.log(g_time_diff("2024-10-29 16:47:35",'2022-10-28 16:47:42'))
//{
//   year: 2, // 相差年份
//   Q: 8,//相差季度
//   month: 24, //相差月份
//   week: 104,//相差星期数
//   day: 731,//相差天数
//   hour: 17567,//相差小时数
//   minute: 1054079,//相差多少分钟
//   second: 63244793,//相差多少秒
//   milliseconds: 63244793000//相差多少个毫秒,相差多少时间戳值
// }

console.log(g_uuid())
// 5df2e93056a011edb95a577e12987d21



let str = `{"content-disposition":"form-data; name=\"file4\"; filename=\"高にほんご.sql\"","content-type":"application/x-sql"}`;


let str = `{"content-disposition":"form-data; name=\"file4\"; filename=\"高にほんご.sql\"","content-type":"application/x-sql"}`;


console.log(g_string_to_utf8_cn(str))
console.log(g_string_to_utf8_en(str))
console.log(g_string_to_utf8(str))
console.log(g_utf8_to_string(g_string_to_utf8_en(str)))
//{"content-disposition":"form-data; name="file4"; filename="%E9%AB%98にほんご.sql"","content-type":"application/x-sql"}
// {"content-disposition":"form-data; name="file4"; filename="%E9%AB%98%E3%81%AB%E3%81%BB%E3%82%93%E3%81%94.sql"","content-type":"application/x-sql"}
// %7B%22content-disposition%22:%22form-data;%20name=%22file4%22;%20filename=%22%E9%AB%98%E3%81%AB%E3%81%BB%E3%82%93%E3%81%94.sql%22%22,%22content-type%22:%22application/x-sql%
// 22%7D
// {"content-disposition":"form-data; name="file4"; filename="高にほんご.sql"","content-type":"application/x-sql"}

// 判断文件是否是video
console.log(g_is_video("2..9.txt.mp3"));
// true
console.log(g_is_video("2..9.txt.mp4"));
// true


```

![](https://gitee.com/gaojianstyle/img_md/raw/master/npm/daimazun/309188b6cad9e71e9ec5be063dfd1a5.jpg)

可以搭配使用原型链扩展的 g\_orm\_insert 方法来搭配使用

```JavaScript
let arr1 = [
    {
        file_id: g_uuid(), // 主键,生成随机字符串代替
        originalFilename: "文件名",
        time_creat: Date.now().g_time_format().time
    },
    {
        file_id: g_uuid(), // 主键,生成随机字符串代替
        originalFilename: "文件名",
        time_creat: Date.now().g_time_format().time
    },
    {
        file_id: g_uuid(), // 主键,生成随机字符串代替
        originalFilename: "文件名",
        time_creat: Date.now().g_time_format().time
    },
]

await db.sql(g_orm_insert('file', arr1)).then((r) => {
    // console.log(r)
}).catch(e => {
    console.log('发生错误:', e)
    throw e;
})

console.log("object arr转换成insert sql语句:", g_orm_insert('file', arr1));
//object arr转换成insert sql语句: insert into file(time_creat,originalFilename,file_id) values('2022-11-10 02:12:36','文件名','da21aba0b49b4ff687628c64830944d1'),('2022-11-10 02:12:36','文件名','0cb4944bc2624138a6196922d1e6ae51'),('2022-11-10 02:12:36','文件名','a6bae584a30648709c67f7524cb2dcb1')

console.log("文件名合法吗?", g_regular_folder("con"), g_regular_folder("con11con2"), g_regular_folder("/con11con2"))
// 文件名合法吗? false true false
// 注: con 是系统保留文件夹名称,还有很多不一一列举



console.log("以小写与大写英文和数字,随机生成字符串:", g_random_string(30))
console.log("以数字,随机生成字符串:", g_random_string(30, 'number'))
console.log("以小写英文,随机生成字符串:", g_random_string(30, 'en'))
console.log("以小写与大写英文,随机生成字符串:", g_random_string(30, 'en_EN'))
console.log("以小写与数字,随机生成字符串:", g_random_string(30, 'en_number'))
console.log("以大写英文与数字,随机生成字符串:", g_random_string(30, 'EN_number'))
console.log("以指定的字符串生成,生成随机生成字符串:", g_random_string(30, '我爱你地球'))
// 以小写与大写英文和数字,随机生成字符串: cTowPTzg2aPBGCI4Lsi9ukGpFI5SuE
// 以数字,随机生成字符串: 469654837813175089919362756405
// 以小写英文,随机生成字符串: kuyqpjnarorphermoedagrvgsghrjs
// 以小写与大写英文,随机生成字符串: EUTnxbvdrYQHipCSATliDAsIngePgA
// 以小写与数字,随机生成字符串: ve8hie7bl1gghrmn2t71nu9dhbfoyi
// 以大写英文与数字,随机生成字符串: 6FWEYLC99WVA0O39Y8XIRIK1SBH4SK
// 以指定的字符串生成,生成随机生成字符串: 爱球地我地我爱你我我你你你你我地地球你地你我你你球你我爱你球
```

