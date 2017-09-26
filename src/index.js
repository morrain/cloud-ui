import './u-base.vue/base.css';
import * as directives from 'u-base.vue/directives';
import Badge from './u-badge.vue';
import BarChart from './u-bar-chart.vue';
import Base from './u-base.vue';
import Button from './u-button.vue';
import Calendar from './u-calendar.vue';
import Capsule from './u-capsule.vue';
import Capsules from './u-capsules.vue';
import Chart from './u-chart.vue';
import Checkbox from 'u-checkbox.vue';
import CircularProgress from './u-circular-progress.vue';
import ColorSelect from './u-color-select.vue';
import DatePicker from './u-date-picker.vue';
import DateTimePicker from './u-date-time-picker.vue';
import Field from './u-field.vue';
import Form from './u-form.vue';
import FormItem from './u-form-item.vue';
import Icon from './u-icon.vue';
import Input from './u-input.vue';
import InputField from './u-input-field.vue';
import LineChart from './u-line-chart.vue';
import LinearLayout from 'u-linear-layout.vue';
import LinearProgress from 'u-linear-progress.vue';
import Link from './u-link.vue';
import ListView from 'u-list-view.vue';
import ListViewItem from 'u-list-view-item.vue';
import Loading from './u-loading.vue';
import Logo from './u-logo.vue';
import Modal from './u-modal.vue';
import MultiSelect from './u-multi-select.vue';
import Navbar from './u-navbar.vue';
import NavbarItem from './u-navbar-item.vue';
import NumberInput from './u-number-input.vue';
import OldSelect from './u-old-select.vue';
import Pagination from './u-pagination.vue';
import PieChart from './u-pie-chart.vue';
import Pill from './u-pill.vue';
import Pills from './u-pills.vue';
import Popover from './u-popover.vue';
import Popper from './u-popper.vue';
import Select from './u-select.vue';
import SelectItem from './u-select-item.vue';
import CascadeSelect from './u-cascade-select.vue';
import Sidebar from './u-sidebar.vue';
import SidebarGroup from './u-sidebar-group.vue';
import SidebarItem from './u-sidebar-item.vue';
import SidebarMenu from './u-sidebar-menu.vue';
import StatusIcon from './u-status-icon.vue';
import Subnav from './u-subnav.vue';
import SubnavItem from './u-subnav-item.vue';
import Switch from './u-switch.vue';
import Tab from 'u-tab.vue';
import TableCell from './u-table-cell.vue';
import TableSelect from './u-table-select.vue';
import TableView from './u-table-view.vue';
import TableViewColumn from './u-table-view-column.vue';
import Tablet from './u-tablet.vue';
import Tablets from './u-tablets.vue';
import Tabs from './u-tabs.vue';
import Tag from './u-tag.vue';
import Textarea from 'u-textarea.vue';
import TimePicker from './u-time-picker.vue';
import Toast from './u-toast.vue';
import Tooltip from './u-tooltip.vue';
import TreeView from 'u-tree-view.vue';
import TreeViewNode from 'u-tree-view-node.vue';
import Validation from './u-validation.vue';
import XBarChart from './u-xbar-chart.vue';
import Draggable from './u-draggable.vue';
import Droppable from './u-droppable.vue';
import Movable from './u-movable.vue';
import Slider from './u-slider.vue';
import TableViewCell from './u-table-view-cell.vue';

const Components = {
    Badge,
    BarChart,
    Base,
    Button,
    Calendar,
    Capsule,
    Capsules,
    CascadeSelect,
    Chart,
    Checkbox,
    CircularProgress,
    ColorSelect,
    DatePicker,
    DateTimePicker,
    Field,
    Form,
    FormItem,
    Icon,
    Input,
    InputField,
    LineChart,
    LinearLayout,
    LinearProgress,
    Link,
    ListView,
    ListViewItem,
    Loading,
    Logo,
    Modal,
    MultiSelect,
    Navbar,
    NavbarItem,
    NumberInput,
    OldSelect,
    Pagination,
    PieChart,
    Pill,
    Pills,
    Popover,
    Popper,
    Select,
    SelectItem,
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarMenu,
    StatusIcon,
    Subnav,
    SubnavItem,
    Switch,
    Tab,
    TableCell,
    TableSelect,
    TableView,
    TableViewColumn,
    Tablet,
    Tablets,
    Tabs,
    Tag,
    Textarea,
    TimePicker,
    Toast,
    Tooltip,
    TreeView,
    TreeViewNode,
    Validation,
    XBarChart,
    Draggable,
    Droppable,
    Movable,
    Slider,
    TableViewCell,
};

export {
    Badge,
    BarChart,
    Base,
    Button,
    Calendar,
    Capsule,
    Capsules,
    CascadeSelect,
    Chart,
    Checkbox,
    CircularProgress,
    ColorSelect,
    DatePicker,
    DateTimePicker,
    Field,
    Form,
    FormItem,
    Icon,
    Input,
    InputField,
    LineChart,
    LinearLayout,
    LinearProgress,
    Link,
    ListView,
    ListViewItem,
    Loading,
    Logo,
    Modal,
    MultiSelect,
    Navbar,
    NavbarItem,
    NumberInput,
    OldSelect,
    Pagination,
    PieChart,
    Pill,
    Pills,
    Popover,
    Popper,
    Select,
    SelectItem,
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarMenu,
    Subnav,
    SubnavItem,
    StatusIcon,
    Switch,
    Tab,
    TableCell,
    TableSelect,
    TableView,
    TableViewColumn,
    Tablet,
    Tablets,
    Tabs,
    Tag,
    Textarea,
    TimePicker,
    Toast,
    Tooltip,
    TreeView,
    TreeViewNode,
    Validation,
    XBarChart,
    Draggable,
    Droppable,
    Movable,
    Slider,
    TableViewCell,
};

const Library = {
    install(Vue) {
        for (const key in directives)
            Vue.directive(key, directives[key]);
        for (const key in Components)
            Vue.component(Components[key].name, Components[key]);
    },
};

export default Library;
