import { ref, onMounted } from "vue";
import BlogCard from "@/components/BlogCard.vue";
import { supabase } from "@/supabaseClient";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const errorMessage = ref(null);
const blogs = ref([]);
const orderBy = ref("created_at");
const showScrollToTop = ref(false);
const loadBlogs = async () => {
    try {
        const { data, error } = await supabase
            .from("blogs")
            .select("*")
            .order(orderBy.value, { ascending: false });
        if (error) {
            throw error;
        }
        if (data) {
            blogs.value = data;
        }
    }
    catch (error) {
        errorMessage.value = "Error fetching blogs";
    }
};
onMounted(async () => {
    await loadBlogs();
    window.addEventListener("scroll", handleScroll);
});
const handleBlogDeleted = () => {
    loadBlogs();
};
const handleScroll = () => {
    if (window.scrollY > 500) {
        showScrollToTop.value = true;
    }
    else {
        showScrollToTop.value = false;
    }
};
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (const [blog] of __VLS_getVForSourceType((__VLS_ctx.blogs))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((blog.id)), });
        // @ts-ignore
        [BlogCard,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(BlogCard, new BlogCard({ ...{ 'onBlogDeleted': {} }, blog: ((blog)), }));
        const __VLS_1 = __VLS_0({ ...{ 'onBlogDeleted': {} }, blog: ((blog)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        ({}({ ...{ 'onBlogDeleted': {} }, blog: ((blog)), }));
        let __VLS_5;
        const __VLS_6 = {
            onBlogDeleted: (__VLS_ctx.handleBlogDeleted)
        };
        const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BlogCard, __VLS_1));
        let __VLS_2;
        let __VLS_3;
        // @ts-ignore
        [blogs, handleBlogDeleted,];
    }
    if (__VLS_ctx.errorMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.errorMessage);
        // @ts-ignore
        [errorMessage, errorMessage,];
    }
    if (__VLS_ctx.showScrollToTop) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.scrollToTop) }, ...{ class: ("scroll-to-top") }, });
        // @ts-ignore
        [showScrollToTop, scrollToTop,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['scroll-to-top'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                BlogCard: BlogCard,
                errorMessage: errorMessage,
                blogs: blogs,
                showScrollToTop: showScrollToTop,
                handleBlogDeleted: handleBlogDeleted,
                scrollToTop: scrollToTop,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
