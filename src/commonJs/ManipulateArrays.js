// export default {
//     // 数组排序,正序
//     ArraySort(ArraryValue) {
//         let s = ''
//         for(let i=0;i<ArraryValue.length;i++) {
//             for(let j=0;j<ArraryValue.length-1;j++) {
//                 if (ArraryValue[j].loan_period > ArraryValue[j + 1].loan_period){ 
//                     s = ArraryValue[j]; 
//                     ArraryValue[j]=ArraryValue[j+1]; 
//                     ArraryValue[j+1]=s; 
//                 }
//             }
//         }
//         return ArraryValue
//     },
//     // 生成随机数
//     // 生成随机数的范围为min～max-1
//     getRndInteger(min, max) {
//         let a = min,b=max;
//         let c = Math.floor(Math.random() * (b - a)) + min;
//         if(Number(c)<10) {
//             c = `00${c}`
//         }
//         if(Number(c)>=10&&Number(c)<100) {
//             c = `0${c}`
//         }
//       return c
//     },
//     /*
// 	指定长度和基数
//     生成uuid
//     */
//     uuid2(len, radix) {
//         var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
//         var uuid = [],
//             i;
//         radix = radix || chars.length;

//         if (len) {
//             // Compact form
//             for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
//         } else {
//             // rfc4122, version 4 form
//             var r;

//             // rfc4122 requires these characters
//             uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
//             uuid[14] = '4';

//             // Fill in random data.  At i==19 set the high bits of clock sequence as
//             // per rfc4122, sec. 4.1.5
//             for (i = 0; i < 36; i++) {
//                 if (!uuid[i]) {
//                     r = 0 | Math.random() * 16;
//                     uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
//                 }
//             }
//         }

//         return uuid.join('');
//     }
// }
// 数组排序,正序
function ArraySort(ArraryValue) {
    let s = ''
    for(let i=0;i<ArraryValue.length;i++) {
        for(let j=0;j<ArraryValue.length-1;j++) {
            if (ArraryValue[j].loan_period > ArraryValue[j + 1].loan_period){ 
                s = ArraryValue[j]; 
                ArraryValue[j]=ArraryValue[j+1]; 
                ArraryValue[j+1]=s; 
            }
        }
    }
    return ArraryValue
}
// 生成随机数
// 生成随机数的范围为min～max-1
function getRndInteger(min, max) {
    let a = min,b=max;
    let c = Math.floor(Math.random() * (b - a)) + min;
    if(Number(c)<10) {
        c = `00${c}`
    }
    if(Number(c)>=10&&Number(c)<100) {
        c = `0${c}`
    }
    return c
}
/*
指定长度和基数
生成uuid
*/
function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [],
        i;
    radix = radix || chars.length;
    if (len) {
        // Compact form
        for (i = 0; i < len; i++) {
            uuid[i] = chars[0 | Math.random() * radix]
        }
    } else {
        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
}

export {
    ArraySort,
    getRndInteger,
    uuid
}