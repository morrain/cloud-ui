import Chart from '../u-chart.vue';

const TICKES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 30, 40, 50, 100, 200, 500, 1000, 1];
const FILTER = 360;

/**
 * @class LineChart
 * @extends Chart
 * @param {Object}                  options                    =  绑定属性
 * @param {string='100%'}           options.width               => 图表宽度
 * @param {string='480px'}          options.height              => 图表高度
 * @param {string=''}               options.title               => 标题
 * @param {string=''}               options.titleTemplate      @=> 标题模板
 * @param {string=''}               options.tooltipTemplate    @=> 工具提示模板
 * @param {Array}                   options.data                => 数据。如果为`undefined`，表示数据正在加载；如果为`[]`，表示数据为空。
 * @param {Object}                  options.xAxis               => 横坐标信息
 * @param {Object}                  options.yAxis               => 纵坐标信息
 * @param {Array=[]}                options.series              => 序列信息
 * @param {boolean=false}           options.smooth              => 是否用光滑曲线
 * @param {boolean=false}           options.fill                => 是否填充区域
 * @param {boolean=false}           options.border              => 是否显示边框
 * @param {boolean=true}            options.legend              => 是否显示图例
 */

export default {
    name: 'u-line-chart',
    props: {
        data: Array,
        title: String,
        caption: String,
        series: Array,
        border: Boolean,
        legend: Boolean,
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '480px',
        },
        xAxis: Object,
        yAxis: Object,
        smooth: Boolean,
        fill: Boolean,
        titleAlign: { type: String, default: 'center' },
        loading: { type: Boolean, default: false },
    },
    data() {
        return {
            width_: undefined,
            height_: undefined,
            xAxis_: {
                data: [],
            },
            yAxis_: {
                data: [],
            },
            percent_: undefined,
            currentData: this.getCurrentData(),
        };
    },
    created() {
        this.draw();
    },
    watch: {
        data(newValue) {
            this.currentData = this.getCurrentData(newValue);
            this.draw();
        },
    },
    mounted() {
        this._onResize = this._onResize.apply(this);
        window.addEventListener('resize', this._onResize, false);
    },
    methods: {
        _getSize() {
            if (!this.$refs)
                return;

            this.width_ = this.$refs.grid && this.$refs.grid.offsetWidth;
            this.height_ = this.$refs.grid && this.$refs.grid.offsetHeight;
        },
        /**
         * @private
         */
        _onResize() {
            this._getSize();
            this.draw();
        },
        getCurrentData(value) {
            const data = value || this.data;
            const length = data.length;
            let currentData = [];
            if (length > FILTER) {
                const diff = Math.round(length / FILTER);
                currentData = data.filter((item, index) => index % diff === 0);
            } else
                currentData = data;
            return currentData;
        },
        draw() {
            if (!this.currentData || !this.currentData.length)
                return;

            this._getSize();

            //
            // 确定横坐标
            //
            {
                const xAxis_ = this.xAxis_;
                xAxis_.count = this.xAxis.count || 12;
                let pieceCounts = this.currentData.length - 1;
                let tick = pieceCounts / xAxis_.count;
                if (tick !== parseInt(tick)) {
                    tick = 1;
                    while (!(pieceCounts / tick <= xAxis_.count && pieceCounts % tick === 0)) {
                        for (let i = 0; i < TICKES.length; i++) {
                            tick = TICKES[i];
                            if (pieceCounts / tick <= xAxis_.count && pieceCounts % tick === 0)
                                break;
                        }

                        // 如果不能整除，则补充空数据
                        if (tick === 1) {
                            this.currentData.push({ hidden: true });
                            pieceCounts++;
                        } else
                            break;
                    }
                }

                xAxis_.tick = tick;
                xAxis_.data = [];
                this.currentData.forEach((item, index) =>
                    index % tick === 0 && xAxis_.data.push(item[this.xAxis.key]));
            }

            //
            // 确定纵坐标
            //
            {
                const yAxis_ = this.yAxis_;

                // 如果没有设置最小值和最大值，则寻找
                if (this.yAxis.min !== undefined)
                    yAxis_.min = this.yAxis.min;
                else {
                    yAxis_.min = Math.min(...this.series.map((sery) =>
                        !sery.absent && Math.min(...this.currentData.map((item) =>
                            item[sery.key] !== undefined ? item[sery.key] : Infinity)
                        )
                    )); // 支持空数据
                }
                if (this.yAxis.max !== undefined)
                    yAxis_.max = this.yAxis.max;
                else {
                    yAxis_.max = Math.max(...this.series.map((sery) =>
                        !sery.absent && Math.max(...this.currentData.map((item) =>
                            item[sery.key] !== undefined ? item[sery.key] : -Infinity)
                        )
                    )); // 支持空数据
                }

                yAxis_.count = this.yAxis.count || 8;
                const tick = this.roundToFirst((yAxis_.max - yAxis_.min) / yAxis_.count) || 1;
                const fixedCount = this.getFixedCount(tick);
                yAxis_.min = Math.floor(yAxis_.min / tick) * tick;
                yAxis_.max = Math.ceil(yAxis_.max / tick) * tick;

                // 如果最小值和最大值相等，则强行区分
                if (yAxis_.min === yAxis_.max)
                    yAxis_.max = yAxis_.min + yAxis_.count;

                yAxis_.data = [];

                while (yAxis_.min + yAxis_.count * tick < yAxis_.max)
                    yAxis_.count++;

                for (let i = 0; i <= yAxis_.count; i++) {
                    const value = yAxis_.min + i * tick;
                    yAxis_.data.push(value.toFixed(fixedCount)); // 防止+的时候出现无限小数的情况
                }

                const dataMax = Number(yAxis_.data[yAxis_.data.length - 1]);
                yAxis_.max = Math.max(yAxis_.max, dataMax);
            }

            setTimeout(() => {
                this._getSize();
            });
        },
        getD(sery, type) {
            if (!this.width_ || !this.height_ || !this.currentData || !this.xAxis_.data.length || !this.yAxis_.data.length)
                return;
            if (this.currentData.length <= 1) // 一个点无需绘制线条
                return;

            if (sery.absent)
                return;

            const width = this.width_;
            const height = this.height_;
            const delta = width / (this.currentData.length - 1) / 2;

            const points = this.currentData.map((item, index) => {
                if (isNaN(item[sery.key]))
                    return null;
                else {
                    return [
                        width * index / (this.currentData.length - 1),
                        height * (1 - (item[sery.key] - this.yAxis_.min) / (this.yAxis_.max - this.yAxis_.min)),
                    ];
                }
            });
            points.push(null); // 起始点也可以看做间断结束，最后一个null看做间断开始

            const cmds = [];
            let discontinued = true;
            for (let i = 0; i < points.length; i++) {
                const point = points[i];
                let cmd = '';

                if (!point) {
                    if (!discontinued) {
                        discontinued = true;
                        if (type === 'area')
                            cmd = 'V' + height;
                    }
                } else {
                    const pointStr = point.join(',');
                    if (discontinued) { // discontinue end
                        discontinued = false;
                        if (type !== 'area')
                            cmd = 'M ' + pointStr;
                        else {
                            const bottomPointStr = [point[0], height].join(',');
                            cmd = `M ${bottomPointStr} L ${pointStr}`;
                        }

                        const nextPoint = points[i + 1];
                        if (this.smooth && nextPoint) {
                            const helperPointStr = [point[0] + delta, point[1]].join(',');
                            const nextHelperPointStr = [nextPoint[0] - delta, nextPoint[1]].join(',');
                            cmd += ` C ${helperPointStr} ${nextHelperPointStr} ` + nextPoint.join(',');
                            i++;
                        }
                    } else {
                        if (!this.smooth)
                            cmd = 'L ' + pointStr;
                        else {
                            const helperPointStr = [point[0] - delta, point[1]].join(',');
                            cmd = `S ${helperPointStr} ${pointStr}`;
                        }
                    }
                }

                cmds.push(cmd);
            }

            return cmds.join(' ');
        },
        getTopOne(item) {
            return Math.max(...this.series.map((sery) => !sery.absent && !sery.hidden && item[sery.key] ? item[sery.key] : 0));
        },
        format(value) {
            return value;
        },
        roundToFirst(num) {
            if (num >= 1) {
                const power = Math.pow(10, String(Math.round(num)).length - 1);
                return Math.round(num / power) * power;
            } else if (num > 0)
                return +num.toFixed(String(num).match(/^0\.0*/)[0].length - 1);
            else // 不解决0或负数
                return num;
        },
        getFixedCount(num) {
            const m = String(num).match(/\.\d+/);
            return m ? m[0].length - 1 : 0;
        },
        getPercent(item) {
            return 100 * (this.yAxis_.max - this.getTopOne(item)) / (this.yAxis_.max - this.yAxis_.min);
        },
    },
    destroyed() {
        window.removeEventListener('resize', this._onResize, false);
    },
};
