import { defineProps, defineEmits } from "vue";
import { supabase } from "@/supabaseClient";
const { defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    blog: {
        type: Object,
        required: true,
    },
});
const emit = defineEmits(["blogDeleted"]);
const deleteBlog = async () => {
    try {
        const { error } = await supabase
            .from("blogs")
            .delete()
            .eq("id", props.blog.id);
        if (error) {
            throw error;
        }
        emit("blogDeleted");
    }
    catch (error) {
        console.error("Error deleting blog:", error.message);
    }
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        blog: {
            type: Object,
            required: true,
        },
    },
    emits: {},
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (__VLS_ctx.blog.title);
    // @ts-ignore
    [blog,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.blog.content);
    // @ts-ignore
    [blog,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.blog.author);
    // @ts-ignore
    [blog,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("actions") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: (('/update/' + __VLS_ctx.blog.id)), ...{ class: ("action-link") }, }));
    const __VLS_2 = __VLS_1({ to: (('/update/' + __VLS_ctx.blog.id)), ...{ class: ("action-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: (('/update/' + __VLS_ctx.blog.id)), ...{ class: ("action-link") }, }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [blog,];
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.deleteBlog) }, ...{ class: ("action-button") }, });
    // @ts-ignore
    [deleteBlog,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['actions'];
        __VLS_styleScopedClasses['action-link'];
        __VLS_styleScopedClasses['action-button'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                $props: __VLS_makeOptional(props),
                ...props,
                $emit: emit,
                deleteBlog: deleteBlog,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
            $emit: emit,
        };
    },
});
;
