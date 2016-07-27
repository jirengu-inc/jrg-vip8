# [太阳系](http://book.jirengu.com/jirengu-inc/jrg-vip8/members/%E6%9B%BE%E6%B6%9B/CSS3%20Animation%20Demo/index.html)

图片：采用[雪碧图](http://spritegen.website-performance.org/)的技术，这样可以减少 HTTP 请求

**transform-origin：默认以左上角为中心**

**transform-rotate：默认以正中心旋转**

## 每个行星的 animation-duration 是如何计算的?

需要知道每个行星都是以地球的运行速度为基础来进行计算

1. 地球`animation-duration`为 10s

2. 水星的轨道周期为 **88** 天
```
88 / 365 ~= 0.24 * 10s = 2.4s 
```

3. 金星的轨道周期为 **225** 天
```
225 / 365 ~= 0.61 = 6.1s
```

4. 火星的轨道周期为 **687** 天
```
687 / 365 ~= 1.88 = 19s
```

5. 木星的轨道周期为 **12** 年
```
12 * 10s = 120s
```

6. 土星的轨道周期为 **29** 年
```
29 * 10s = 290s
```

7. 天王星的轨道周期为 **84** 年
```
84 * 10s = 840s
```

8. 海王星的轨道周期为 **165** 年
```
165 * 10 = 1650s
```
