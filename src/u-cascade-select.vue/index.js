export default {
    name: 'u-cascade-select',
    props: {
        data: { type: Array, default() { return []; } },
        selectItems: { type: Array, default() { return []; } }, // 选择值
        placeholders: { type: Array, default() { return []; } }, // 默认提示
        deps: { type: Number, default: 1 }, // 最少显示下拉框个数
        useDefaultplaceholders: { type: Boolean, default: true }, // 默认选中defaultData
        defaultValue: { default: -1 },
        defaultData: { default: '请选择' },
    },
    data() {
        return {
            showData: [],
        };
    },
    created() { // 根据data设置showData
        // 从第一级元素开始设置showData
        this.getText(this.data, 0);
    },
    methods: {
        /**
         * 根据Data计算showData[index]
         * @param  {[Array]} data  [{name:xx, children: []},...]
         * @param  {[Number]} index 层级
         */
        getText(data, index) {
            if (!data) {
                // 级联选择器选择完成 或者 选择defaultValue
                this.selectItems.every((ele) => ele !== this.defaultValue) && this.$emit('change', {
                    sender: this,
                    selectGroupData: this.selectItems,
                });
                this.setDefault(index);
                return;
            }

            const res = [];
            data.forEach((ele, index) => res.push({ text: ele.name, value: ele.name, children: ele.children }));
            this.showData[index] = {
                data: res,
            };
            this.compleleData(index);

            this.getText(this.getChildData(index), index + 1);
        },
        /**
         * 根据配置参数，补足showData[index]
         * @param  {[type]} index [description]
         * @return {[type]}       [description]
         */
        compleleData(index) {
            const curData = this.showData[index].data;
            if (this.placeholders[index] !== undefined)
                curData.unshift({ text: this.placeholders[index], value: this.defaultValue });
            else if (this.useDefaultplaceholders)
                curData.unshift({ text: this.defaultData, value: this.defaultValue });
            if (this.selectItems[index] !== undefined && curData.find((ele) => ele.value === this.selectItems[index]) !== undefined)
                this.showData[index].value = this.selectItems[index];
            else {
                this.showData[index].value = curData[0].value;
                this.selectItems[index] = curData[0].value;
            }
        },
        getChildData(index) {
            const curData = this.showData[index].data;
            for (let i = 0; i < curData.length; ++i) {
                if (curData[i].value === this.selectItems[index])
                    return curData[i].children;
            }
        },
        /**
         * u-select组件触发选择事件 根据新selectItems，重新渲染showData[index+1,....]
         * @param  {[type]} event     
         * @param  {[type]} index 更改selectItems的下标
         */
        select(event, index) {
            if (event.value === event.oldValue)
                return;

            this.selectItems[index] = event.item.value;
            this.showData[index].value = event.item.value;
            this.resetSelected(index + 1);
            this.getText(event.item.children, index + 1);

            this.$emit('select', {
                sender: this,
                event,
                selectGroupData: this.selectItems,
                level: index,
            });
        },
        /**
         * 重设和selectItems的值
         * @param  {[type]} index [description]
         * @return {[type]}       [description]
         */
        resetSelected(index) {
            const _deleteItems = (arr) => {
                let gap = arr.length - 1 - index;
                while ((gap--) >= 0)
                    arr.pop();
            };

            _deleteItems(this.selectItems);
            _deleteItems(this.showData);
        },
        /**
         * 从showData[index]开始，根据配置 设置showData[index].value, showData[x].data和showData[x].value
         * @param {[type]} index [description]
         */
        setDefault(index) {
            this.setPlaceholders(index);

            let gap = this.deps - this.showData.length;
            while ((gap--) > 0)
                this.showData.push({ data: [{ text: '请选择', value: this.defaultValue }], value: this.defaultValue });

            this.$forceUpdate();
        },
        /**
         * 根据placeholders补足showData
         * @param {[type]} index [description]
         */
        setPlaceholders(index) {
            for (let i = index; i < this.placeholders.length; ++i) {
                if (this.showData[i])
                    this.showData[i].data[0].value !== this.defaultValue && this.showData[i].data.unshift({ text: this.placeholders[i], value: this.defaultValue });
                else {
                    this.showData[i] = {
                        data: [{ text: this.placeholders[i], value: this.defaultValue }],
                        value: this.defaultValue,
                    };
                }
            }
        },
    },
};
