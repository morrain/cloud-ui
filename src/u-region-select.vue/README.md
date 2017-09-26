# 地区选择（RegionSelect）

## 示例
### 基本形式

#### Data方式

##### 固定长度为3，默认显示“请选择”
``` html
<u-region-select :deps="3"></u-region-select>
```
##### 固定长度为3，默认显示第一个
``` html
<u-region-select :deps="3" :useDefaultplaceholders="false"></u-region-select>
```
##### 固定长度为3，默认显示“省市区”
``` html
<u-region-select :placeholders="['省','市','区']"></u-region-select>
```

