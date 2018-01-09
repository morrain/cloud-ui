# 文字提示 Tooltip

## 示例
### 基本形式

#### 声明式
``` html
<u-tooltip size="normal">
    <u-button>hover</u-button>
    <div slot="content">
        <div>提示内容</div>
    </div>
</u-tooltip>
```

## Tooltip API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| placement | String | `'bottom'` | 弹出层的弹出方向：top,bottom,left,right,top-start,top-end... |
| content | String | `'提示内容'` | 提示内容 |
| contentWidth | String | `'auto'` | 提示内容最大宽度 |
| contentHeight | String | `'auto'` | 提示内容最大高度 |
| size | String | `'normal'` | 大小扩展，支持一个值： `'small'`, `'normal'`, `'large'`, `'auto'`，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 显示内容 |
| content | 提示内容 |
