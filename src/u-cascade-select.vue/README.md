# 多级选择（SelectGroup）

## 示例
### 基本形式

#### Data方式

##### 无固定层级，默认显示“请选择”
``` html
<u-cascade-select :data="[
{name: '理学', children: [
    {name: '物理学', children: [
        {name: '理论物理'},
        {name: '凝聚态物理'},
        {name: '材料物理'}
    ]},
    {name: '数学', children: [
        {name: '基础数学'},
        {name: '计算数学'},
        {name: '应用数学'}
    ]},
    {name: '化学'}
]},
{name: '工学', children: [
    {name: '计算机科学与技术', children: [
        {name: '计算机系统结构'},
        {name: '计算机软件与理论'},
        {name: '计算机应用技术'}
    ]},
    {name: '软件工程'},
    {name: '机械工程', children: [
        {name: '机械制造及其自动化'},
        {name: '机械电子工程'},
        {name: '机械设计及理论'},
        {name: '车辆工程'}
    ]}
]}]"></u-cascade-select>
```
##### 无默认项值，默认选择第一项
``` html
<u-cascade-select :useDefaultplaceholders="false" :data="[
{name: '理学', children: [
    {name: '物理学', children: [
        {name: '理论物理'},
        {name: '凝聚态物理'},
        {name: '材料物理'}
    ]},
    {name: '数学', children: [
        {name: '基础数学'},
        {name: '计算数学'},
        {name: '应用数学'}
    ]},
    {name: '化学'}
]},
{name: '工学', children: [
    {name: '计算机科学与技术', children: [
        {name: '计算机系统结构'},
        {name: '计算机软件与理论'},
        {name: '计算机应用技术'}
    ]},
    {name: '软件工程'},
    {name: '机械工程', children: [
        {name: '机械制造及其自动化'},
        {name: '机械电子工程'},
        {name: '机械设计及理论'},
        {name: '车辆工程'}
    ]}
]}]"></u-cascade-select>
```
##### 有默认项
``` html
<u-cascade-select :placeholders="['学科门类', '一级学科', '二级学科']" :data="[
{name: '理学', children: [
    {name: '物理学', children: [
        {name: '理论物理'},
        {name: '凝聚态物理'},
        {name: '材料物理'}
    ]},
    {name: '数学', children: [
        {name: '基础数学'},
        {name: '计算数学'},
        {name: '应用数学'}
    ]},
    {name: '化学'}
]},
{name: '工学', children: [
    {name: '计算机科学与技术', children: [
        {name: '计算机系统结构'},
        {name: '计算机软件与理论'},
        {name: '计算机应用技术'}
    ]},
    {name: '软件工程'},
    {name: '机械工程', children: [
        {name: '机械制造及其自动化'},
        {name: '机械电子工程'},
        {name: '机械设计及理论'},
        {name: '车辆工程'}
    ]}
]}]"></u-cascade-select>
```
##### 设置初始选项
``` html
<u-cascade-select :selectItems="['工学', '机械工程', '机械电子工程']" :data="[
{name: '理学', children: [
    {name: '物理学', children: [
        {name: '理论物理'},
        {name: '凝聚态物理'},
        {name: '材料物理'}
    ]},
    {name: '数学', children: [
        {name: '基础数学'},
        {name: '计算数学'},
        {name: '应用数学'}
    ]},
    {name: '化学'}
]},
{name: '工学', children: [
    {name: '计算机科学与技术', children: [
        {name: '计算机系统结构'},
        {name: '计算机软件与理论'},
        {name: '计算机应用技术'}
    ]},
    {name: '软件工程'},
    {name: '机械工程', children: [
        {name: '机械制造及其自动化'},
        {name: '机械电子工程'},
        {name: '机械设计及理论'},
        {name: '车辆工程'}
    ]}
]}]"></u-cascade-select>
```
##### 设置最小层级
``` html
<u-cascade-select :deps="3" :data="[]"></u-cascade-select>
```

## Select API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ name, children }\> | [] | 级联数据 |
| selectItems | Array\<String\> | [] | 初始化选择值 |
| placeholders | Array\<String\> | [] | 默认项的值 |
| deps | Number | 1 | 最少显示下拉框个数 |
| useDefaultplaceholders | Boolean | true | 无默认项的值，是否显示defaultData |
| defaultValue | Any | -1 | 默认项的value |
| defaultData | Any | '请选择' | 默认项显示 |


### Events

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.sender | Object | 事件发送对象 |
| $event.event | Object | u-select组件select事件的$event |
| $event.selectGroupData | Array | 当前selectGroup所有选择的值 |
| $event.level | Number | 当前选择层级 |

#### @change

最后的选择项改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.sender | Object | 事件发送对象 |
| $event.selectGroupData | Array | 当前selectGroup所有选择的值 |
