/**
 * @class Select
 * @extend Base
 * @param {Array}                   options.options             => 下拉菜单列表
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 * @param {string|number}     options.width               => 输入框长度
 */
const SelectColor = {
    name: 'u-color-select',
    props: {
        options: { type: Array, default: [] },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        // visible: { type: Boolean, default: true },
        width: { type: [String, Number], default: '160' },
        value: { type: String, default: '' },
    },
    data() {
        return {
            open: false,
            selectedIndex: this.initSelectedIndex(this.value),
        };
    },
    computed: {
        selected() {
            if (this.options.length === 0)
                return { name: '请选择', value: '' };
            return this.options[this.selectedIndex];
        },
    },
    watch: {
        open(newValue) {
            const index = SelectColor.opens.indexOf(this);
            if (newValue && index < 0)
                SelectColor.opens.push(this);
            else if (!newValue && index > -1)
                SelectColor.opens.splice(index, 1);
        },
        options(newValue) {
            this.selectedIndex = this.initSelectedIndex(this.value);
        },
        value(newValue) {
            this.selectedIndex = this.initSelectedIndex(newValue);
        },
        /**
         * @event change 选中列表项改变时触发
         * @property {object} sender 事件发送对象
         * @property {object} selected 改变后的列表对象
         * @property {String} value 改变后的列表对象的值
         */
        selected(newValue) {
            this.$emit('change', {
                sender: this,
                selected: newValue,
                value: newValue.value,
            });
        },
    },
    created() {
        document.addEventListener('click', this.fadeOut);
    },
    methods: {
        toggle(value) {
            if (this.disabled)
                return;
            if (value)
                this.open = value;
            else
                this.open = !this.open;
        },
        select(event, index) {
            if (this.readonly)
                return;
            if (this.options[index].disabled || this.options[index].divider) {
                event.stopPropagation();
                return false;
            }
            // this.selected = this.options[index];
            this.selectedIndex = index;

            /**
             * @event select 选中列表项时触发
             * @property {object} sender 事件发送对象
             * @property {object} selected 选中后的列表对象
             * @property {String} value 选中后的列表对象的值
             */
            this.$emit('select', {
                sender: this,
                selected: this.options[index],
                value: this.options[index].value,
            });
        },
        initSelectedIndex(value) {
            if (this.options.length === 0)
                return;
            let selIndex = 0;
            this.options.some((item, index) => {
                if (item.value === value) {
                    selIndex = index;
                    return true;
                }
                return false;
            });
            return selIndex;
        },
        fadeOut(event) {
            SelectColor.opens.forEach((item, index) => {
                // 这个地方不能用stopPropagation来处理，因为展开一个Select的同时要收起其他Select
                const element = item.$refs.element;
                let element2 = event.target;
                while (element2) {
                    if (element === element2)
                        return;
                    element2 = element2.parentElement;
                }
                item.toggle(false);
            });
        },
    },
};

// Select 类的静态属性 用来保存当前处于open状态的Select对象
SelectColor.opens = [];

export default SelectColor;
