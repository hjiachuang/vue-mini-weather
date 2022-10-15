<?php
error_reporting(0);           // 不打印错误信息

header('Access-Control-Allow-Origin:*');                    // 跨域配置
header('Content-type: application/json;charset=utf-8');     // 设置文本类型
date_default_timezone_set('PRC');                           // 设置时区

require_once 'function.php';                    //载入各种函数方法汇总文件

$location_type_list = ['0', '1', '2', '3'];     // 地址类型白名单

//判断是否传递了地址类型参数和天气类型参数和是否语义化
if(!isset($_GET['location_type'])) {
    $location_type = '0';
}else {
    // 判断地址类型是否正确，不正确直接用ip定位
    if (in_array($_GET['location_type'], $location_type_list)) {
        $location_type = htmlentities($_GET['location_type']);
    } else {
        $location_type = '0';
    }
}

// 使用IP定位
if ($location_type === '0') {
    $position = position_by_ip();
}

// 使用经纬度定位
if ($location_type === '1') {
    // 如果没传经纬度直接结束并返回错误
    if (!isset($_GET['lng'], $_GET['lat'])) return_err(10002);  // 参数错误
    // 判断传的是不是经纬度数值
    if (preg_match('/^\d*(\.\d*)?$/', $_GET['lng']) and preg_match('/^\d*(\.\d*)?$/', $_GET['lat'])) {
        $lng = htmlentities($_GET['lng']);
        $lat = htmlentities($_GET['lat']);
        $position = position_by_lng_and_lat($lng, $lat);
    } else {
        return_err(10002);  // 参数错误
    }
}

// 使用传递过来的省市县信息定位
if ($location_type === '2') {
    // 如果没传省市县参数直接结束并返回错误
    if (!isset($_GET['province'], $_GET['city'], $_GET['area'])) return_err(10002);  // 参数错误
    $province = htmlentities($_GET['province']);
    $city = htmlentities($_GET['city']);
    $area = htmlentities($_GET['area']);
    // 如果没有传详细地址，则直接拼接省市县
    if (isset($_GET['address'])) {
        $address = htmlentities($_GET['address']);
    } else {
        $address = $province . $city . $area;
    }
    $position = position_by_user_message($address);
}

// 判断是否是通过传递过来的code获取天气，如果是，则直接从参数中获取code，如果不是，再去查询code
if ($location_type !== '3') {
    //获取所有的城市code
    $code_json_file = file_get_contents('./citycode.json');
    $code_array = json_decode($code_json_file, true);
    //查询当前城市对应的code
    $code = found_code($position['province'], $position['city'], $position['area'], $code_array);
} else {
    // 如果没传城市code直接结束并返回错误
    if (!isset($_GET['code'])) return_err(10002);  // 参数错误
    // 判断传递的城市code是否是9位数字
    if (preg_match('/^\d{9}$/', $_GET['code'])) {
        $code = htmlentities($_GET['code']);
        $position = null;
    } else {
        return_err(10002);  // 参数错误
    }
}

return_data(array(
    'error' => 0,
    'time' => date('Y-m-d H:i:s'),
    'data' => array(
        "weather" => weather_real($code, ['referer: www.weather.com.cn']),
        "location" => $position
    ),
    'ps' => 'error字段将被抛弃，之后状态码统一用code字段返回，请知晓。'
));