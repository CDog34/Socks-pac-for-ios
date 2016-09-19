function FindProxyForURL(url, host){
  if (isInNet(host, '10.0.0.0', '255.255.255.0')) return "DIRECT";
  return "SOCKS 10.0.0.175:3100";
}
