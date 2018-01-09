# Textarea

## Examples
### Basic

Most attributes are inherited from `<textarea>` element.

``` html
<u-textarea placeholder="Details" autofocus></u-textarea>
```

### Readonly & Disabled

``` html
<u-linear-layout>
    <u-textarea value="Readonly" readonly></u-textarea>
    <u-textarea value="Disabled" disabled></u-textarea>
</u-linear-layout>
```
### Size Extension

```html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-textarea size="normal" value="normal" readonly></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="large" value="large" readonly></u-textarea>
    </u-linear-layout>
    <u-linear-layout>
        <u-textarea size="huge" value="huge" readonly></u-textarea>
    </u-linear-layout>
</u-linear-layout>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | String | | The value |
| placeholder | String | | Original attribute |
| maxlength | Number | | Original attribute |
| autofocus | Boolean | | Original attribute |
| readonly | Boolean | | Original attribute |
| disabled | Boolean | | Original attribute |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |
