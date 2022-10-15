<?php

require_once 'config.php';  // 导入配置信息

/**
 * 结束当前程序并返回数据（code:0）
 * @param array $data 要返回的数据内容
 * @return void 无返回值
 */
function return_data(array $data): void {
  $default = array(
      'code' => 0
  );
  die(json_encode(array_merge($default, $data), JSON_UNESCAPED_UNICODE));
}

/**
* 结束当前程序并返回错误代码和错误信息（code:非0）
* @param int $code 错误代码
* @param int $status 状态码
* @param array $extra 额外的数据
* @return void 无返回值
*/
function return_err(int $code, int $status = 200, array $extra=[]): void {
  $default = array(
      'code' => $code,
      'msg' => ERROR_MESSAGE[$code]
  );
  send_status($status);
  die(json_encode(array_merge($default, $extra), JSON_UNESCAPED_UNICODE));
}

/**
 * 返回HTTP响应码
 * @param int $status HTTP响应码
 * @return void 无返回值
 */
function send_status(int $status = 200): void {
  static $_status = array(
      // Informational 1xx
      100 => 'Continue',
      101 => 'Switching Protocols',

      // Success 2xx
      200 => 'OK',
      201 => 'Created',
      202 => 'Accepted',
      203 => 'Non-Authoritative Information',
      204 => 'No Content',
      205 => 'Reset Content',
      206 => 'Partial Content',

      // Redirection 3xx
      300 => 'Multiple Choices',
      301 => 'Moved Permanently',
      302 => 'Moved Temporarily ',  // 1.1
      303 => 'See Other',
      304 => 'Not Modified',
      305 => 'Use Proxy',
      // 306 is deprecated but reserved
      307 => 'Temporary Redirect',

      // Client Error 4xx
      400 => 'Bad Request',
      401 => 'Unauthorized',
      402 => 'Payment Required',
      403 => 'Forbidden',
      404 => 'Not Found',
      405 => 'Method Not Allowed',
      406 => 'Not Acceptable',
      407 => 'Proxy Authentication Required',
      408 => 'Request Timeout',
      409 => 'Conflict',
      410 => 'Gone',
      411 => 'Length Required',
      412 => 'Precondition Failed',
      413 => 'Request Entity Too Large',
      414 => 'Request-URI Too Long',
      415 => 'Unsupported Media Type',
      416 => 'Requested Range Not Satisfiable',
      417 => 'Expectation Failed',

      // Server Error 5xx
      500 => 'Internal Server Error',
      501 => 'Not Implemented',
      502 => 'Bad Gateway',
      503 => 'Service Unavailable',
      504 => 'Gateway Timeout',
      505 => 'HTTP Version Not Supported',
      509 => 'Bandwidth Limit Exceeded'
  );
  if (array_key_exists('SERVER_PROTOCOL', $_SERVER)) {
      $header = $_SERVER['SERVER_PROTOCOL'] . ' ';
  } else {
      $header = 'HTTP/1.1 ';
  }
  if(array_key_exists($status, $_status)) {
      $header .= $status . ' ' . $_status[$status];
  } else {
      $header .= '200 OK';
  }
  header($header);
}

/**
 * 通过ip地址获取详细位置信息方法
 * @return array
 */
function position_by_ip(): array {
  $user_ip = get_ip();     // 获取用户ip
  //腾讯api，通过ip地址获取详细定位。
  $tencent_api_url = 'https://apis.map.qq.com/ws/location/v1/ip?key='.TENCENT_MAP_KEY.'&ip='.$user_ip;
  $position_result = json_decode(send_get($tencent_api_url), true);
  if ($position_result['status'] === 0) {
      if (!array_key_exists('province', $position_result['result']['ad_info'])
          || !array_key_exists('city', $position_result['result']['ad_info'])
          ||  $position_result['result']['ad_info']['province'] === ''
          ||  $position_result['result']['ad_info']['city'] === ''
      ) {
          return array(
              'province' => '广东省',
              'city' => '广州市',
              'area' => '天河区',
              'address' => '广东省广州市天河区天河路299号',
              'lng' => 113.32695,
              'lat' => 23.13374,
              'ip' => $user_ip,
              'error_msg' => '定位失败，你可能不在中国，将显示默认的广东广州天气'
          );
      }
      $province = $position_result['result']['ad_info']['province'];
      $city = $position_result['result']['ad_info']['city'];
      $district = array_key_exists('district', $position_result['result']['ad_info']) && $position_result['result']['ad_info']['district'] !== '' ? $position_result['result']['ad_info']['district'] : $city;
      $address = array_key_exists('district', $position_result['result']['ad_info']) && $position_result['result']['ad_info']['district'] !== '' ? $province.$city.$district : $province.$city;
      return array(
          'province' => $province,
          'city' => $city,
          'area' => $district,
          'address' => $address,
          'lng' => $position_result['result']['location']['lng'],
          'lat' => $position_result['result']['location']['lat'],
          'ip' => $user_ip
      );
  } else {
      return array(
          'province' => '广东省',
          'city' => '广州市',
          'area' => '天河区',
          'address' => '广东省广州市天河区天河路299号',
          'lng' => 113.32695,
          'lat' => 23.13374,
          'ip' => $user_ip,
          'error_msg' => '定位失败，'.$position_result['message'].'，将显示默认的广东广州天气'
      );
  }
}

/**
 * 通过用户传递的经纬度获取详细位置信息方法
 * @param string $lng 经度
 * @param string $lat 纬度
 * @return array
 */
function position_by_lng_and_lat(string $lng, string $lat): array {
  $location = $lat.','.$lng;  // 用户传递的经纬度
  $tencent_api_url = 'https://apis.map.qq.com/ws/geocoder/v1/?location='.$location.'&key='.TENCENT_MAP_KEY;
  $position_result = json_decode(send_get($tencent_api_url), true);
  if ($position_result['status'] === 0) {
      if (!array_key_exists('province', $position_result['result']['address_component'])
          || !array_key_exists('city', $position_result['result']['address_component'])
          || $position_result['result']['address_component']['province'] === ''
          || $position_result['result']['address_component']['city'] === ''
      ) {
          return array(
              'province' => '广东省',
              'city' => '广州市',
              'area' => '天河区',
              'address' => '广东省广州市天河区天河路299号',
              'lng' => 113.32695,
              'lat' => 23.13374,
              'error_msg' => '定位失败，你可能不在中国，将显示默认的广东广州天气'
          );
      }
      $province = $position_result['result']['address_component']['province'];
      $city = $position_result['result']['address_component']['city'];
      $district = array_key_exists('district', $position_result['result']['address_component']) && $position_result['result']['address_component']['district'] !== '' ? $position_result['result']['address_component']['district'] : $city;
      $address = array_key_exists('district', $position_result['result']['address_component']) && $position_result['result']['address_component']['district'] !== '' ? $province.$city.$district : $province.$city;
      return array(
          'province' => $province,
          'city' => $city,
          'area' => $district,
          'address' => $address,
          'lng' => $lng,
          'lat' => $lat
      );
  } else {
      return array(
          'province' => '广东省',
          'city' => '广州市',
          'area' => '天河区',
          'address' => '广东省广州市天河区天河路299号',
          'lng' => 113.32695,
          'lat' => 23.13374,
          'error_msg' => '定位失败，'.$position_result['message'].'，将显示默认的广东广州天气'
      );
  }
}

/**
 * 通过用户传递的位置获取详细位置信息方法
 * @param string $ad 用户传递的位置信息
 * @return array
 */
function position_by_user_message(string $ad): array {
  $tencent_api_url = 'https://apis.map.qq.com/ws/geocoder/v1/?address='.$ad.'&key='.TENCENT_MAP_KEY;
  $position_result = json_decode(send_get($tencent_api_url), true);
  if ($position_result['status'] === 0) {
      if (!array_key_exists('province', $position_result['result']['address_components'])
          || !array_key_exists('city', $position_result['result']['address_components'])
          || !array_key_exists('district', $position_result['result']['address_components'])
          || $position_result['result']['address_components']['province'] === ''
          || $position_result['result']['address_components']['city'] === ''
      ) {
          return array(
              'province' => '广东省',
              'city' => '广州市',
              'area' => '天河区',
              'address' => '广东省广州市天河区天河路299号',
              'lng' => 113.32695,
              'lat' => 23.13374,
              'error_msg' => '定位失败，你可能不在中国，将显示默认的广东广州天气'
          );
      }
      $province = $position_result['result']['address_components']['province'];
      $city = $position_result['result']['address_components']['city'];
      $district = $position_result['result']['address_components']['district'] == '' ? $city : $position_result['result']['address_components']['district'];
      $address =  $position_result['result']['address_components']['district'] == '' ? $province.$city : $province.$city.$district;
      return array(
          'province' => $province,
          'city' => $city,
          'area' => $district,
          'address' => $address,
          'lng' => $position_result['result']['location']['lng'],
          'lat' => $position_result['result']['location']['lat']
      );
  } else {
      return array(
          'province' => '广东省',
          'city' => '广州市',
          'area' => '天河区',
          'address' => '广东省广州市天河区天河路299号',
          'lng' => 113.32695,
          'lat' => 23.13374,
          'error_msg' => '定位失败，'.$position_result['message'].'，将显示默认的广东广州天气'
      );
  }
}

/**
 * 获取实时天气预报
 * @param string $code 城市code
 * @param array $headers 请求携带的headers头
 * @return array|null
 */
