// 高经度计算
import {Decimal} from 'decimal.js';
Decimal.set({ toExpNeg: -10 });
// ----------------------------------------------高精度计算，工具方法----------------------------------
// ---------------------2019.11.7高精度的乘法运算
function Multiplication(a,b) {
    let e = new Decimal(a).mul(new Decimal(b))
    return e.toString()
}
// --------------------2019.11.7高精度的除法运算
function division(a,b) {
    let f = new Decimal(a).div(new Decimal(b))
    return f.toString()
}
// -----------------------2019.11.7高精度的加法运算
function addition(a,b) {
    let g = new Decimal(a).add(new Decimal(b))
    return g.toString()
}
// ------------------------2019.11.7高精度的减法运算
function Subtraction(a,b) {
    let h = new Decimal(a).minus(new Decimal(b))
    return h.toString()
}
// ===================2020.04.30高精度计算绝对值
function absoluteValue(a) {
    let absoluteValue = new Decimal(a).absoluteValue()
    return absoluteValue.toString()
}
export {
    Multiplication,
    division,
    addition,
    Subtraction,
    absoluteValue
}