# Laravel

### Getting started with Laravel

1. 修改 composer 源
```json
"repositories": {
    "packagist": {
        "type": "composer",
        "url": "https://mirrors.aliyun.com/composer/"
    }
}

// install
$ composer install
```

2. 使用IP地址访问项目
```
# 指定ip
php artisan serve --host 192.168.1.106

# 指定端口
php artisan serve --host 192.168.1.113 --port=3000
```

3. 配置好 `APP_KEY`
```
php artisan key:generate
```

```
php artisan make:model Model/Banner --migration


php artisan make:middleware EnableCrossRequestMiddleware
```



