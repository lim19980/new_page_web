<?php 
$json = file_get_contents('php://input');
$dat = json_decode($json);

$link = 'https://whoer.net/';
$proxy = $dat->proxy->ipport;
$ptype = $dat->proxy->type;

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $link);
curl_setopt($curl, CURLOPT_PROXY, $proxy);
switch ($ptype) {
    case 'SOCKS5':
        curl_setopt($curl, CURLOPT_PROXYTYPE, CURLPROXY_SOCKS5);
        break;
    case 'SOCKS4':
        curl_setopt($curl, CURLOPT_PROXYTYPE, CURLPROXY_SOCKS4);
        break;
    case 'HTTPS':
        curl_setopt($curl, CURLOPT_PROXYTYPE, CURLPROXY_HTTPS);
        break;
    case 'HTTP':
        curl_setopt($curl, CURLOPT_PROXYTYPE, CURLPROXY_HTTP);
        break;
    default:
        curl_setopt($curl, CURLOPT_PROXYTYPE, CURLPROXY_HTTP);
        break;
}
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); 
curl_setopt($curl, CURLOPT_FAILONERROR, true);
curl_setopt ($curl, CURLOPT_FOLLOWLOCATION, TRUE);
curl_setopt($curl, CURLOPT_AUTOREFERER, 1);
curl_setopt($curl, CURLOPT_MAXREDIRS, 10);
curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36");
curl_setopt($curl, CURLOPT_HTTPPROXYTUNNEL, 1);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);
curl_setopt($curl, CURLOPT_TIMEOUT, 10);

$data = curl_exec($curl);
if($data) {
    echo "ok";
}else{

    echo "Error";
}
?>
