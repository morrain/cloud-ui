# Tablets

## Examples
### Basic

``` html
<u-tablets>
    <u-tablet>Apple</u-tablet>
    <u-tablet>Banana</u-tablet>
    <u-tablet>Cake</u-tablet>
</u-tablets>
```

### Value

``` html
<u-tablets value="C">
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B">Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
```

### Readonly & Disabled

``` html
<u-tablets value="C" readonly>
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B">Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
<p></p>
<u-tablets value="C" disabled>
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B">Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
<p></p>
<u-tablets value="C">
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B" disabled>Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
```

### Cancelable

Try to click twice on an item.

``` html
<u-tablets value="C" cancelable>
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B">Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
```

## Tablets API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| cancelable | Boolean | `false` | 是否可以取消选择 |
| multiple | Boolean | `false` | 是否可以多选 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-tablet>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | ListViewItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 单选模式中，选择项相关对象 |
| $event.itemVM | ListViewItem |  单选模式中，选择项子组件 |
| $event.items | Array\<Object\> | 多选模式中，所有选中项相关对象的数组 |
| $event.itemVMs | Array\<ListViewItem\> | 多选模式中，所有选中项子组件的数组 |

## Tablet API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| disabled | Boolean | `false` | 禁用此项 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Slots

#### (default)

插入文本或HTML。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | ListViewItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