function weather_real(string $code, array $headers): array|null {
  //实时天气api
  $url_real_weather = 'https://d1.weather.com.cn/sk_2d/'.$code.'.html?_='.millisecond_timestamp();
  //发送get请求
  $result_real_weather = send_get($url_real_weather,$headers);
  //判断是否能够获取实时天气数据
  if(strpos($result_real_weather,'dataSK')) {
      //截取{}中的json数据，为实时天气
      $first = stripos($result_real_weather, '{');
      $next = strripos($result_real_weather, '}');
      try {
          return json_decode(substr($result_real_weather, $first, $next - $first + 1), true);
      } catch (Exception) {
          return null;
      }
  }
  return null;
}

/**
 * 获取用户请求时的ip地址的方法
 * @return string
 */
function get_ip(): string {
  if (check_http_header_have_name('HTTP_CLIENT_IP')) {
      $ip = getenv('HTTP_CLIENT_IP');
  } elseif (check_http_header_have_name('HTTP_X_FORWARDED_FOR')) {
      $ip = getenv('HTTP_X_FORWARDED_FOR');
  } elseif (check_http_header_have_name('REMOTE_ADDR')) {
      $ip = getenv('REMOTE_ADDR');
  } else {
      $ip = '0.0.0.0';
  }
  $res = preg_match('/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/', $ip, $matches) ? $matches[0] : '0.0.0.0';
  return ($res);
}

/**
 * 判断HTTP请求中是否包含指定名称的请求头信息，是则返回内容，否则返回false
 * @param string $name HTTP中的请求头名称
 * @return bool|string
 */
function check_http_header_have_name(string $name): bool|string {
  return getenv($name) && strcasecmp(getenv($name), 'unknown') ? getenv($name) : false;
}

/**
 * 发送get请求
 * @param string $url get请求地址
 * @param array $header get请求头
 * @param int $timeout get请求超时时间(默认500秒)
 * @param bool $show_header // 是否返回请求头的信息(默认是)
 * @param bool $ssl_authentication // 是否验证SSL证书(默认否)
 * @param bool $return_transfer // 是否直接打印请求的数据，还是作为函数返回值返回(默认作为函数返回值返回)
 * @return null|string
 */
function send_get(string $url, array $header = [], int $timeout = 500, bool $show_header = false, bool $ssl_authentication = false, bool $return_transfer = true) : ?string {
  $curl = curl_init();
  curl_setopt($curl, CURLOPT_URL, $url);  // 设置get请求的url
  curl_setopt($curl, CURLOPT_TIMEOUT, $timeout);  // 设置请求超时时间(秒)
  curl_setopt($curl, CURLOPT_HEADER, $show_header);  // 设置请求头的信息作为数据流输出
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, $ssl_authentication);  // 不验证SSL证书
  curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, $ssl_authentication);  // 不验证SSL证书
  if ($ssl_authentication) curl_setopt($curl, CURLOPT_CAINFO, dirname(__FILE__).'cert.pem');   // 如果验证SSL，则加载证书 http://curl.haxx.se/ca/cacert.pem
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, $return_transfer);  //设置获取的信息return，而不是直接echo。
  curl_setopt($curl, CURLOPT_HTTPHEADER, $header);  // 设置请求头

  // 是否直接打印请求的数据，还是作为函数返回值返回
  if ($return_transfer) {
      $response = curl_exec($curl);  // 发送请求
      if (curl_errno($curl)) {
          return curl_error($curl);
      }
      //判断是否gzip编码的，如果是，则解码
      $prefix  = dechex(ord($response[0])) . dechex(ord($response[1]));
      $is_gzip = ('1f8b' == strtolower($prefix));
      ($is_gzip) && $response = gzdecode($response);
      curl_close($curl);  //关闭URL请求
      return $response;   //返回数据
  } else {
      curl_exec($curl);
      if (curl_errno($curl)) {
          return curl_error($curl);
      }
      curl_close($curl);  //关闭URL请求
      return null;
  }
}

/**
 * 获取13位毫秒时间戳
 * @return int
 */
function millisecond_timestamp(): int {
  return round(microtime(true) * 1000);
}

/**
 * 查询对应省市县的城市code的方法
 * @param string $pr 省
 * @param string $ci 市
 * @param string $ar 区/县/镇
 * @param array $code 城市code列表
 * @return string
 */
function found_code(string $pr, string $ci, string $ar, array $code): string {
  foreach ($code as $province_temp => $city_array_temp) {
      if (strstr($pr, $province_temp)) {
          foreach ($city_array_temp as $area_array_temp) {
              foreach ($area_array_temp as $area_temp => $msg) {
                  if (strstr($ar, $area_temp)) {
                      return $msg['AREAID'];
                  }
              }
              foreach ($area_array_temp as $area_temp => $msg) {
                  if (strstr($ci, $area_temp)) {
                      return $msg['AREAID'];
                  }
              }
          }
      }
  }
  return '101280101';
}
