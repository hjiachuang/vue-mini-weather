<?php
//腾讯Api_key
define('TX_KEY','这里替换为自己的腾讯地图API的key');

//通过ip地址获取详细位置信息方法
function position_by_ip() {

  $ip = get_ip();
  //腾讯api，通过ip地址获取详细定位。
  $tencent_api = "https://apis.map.qq.com/ws/location/v1/ip?key=".TX_KEY."&ip=$ip";
  $position_result = json_decode(send_get($tencent_api),true);
  if($position_result['status'] === 0) {
    if($position_result['result']['ad_info']['province'] === '' || $position_result['result']['ad_info']['city'] === '' || $position_result['result']['ad_info']['district'] === '') {
      return array(
          'province' => '广东省',
          'city' => '广州市',
          'area' => '天河区',
          'address' => '广东省广州市天河区天河路299号',
          'lng' => 113.32695,
          'lat' => 23.13374,
          'ip' => $ip,
          'error_msg' => '你可能在中国台湾省，亦或者不在中国，将显示默认的广东广州天气。'
      );
    }
    $province = $position_result['result']['ad_info']['province'];
    $city = $position_result['result']['ad_info']['city'];
    $district = $position_result['result']['ad_info']['district'];
    $address = $province.''.$city.''.$district;
    return array(
      'province' => $province,
      'city' => $city,
      'area' => $district,
      'address' => $address,
      'lng' => $position_result['result']['location']['lng'],
      'lat' => $position_result['result']['location']['lat'],
      'ip' => $ip,
      'error_msg' => '成功。'
    );
  }else {
    return array(
      'province' => '广东省',
      'city' => '广州市',
      'area' => '天河区',
      'address' => '广东省广州市天河区',
      'error_msg' => '定位失败(code: '.$position_result['status'].')，将显示默认的广东广州天气。'
    );
  }
}

//获取用户请求时的ip地址的方法
function get_ip() {
  if(getenv('HTTP_CLIENT_IP') && strcasecmp(getenv('HTTP_CLIENT_IP'), 'unknown')) {
      $ip = getenv('HTTP_CLIENT_IP');
  } elseif(getenv('HTTP_X_FORWARDED_FOR') && strcasecmp(getenv('HTTP_X_FORWARDED_FOR'), 'unknown')) {
      $ip = getenv('HTTP_X_FORWARDED_FOR');
  } elseif(getenv('REMOTE_ADDR') && strcasecmp(getenv('REMOTE_ADDR'), 'unknown')) {
      $ip = getenv('REMOTE_ADDR');
  } elseif(isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], 'unknown')) {
      $ip = $_SERVER['REMOTE_ADDR'];
  }
  $res =  preg_match ( '/[\d\.]{7,15}/', $ip, $matches ) ? $matches [0] : '';
  return ($res);

}

//通过用户传递的经纬度获取详细位置信息方法
function position_by_lng_and_lat($lng,$lat) {

  $location = $lat.','.$lng;
  $tencent_api = "https://apis.map.qq.com/ws/geocoder/v1/?location=$location&key=".TX_KEY;
  $position_result = json_decode(send_get($tencent_api),true);
  if($position_result['status'] === 0) {
    $province = $position_result['result']['ad_info']['province'] !== '' ? $position_result['result']['ad_info']['province'] : '广东省';
    $city = $position_result['result']['ad_info']['city'] !== '' ? $position_result['result']['ad_info']['city'] : '广州市';
    $district = $position_result['result']['ad_info']['district'] !== '' ? $position_result['result']['ad_info']['district'] : '';
    if($position_result['result']['ad_info']['province'] == '' && $position_result['result']['ad_info']['city'] == ''){
        $district = '天河区';
    }
    $address = $position_result['result']['address'] !== '' ? $position_result['result']['address'] : $province.''.$city.''.$district;
    return array(
        'province' => $province,
        'city' => $city,
        'area' => $district,
        'address' => $address,
        'lng' => $position_result['result']['location']['lng'],
        'lat' => $position_result['result']['location']['lat'],
        'error_msg' => '成功。'
    );
  }else {
    return array(
      'province' => '广东省',
      'city' => '广州市',
      'area' => '天河区',
      'address' => '广东省广州市天河区',
      'error_msg' => '定位失败(code: '.$position_result['status'].')，将显示默认的广东广州天气。'
    );
  }
}

//通过用户传递的位置获取详细位置信息方法
function position_by_user_message($p,$c,$a,$ad) {

  $tencent_api = "https://apis.map.qq.com/ws/geocoder/v1/?address=$ad&key=".TX_KEY;
  $position_result = json_decode(send_get($tencent_api),true);
  if($position_result['status'] === 0) {
    return array(
      'province' => $p,
      'city' => $c,
      'area' => $a,
      'address' => $ad,
      'lng' => $position_result['result']['location']['lng'],
      'lat' => $position_result['result']['location']['lat'],
      'error_msg' => '成功。'
    );
  }else {
    return array(
      'province' => '广东省',
      'city' => '广州市',
      'area' => '天河区',
      'address' => '广东省广州市天河区',
      'error_msg' => '定位失败(code: '.$position_result['status'].')，将显示默认的广东广州天气。'
    );
  }
  

}

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
function foundCode ($pr,$ci,$ar,$code) {
  foreach ($code as $item) {
      if(strpos($ar,$item['d2']) !== false) {
          if(strpos($pr,$item['d4']) !== false) {
              return $item['d1'];
          }
      }
  }
  foreach ($code as $item) {
      if(strpos($ci,$item['d2']) !== false) {
          if(strpos($pr,$item['d4']) !== false) {
              return $item['d1'];
          }
      }
  }
}