<?php

// 跨域配置
header('Access-Control-Allow-Origin:*');
// 设置文本类型
header('Content-type: application/json;charset=utf-8');
// 设置时区
date_default_timezone_set('PRC');

//载入各种函数方法汇总文件
require_once 'function.php';

//判断是否传递了地址类型参数和天气类型参数和是否语义化
if(!isset($_GET['location_type'])) {
    $location_type = '0';
}else {
    $location_type = htmlspecialchars($_GET['location_type']);
}

switch ($location_type) {

    case '0': // 使用IP定位
        $position = position_by_ip();
        break;

    case '1': // 使用经纬度定位
        if(empty($_GET['lng']) || empty($_GET['lat'])) {

            die(json_encode(array(
                'error' => '0',
                'msg' => 'Where is the longitude and latitude?'
            )));

        }
        $lng = $_GET['lng'];
        $lat = $_GET['lat'];
        $position = position_by_lng_and_lat($lng,$lat);
        break;

    case '2': // 使用传递过来的省市县信息定位
        if(empty($_GET['province']) || empty($_GET['city']) || empty($_GET['area'])) {

            die(json_encode(array(
                'error' => '0',
                'msg' => 'Where is the location information?'
            )));

        }
        $province = $_GET['province'];
        $city = $_GET['city'];
        $area = $_GET['area'];
        if(!empty($_GET['address'])) {
            $address = $_GET['address'];
        }else {
            $address = $province.''.$city.''.$area;
        }
        $position = position_by_user_message($province,$city,$area,$address);
        break;

}

//获取所有的城市code
$code_all = file_get_contents('./citycode.json');
$code_all = json_decode($code_all,true)['code'];

//查询当前城市对应的code
$code = foundCode($position['province'],$position['city'],$position['area'],$code_all);

$url = 'https://d1.weather.com.cn/sk_2d/'.$code.'.html?_='.msectime();
$weather = send_get($url);
$first = stripos($weather, '{');
$next = strripos($weather, '}');
//echo $weather;
//echo $first;
//echo $next;

echo json_encode(array(
    "error" => 0,
    "data" => array(
        "weather" => json_decode(substr($weather, $first, $next - $first + 1), true),
        "location" => $position
    )
), JSON_UNESCAPED_UNICODE);
