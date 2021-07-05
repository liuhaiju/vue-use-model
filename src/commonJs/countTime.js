// 引入时间戳工具
import moment from 'moment'

// 记算时间时，分，秒函数方法
function CalculationTime(longTime,shortTime) {
    let time = Number(longTime) - Number(shortTime)
    // 剩余多少小时
    let h = parseInt(time/3600)
    // 剩余多少分钟
    let m = parseInt((Math.ceil(time - (h*3600)))/60)
    //剩余多少秒
    let s = Math.ceil(time - (m*60) - (h*3600))

    if(h<10) {
        h = '0'+h
    } else {
        h = h
    }
    if(m<10) {
        m = '0'+m
    } else {
        m = m
    }
    if(s<10) {
        s = '0'+s
    } else {
        s = s
    }
    let params = {
        h: h.toString(),
        m: m.toString(),
        s: s.toString()
    }
    return params
}

// 定时器
function Timer(bigTime,littleTime,callback) {
    let times = littleTime
    window.Timer_One = setInterval(() => {
        times = Number(times) + 1
        if(times >= bigTime) {
            clearInterval(window.Timer_One)
            let params = {
                timer_itself: window.Timer_One,
                time_object: CalculationTime(bigTime,times)
            }
            callback(0,params)
        } else {
            clearInterval(window.Timer_One)
            Timer(bigTime,times,callback)
            let params = {
                timer_itself: window.Timer_One,
                time_object: CalculationTime(bigTime,times)
            }
            callback(1,params)
        }
    },1000)
}

// 时间戳转换工具，需引入moment工具才可使用[timeValue是必传值，时间戳的数；weishu解析时间戳的位数]
function Timestamp(timeValue,timeFormatValue,weishu) {
    let ConversionValue
    let timeFormat = 'YYYY.MM.DD HH:mm:ss'
    if(timeFormatValue) {
        timeFormat = timeFormatValue
    } else {
        timeFormat = 'YYYY.MM.DD HH:mm:ss'
    }
    if(weishu == 13) {
        ConversionValue = moment(Number(timeValue)).format(timeFormat)
    }else {
        ConversionValue = moment.unix(Number(timeValue)).format(timeFormat)
    }
    return ConversionValue
}

// 轮询方法，每x秒获取一次结果
function pollingMethod(Seconds,callback) {
    let times = Seconds
    window.timely = setInterval(() => {
        times = Number(times) - 1
        if(Number(times) === 0) {
            clearInterval(window.timely)
            let params = {
                // 剩余秒数
                Seconds_remaining: times,
            }
            callback(0,params)
        } else {
            clearInterval(window.timely)
            pollingMethod(times,callback)
            let params = {
                // 剩余秒数
                Seconds_remaining: times,
            }
            callback(1,params)
        }
    }, 1000);
}
// 轮询方法，每x秒获取一次结果
function pollingMethodTwo(Seconds,callback) {
    let times = Seconds
    window.order_timer = setInterval(() => {
        times = Number(times) - 1
        if(Number(times) === 0) {
            clearInterval(window.order_timer)
            let params = {
                // 剩余秒数
                Seconds_remaining: times,
            }
            callback(0,params)
        } else {
            clearInterval(window.order_timer)
            pollingMethodTwo(times,callback)
            let params = {
                // 剩余秒数
                Seconds_remaining: times,
            }
            callback(1,params)
        }
    }, 1000);
}

// 轮询方法，每x秒获取一次结果
function pollingMethodThree(Seconds,callback) {
    let times = Seconds
    window.price_timer_value = setInterval(() => {
        times = Number(times) - 1
        if(Number(times) === 0) {
            clearInterval(window.price_timer_value)
            let params = {
                // 剩余秒数
                Seconds_remaining: times,
            }
            callback(0,params)
        } else {
            clearInterval(window.price_timer_value)
            pollingMethodThree(times,callback)
            let params = {
                // 剩余秒数
                Seconds_remaining: times,
            }
            callback(1,params)
        }
    }, 1000);
}



// 计算‘当前日期+x天之后的日期’
function XDaysLater(day_value) {
    let date1 = new Date();
    let date2 = new Date(date1);
    let result_date = date2.setDate(date1.getDate() + day_value);
    result_date = moment.unix(result_date).format('YYYY/MM/DD')
    result_date =new Date(`${result_date} 16:00:00`).getTime()/1000
    return result_date
}

// 时间戳比较--与当前时间，大于当前时间，返回true
function moreThanTheCurrentTime(compare_time) {
    // 当前时间的时间戳，精确到秒
    var tmp = Date.parse( new Date() ).toString().substr(0,10);
    if(Number(compare_time)>Number(tmp)) {
        return true
    } else {
        return false
    }
}

export {
    CalculationTime,
    Timestamp,
    Timer,
    pollingMethod,
    XDaysLater,
    pollingMethodTwo,
    pollingMethodThree,
    moreThanTheCurrentTime
}