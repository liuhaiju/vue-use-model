// 向数组对象中添加属性和属性值
function addNewKeyAndValue(init_array_object,new_key,new_value) {
    init_array_object.forEach(item_object => {
        item_object[new_key] = new_value
    })
    return init_array_object
}

/**
 * 根据新数组改变数组中对象的值
 */
function accordingArraryKeyAssignment(Assigned_array,Assignment_array,key_value) {
    let get_arrary_1 = JSON.parse(JSON.stringify(Assigned_array))
    let get_arrary_2 = JSON.parse(JSON.stringify(Assignment_array))
    for(let i=0;i<get_arrary_1.length;i++) {
        for(let j=0;j<get_arrary_2.length;j++) {
            if(get_arrary_2[j].payment) {
                if(get_arrary_1[i].payment[key_value] === get_arrary_2[j].payment[key_value]) {
                    get_arrary_1[i] = get_arrary_2[j]
                }
            }
        }
    }
    return get_arrary_1
}

// 根据数组对象中对象中的值，创建对象
/**
 * {
 *  ket: {内容}
 * }
 */
function accordingKeyClass(arrary_object,key_value) {
    let new_arrary_object = {}
    arrary_object.forEach(item => {
        if(Object.keys(new_arrary_object).indexOf(""+item[key_value]) === -1) {
            new_arrary_object[item[key_value]] = []
        }
        new_arrary_object[item[key_value]].push(item)
    })
    return new_arrary_object
}

// 删除数组对象中指定key对应的对象
function deleteArraryObjectKeyObject(get_arrary_object,current_key,current_deleting_value) {
    let newArr = get_arrary_object.filter(item => item[current_key] !== current_deleting_value);
    return newArr
}

// 获取数组对象中某值对应的下标
function getArrayObjectSubscript(get_arrary_object, object_key, object_key_value) {
    let index = get_arrary_object.findIndex(function(item) {
        return item[object_key] === object_key_value;
    })
    return index
}

// js判断数组中对象是否存在某个值
function resultOneBoolean(arr, key_name, key_value) {
    let result_one = arr.some(function(item) {
        return (item[key_name] === key_value)
    })
    return result_one
}
export {
    addNewKeyAndValue,
    accordingArraryKeyAssignment,
    accordingKeyClass,
    deleteArraryObjectKeyObject,
    getArrayObjectSubscript,
    resultOneBoolean
}