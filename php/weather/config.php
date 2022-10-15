<?php

// 操作相关错误
const OPERATION_ERROR = array(
  10000 => '操作失败',
  10001 => '操作频繁',
  10002 => '参数错误',
  10003 => '操作频繁，今天的请求次数已用完',
  19999 => '搞事情?'
);

// 错误信息汇总
const ERROR_MESSAGE = array(0 => '请求成功') + OPERATION_ERROR;

// 腾讯地图API_KEY
const TENCENT_MAP_KEY = '这里替换为自己的腾讯地图API的key';