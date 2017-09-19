export default {
    name: 'u-carousel-item',
    computed: {
        index() {
            return this.parentVM.items.indexOf(this);
        },
        parentItemLen() {
            return this.parentVM.items.length;
        },
        isCurrent() {
            return this.index === this.parentVM.current;
        },
        isActive() {
            return this.index === this.parentVM.active;
        },
        isPrev() {
            return this.index === (this.parentVM.current - 1 + this.parentItemLen) % this.parentItemLen;
        },
        isNext() {
            return this.index === (this.parentVM.current + 1) % this.parentItemLen;
        },
    },
    created() {
        const parentVM = this.$parent;
        parentVM.$emit('add-item-vm', this);
        if (parentVM.selectedVM === undefined)
            parentVM.selectedVM = this;
        this.animation = parentVM.animation;
    },
    destroyed() {
        const parentVM = this.$parent;
        parentVM.$emit('remove-item-vm', this);
    },
};