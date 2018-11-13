#!/bin/bash 


echo -e "\t \t \t \t \t \t \t \t \t \tClean workspace"

sudo rm -rfv package-lock.json node_modules

echo -e "\t \t \t \t \t \t \t \t \t \t Building a project"

cat > Dockerfile << EOF
FROM nginx:stable
MAINTAINER Oleksii Petrovskyi
RUN apt-get update; apt-get install -y openssl  && \
        rm -rf /var/lib/apt/lists/*
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf
RUN echo  '\n\
  user  nginx; \n\
  worker_processes  2; \n\
  error_log  /var/log/nginx/error.log warn; \n\
  pid        /var/run/nginx.pid; \n\
  events { \n\
      worker_connections  1024; \n\
  } \n\
  http { \n\
      include       /etc/nginx/mime.types; \n\
      default_type  application/octet-stream; \n\
      log_format  main  '"'"'\$http_x_forwarded_for - \$remote_user [\$time_local] "\$request" '"'"'  \n\
                       '"'"'\$status $body_bytes_sent "\$http_referer" '"'"'  \n\
                       '"'"'"\$http_user_agent" \$remote_addr \$request_time \$upstream_response_time'"'"'; \n\
      server_tokens  off;  \n\
      access_log  /var/log/nginx/access.log  main; \n\
      sendfile        on; \n\
      keepalive_timeout  65; \n\
      gzip  on; \n\
      include /etc/nginx/conf.d/*.conf; \n\
  } \n '\
  > /etc/nginx/nginx.conf

RUN echo  '\n\
  map \$http_user_agent \$loggable { \n\
    ~^Datadog 0; \n\
    ~^Amazon 0; \n\
    ~^ELB-HealthChecker 0; \n\
    default 1; \n\
  } \n\
  server { \n\
          set \$backend_port  8888; \n\
          set \$backend applications-some.url:\$backend_port; \n\
          listen  443 ssl; \n\
          server_name _; \n\
          proxy_connect_timeout  30s; \n\
          proxy_send_timeout  30s; \n\
          proxy_read_timeout  30s; \n\
          if (\$scheme = http) { \n\
                  return 301 https://\$server_name\$request_uri; \n\
              } \n\
          error_log  /var/log/nginx/web-error.log; \n\
          access_log   /var/log/nginx/web-access.log main if=\$loggable; \n\
          charset utf-8; \n\
          sendfile off; \n\
          ssl_certificate /etc/nginx/ssl/ssl_selfsigned.crt; \n\
          ssl_certificate_key /etc/nginx/ssl/ssl_selfsigned.key; \n\
          ssl_dhparam /etc/nginx/ssl/ssl_dhparam.pem; \n\
          ssl_prefer_server_ciphers on; \n\
          ssl_ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:ECDH+3DES:DH+3DES:RSA+AESGCM:RSA+AES:RSA+3DES:!aNULL:!MD5:!DSS; \n\
          root /var/www/html/web/; \n\
          location / { \n\
                  try_files \$uri @index; \n\
                  expires max; \n\
          } \n\
          location @index { \n\
              add_header Cache-Control no-cache; \n\
              expires 0; \n\
              try_files /index.html =404; \n\
          } \n\
  } \n\
  \n '\
  > /etc/nginx/conf.d/web.conf
RUN mkdir /etc/nginx/ssl/

RUN echo  '\
-----BEGIN DH PARAMETERS-----\n\
MIIBCAKCAQEA0oVTG30hWetJ1XT2CxfWj5c6VeD9gnT9PeWfVJN6JeDQGc4P4XAP\n\
evFU2AKZf/gnT5acRFvzXynBo1mX6Irxq6FTXGrz5adA4ApmfUkhYZuKzE4IJYjs\n\
uO5Bdb7tGz0VjcyJGRiaUZsJ3OUgr/d+zR0YkC3xD07ME/E41vH9B25AXHnvDLCh\n\
dfYyfyjFrLHGsUFoGgT6vaCGR9cjHtp7078HuSayRTF4wpAXof9tl3Tdm5VWLtDB\n\
W/n6SFuSQ/w20EFzxVacY3SI0wpHYsHjNSk18Px8yaUrcjRCBGQ/sr4waR/6zzct\n\
yMQnQaoszXJdm28YTwiHT7pNJ9eQ7zH7IwIBAg==\n\
-----END DH PARAMETERS-----\
'\
  > /etc/nginx/ssl/ssl_dhparam.pem


RUN echo  '\
-----BEGIN CERTIFICATE-----\n\
MIIDmzCCAoOgAwIBAgIJAMFeK10ij/rzMA0GCSqGSIb3DQEBCwUAMGQxCzAJBgNV\n\
BAYTAlVTMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBX\n\
aWRnaXRzIFB0eSBMdGQxHTAbBgNVBAMMFHNvbWVfc2VsZl9zaWduZWQuemlsMB4X\n\
DTE4MTExMzE0MzcxMVoXDTI4MTExMDE0MzcxMVowZDELMAkGA1UEBhMCVVMxEzAR\n\
BgNVBAgMClNvbWUtU3RhdGUxITAfBgNVBAoMGEludGVybmV0IFdpZGdpdHMgUHR5\n\
IEx0ZDEdMBsGA1UEAwwUc29tZV9zZWxmX3NpZ25lZC56aWwwggEiMA0GCSqGSIb3\n\
DQEBAQUAA4IBDwAwggEKAoIBAQCib18muMsy+paaFtrD2ZdT0Zosw6Thv3Z+XFY5\n\
vNZNmBgSpz4WNp8LqQEp2SbE9fOobTkRJMhtTNaWCiY54YrI3TS3Lv7yW4veykj7\n\
OT96KjGMba0AlrRS37W6PjksjYp3rtdOTueE3l12EuhaW4aQgykJQRrUgO0ar2DX\n\
NZ/eRajFHctu79/JK/G7N7a4so1eM0Emr2FA5Y/vKTdE/7niRAwstdLr2hANX/IM\n\
VmJP2xz0LzSB54REr9ELmQBWks+1QBGn9UXMWNNvk6211A59ap8ATrsK83rKfQnX\n\
zTH1X2CYYPpgr7RP0cIHde+yrlG2mSEyHYMoJ5Zg1LVd9T+HAgMBAAGjUDBOMB0G\n\
A1UdDgQWBBSQ186ecdtxK9O18HToOTqI8q0h9TAfBgNVHSMEGDAWgBSQ186ecdtx\n\
K9O18HToOTqI8q0h9TAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQBP\n\
aTH6wuCQWwDXfRRnuRssYh8ylU0xS0O7Lt2Z54xRLMXD2Czd9TkNYnEADPK7OfM0\n\
1g1UdkLcqf4xsnE/ksoKBZw/5EURNzPduiUItLT7FX4+xO8kLA2eZ8Wa9+tJgyaW\n\
d6cB+UL8oKLcx/K+gh3nCr6h8Cd3x0KbIjzGQ8oepm723EXXj5O4bfDkhI5ELCaf\n\
NiIBl6K+i7Y/NuhEv9I2iP8Jy8FZUC5M9LyUsokgT6p1W/W7XAnnBsgrOWc6kzHP\n\
mGIsin9myZ5Es5Wttd5p6NCvHSXHAviS9hgTYbTzNI/WRR2kp9rt6Sf0zG3rvF8A\n\
Iu+GgC1JUP84zNUKX4XH\n\
-----END CERTIFICATE-----\
'\
  > /etc/nginx/ssl/ssl_selfsigned.crt

RUN echo  '\
-----BEGIN PRIVATE KEY-----\n\
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCib18muMsy+paa\n\
FtrD2ZdT0Zosw6Thv3Z+XFY5vNZNmBgSpz4WNp8LqQEp2SbE9fOobTkRJMhtTNaW\n\
CiY54YrI3TS3Lv7yW4veykj7OT96KjGMba0AlrRS37W6PjksjYp3rtdOTueE3l12\n\
EuhaW4aQgykJQRrUgO0ar2DXNZ/eRajFHctu79/JK/G7N7a4so1eM0Emr2FA5Y/v\n\
KTdE/7niRAwstdLr2hANX/IMVmJP2xz0LzSB54REr9ELmQBWks+1QBGn9UXMWNNv\n\
k6211A59ap8ATrsK83rKfQnXzTH1X2CYYPpgr7RP0cIHde+yrlG2mSEyHYMoJ5Zg\n\
1LVd9T+HAgMBAAECggEAOGJKeCl7N3Xuoww94e/87HZ8ev9qk4YffptUvvQCu6qI\n\
6KivD4zkRmri4YDkSUhKzPMk9QN8oxwh/LEHNd5Ji5Hlg5THoJ8QfURgcvwbQa+1\n\
xVYo0GR/sai/7yc8N2/mWccSK7eN+/woGx1TFFJi8nTk4LZ9trgOFc484ldV6BRe\n\
TX0Y9Ille6FgLuqDmuAFBEH7KHIHE3UP6MsBZyUqmIJIjDLEjowM3c7jEKGZ9KvI\n\
3NFfJ5lXMvTyVGuYzyMaYXy+SPs4ceYYBQTW8vmqb7Vnwqz25sZP7EmSbq9OQX2W\n\
BUJUSS3E/krcbzSdZzVl74F6o/lH/TjjC7aO0t2M0QKBgQDW+8pSUh5n+eo7bG5S\n\
LXuFSrL3DCebd2wEnCO4bBVjv7lYDN10mki4wdAQIhihg/E737OuyCq09fcCY8fl\n\
R20ApTbfnaG2GMnwR6v6+QgWhu1PkdoCM0EphaFDuGldI9Eb+GaGYqYORrSD2mJS\n\
zCA9VOyUzqI/Jcl1UasGSpQB/wKBgQDBbQLfVHNHNOADeq2AWJ/m15yE6ITUY2Uj\n\
Us8BTfFT4G4tDryZIsI4bdp7TVdNeGI6BNOc8PlghBgp+5NVhdNLU1cU64gnePe8\n\
FVa7+n3Jpsu6lXw7kwyjrlRd50jEl/xl1cDugCtoB5AbmBgp4hnX37ppJkxrOJwW\n\
Iwd9kWOyeQKBgQCDpzJhc1SXjB57QY3V2XCZUgOC8viWZm3J7OybFeWLbm/MkiRU\n\
Md9y9Y27M4Yt8yUZ64aX9JDivPYFiqFxsWn5STPvgRL09v1DnkCdsz/Wu848Oi9t\n\
xYGUMfduB1LO7Q4zuMzgYy0Z9Qa68FPiLItZw9YV0uzdCwDyTY8UjTtSdQKBgQCu\n\
whsyRE7TKwaqnhBcQbZXDr8vphU8/4DFZW/6Mb20lrV0qDfl8+2epkIb3UjficDV\n\
wr6esWnetfpPFCmNv5ekGuw2zob5guXxXSY8OJmls7mmHqFcAgQNbthy7yBj3x3/\n\
tBzYX5zYJN0i0Uwjq1DGJjF6B0xMI52Csqt13AJDoQKBgHy8Tf1HokAZ2CxNyRAD\n\
Wun68E+o0vhmV0HO8SHgOhyNH3bZfy+/+MsGLrABHUDaS1XFvkcJ624pmNJElFsh\n\
lMIUMBJBYwBpEY9/MpGOvR6YK+16H4up6aIbxrVslLAOjQ0nQMktGZw2Xvxhu7JL\n\
wzHeWIwo26BuBUZQqL0a1h79\n\
-----END PRIVATE KEY-----\
'\
  > /etc/nginx/ssl/ssl_selfsigned.key

RUN mkdir -p /var/www/html/web/
ADD dist/ /var/www/html/web/
EXPOSE 443
EOF

docker run -v "$(pwd)":/home/node  -ti node:10.12-alpine sh -c  " cd /home/node && npm install -d &&  npm run build:release -- --base-href \"/\" "

echo -e "\t \t \t \t \t \t \t \t \t \tWraping artifact into docker container"

docker build -t zil_fe:latest ./

echo -e "\t \t \t \t \t \t \t \t \t \t Contaniner name is zil_fe:latest \n \t \t \t \t \t \t \t \t \t \t To run container localy: \`docker run -tid -p 8443:443  zil_fe:latest \` "

echo -e "\t \t \t \t \t \t \t \t \t \tCleanup"

rm -rf Dockerfile



