import CascadeSelect from '../u-cascade-select.vue';
import regionData from './regionData';

export default {
    props: {
        data: { default() { return regionData; } },
    },
    name: 'u-region-select',
    mixins: [CascadeSelect],
};
