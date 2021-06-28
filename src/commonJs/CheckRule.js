// 高经度计算
import {Decimal} from 'decimal.js';
Decimal.set({ toExpNeg: -10 });

// ====================公共方法======================
import { Multiplication,division } from "@/commonJs/countRules.js"

// 数值向上取整到百位
function roundToHundreds(num) {
    let value = division(num,100).toString()
    value = Math.ceil(value)
    value = Multiplication(value,100)
    return value
}
// 输入整数的长度校验，限制整数位的长度
function ntegerCheck(newName,num) {
    if(newName.split('.')[0] != undefined) {
        if(newName.split('.')[0].length>=num) {
            var c = newName.split('.')[0].substr(0,num)
            if(newName.split('.')[1]!=undefined) {
                return newName = c+"."+newName.split('.')[1]
            } else {
                return c
            }
        } else {
            return newName
        }
    } else {
        return newName
    }
}
// 保留小数位向下取整
// value:要计算的值，Digit:保留的位数
function DecimalDown(value,Digit) {
    let newName = value.toString()
    if(newName.split('.')[1] != undefined) {
        if(newName.split('.')[1].length>=Digit) {
            var c = newName.split('.')[1].substr(0,Digit)
            if(Number(Digit)==0) {
                newName = newName.split('.')[0]
            } else {
                newName = newName.split('.')[0]+"."+c
            }
            return new Decimal(newName).toString()
        } else {
            return newName
        }
    } else {
        return newName
    }
}
//  向上取整，val值，digit精度
function liandongDigits(val,digit) {
    // val = val.toString();
    let endVal = '';
    // 10的精度次幂
    digit = Math.pow(10,digit)
    // 处理过的数字
    let newNum = new Decimal(val).mul(new Decimal(digit))
    // console.log(val,new Decimal(digit),newNum)
    endVal = new Decimal(Math.ceil(newNum)).div(new Decimal(digit)).toString()
    return endVal
}
//校验传入的字符串，指允许输入数字、小数点，[开关控制是否可以输入正负号,true可以，false不可以]
function inputTextCheck(newName,isCanInputNegative) {
    newName = newName.toString()
    if(isCanInputNegative) {
        newName = newName.replace(/[^\d.-]/g, "")
    } else {
        newName = newName.replace(/[^\d.]/g, "")
    }
    newName = newName.replace(/^\./g, "")
    newName = newName.replace(/\.{2,}/g, ".")
    newName = newName.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")
    if (newName.charAt(0) == 0 || newName.charAt(0) == "-") {
        var start = 0;
        var end = 0;
        if (newName.charAt(1)) {
            if (newName.charAt(2)) {
                if (newName.charAt(0) == "-" && newName.charAt(1) == 0 && newName.charAt(2) != ".") {
                    for (var i = 2; i < newName.length; i++) {
                        end = i;
                        if (newName.charAt(i) != 0) {
                            break;
                        }
                    }
                    newName = newName.substring(end, newName.length);
                    newName = -newName;
                }
            }
            if (newName) {
                if (newName.charAt(1)) {
                    if (newName.charAt(0) != "-" && newName.charAt(1) != ".") {
                        for (var i = 1; i < newName.length; i++) {
                            end = i;
                            if (newName.charAt(i) != 0) {
                                break;
                            }
                        }
                        newName = newName.substring(end, newName.length);
                    }
                }
            }
        }
    }
    return newName
}
// 只能输入整数
// function inputNumber

// 字符串限制长度
function stringLimitLength(get_string,input_length) {
    let get_new_string = get_string.slice(0,input_length)
    return get_new_string
}

// numbet类型，只能输入整数，oninput阶段使用
function intValidator(value,input_length){
    value = value.replace(/\D+/, "");
    if(value.length > 0){
        if(value.length > 1 && value[0] == 0){
            value = value.substring(1, value.length);
        }
        //判断不要超过9位
        if(value.length>input_length){
            value=value.slice(0,input_length)
        }else{
            value = value;
        } 
    }
    return value?value:JSON.stringify(value)
}

export {
    ntegerCheck,
    DecimalDown,
    liandongDigits,
    inputTextCheck,
    roundToHundreds,
    stringLimitLength,
    intValidator
}