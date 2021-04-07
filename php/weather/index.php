<?php

//跨域配置
header('Access-Control-Allow-Origin:*');
//设置文本类型
header('Content-type: application/json;charset=utf8');
//设置时区
date_default_timezone_set('PRC');

if(!isset($_GET['code']) || $_GET['code'] === '') {
    $code = '101280101';
}else {
    //获取所有的城市code
    $code_all = file_get_contents('./citycode.json');
    $code_all = json_decode($code_all,true)['code'];
    $now = htmlspecialchars($_GET['code']);
    if(foundCode($now, $code_all)) {
        $code = $now;
    }else {
        echo json_encode(array(
            "error" => 400,
            "msg" => "code error!"
        ));
        return false;
    }
}

$url = 'https://d1.weather.com.cn/sk_2d/'.$code.'.html?_='.msectime();
$weather = send_get($url);
$first = stripos($weather, '{');
$next = strripos($weather, '}');
//echo $weather;
//echo $first;
//echo $next;
echo json_encode(array(
    "error" => 0,
    "data" => json_decode(substr($weather, $first, $next - $first + 1))
));

//GET请求的方法
function send_get($url) {

    $curl = curl_init();
    //设置抓取的url
    curl_setopt($curl, CURLOPT_URL, $url);
    //设置头文件的信息作为数据流输出
//    curl_setopt($curl, CURLOPT_HEADER, 1);
    //
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
    //设置获取的信息以文件流的形式返回，而不是直接输出。
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array(
        'Referer: https://m.weather.com.cn/'
    ));
    //执行命令
    $data = curl_exec($curl);
    //关闭URL请求
    curl_close($curl);
    //显示获得的数据
    return $data;

}

// 获取十三位时间戳
function msectime() {
    list($msec, $sec) = explode(' ', microtime());
    $msectime = (float)sprintf('%.0f', (floatval($msec) + floatval($sec)) * 1000);
    return $msectime;
}

//查询当前城市code的方法
function foundCode ($now,$code) {
    $flag = false;
    foreach ($code as $item) {
        if($now === $item['d1']) {
            $flag = true;
        }
    }
    return $flag;
}
