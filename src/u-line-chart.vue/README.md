#线状图 LineChart

## 示例
### 基本形式

``` html
<u-line-chart border title="每星期访问量" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :series="[{ key: 'number' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]"></u-line-chart>
```

### 曲线图

``` html
<u-line-chart border title="每星期访问量" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :smooth="true" :series="[{ key: 'number' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]"></u-line-chart>
```

### 填充下方区域

``` html
<u-line-chart border title="每星期访问量" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :fill="true" :series="[{ key: 'number' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]"></u-line-chart>
```


### 隐藏图例
``` html
<u-line-chart border title="每星期访问量" :legend="false" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :series="[{ key: 'number' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]"></u-line-chart>
```

### 单位
``` html
<u-line-chart border title="每星期访问量" :x-axis="{ key: 'week' }" :y-axis="{ min: 0, name: '个' }" :series="[{ key: 'number' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]"></u-line-chart>
```


#### 命令式

``` vue
<template>
<u-line-chart border :title="title" :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data" :smooth="smooth"></u-line-chart>
</template>

<script>
export default {
	data() {
		return {
			title: '每星期访问量',
			xaxis: { key: 'week' },
			yaxis: { min: 0, name: '个'},
			series: [{key: 'number'},{key: 'num', hidden: true} ],
			data: [
				{ week: '星期一', number: 150, num: 120 },
				{ week: '星期二', number: 300, num: 120 },
				{ week: '星期三', number: 28, num:undefined },
				{ week: '星期四', number: 200, num: 200 },
				{ week: '星期五', number: 74, num: 74 },
				{ week: '星期六', number: 532, num:200 },
				{ week: '星期日', number: 420 ,num: 500},
			],
			smooth: true,
		}
	}
};
</script>
```

## LineChart API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array | | 数据：`undefined`，表示数据正在加载；如果为`[]`，表示数据为空 |
| title | String | | 标题 |
| titleAlign | String | `center` | 标题对齐方式 |
| caption | String | | 子标题 |
| series | Array | `[]` | 序列信息 |
| border | Boolean | `false` | 是否显示边框 |
| legend | Boolean | `true` | 是否显示图例 |
| xAxis | Object | `{}` | 横坐标信息 |
| yAxis | Object | `{}` | 纵坐标信息 |
| smooth | Boolean | `false` | 是否显示光滑曲线 |
| fill | Boolean | `false` | 是否填充下方区域 |
