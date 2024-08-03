import { defineProps, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/supabaseClient";
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    blogId: {
        type: String,
        required: true,
    },
});
const title = ref("");
const content = ref("");
const author = ref("");
const showSuccessMessage = ref(false);
const successMessage = ref("");
const router = useRouter();
const updateForm = async () => {
    try {
        const { error } = await supabase
            .from("blogs")
            .update({
            title: title.value,
            content: content.value,
            author: author.value,
        })
            .eq("id", props.blogId);
        if (error) {
            throw error;
        }
        showSuccessMessage.value = true;
        successMessage.value = "Blog updated successfully!";
        router.push("/");
    }
    catch (error) {
        console.error("Error updating blog:", error.message);
    }
};
const loadBlogData = async () => {
    try {
        const { data, error } = await supabase
            .from("blogs")
            .select("*")
            .eq("id", props.blogId)
            .single();
        if (error) {
            throw error;
        }
        if (data) {
            title.value = data.title;
            content.value = data.content;
            author.value = data.author;
        }
    }
    catch (error) {
        console.error("Error fetching blog:", error.message);
    }
};
onMounted(async () => {
    await loadBlogData();
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        blogId: {
            type: String,
            required: true,
        },
    },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.updateForm) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.title)), });
    // @ts-ignore
    [updateForm, title,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ value: ((__VLS_ctx.content)), });
    // @ts-ignore
    [content,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.author)), });
    // @ts-ignore
    [author,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
    if (__VLS_ctx.showSuccessMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.successMessage);
        // @ts-ignore
        [showSuccessMessage, successMessage,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
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
                title: title,
                content: content,
                author: author,
                showSuccessMessage: showSuccessMessage,
                successMessage: successMessage,
                updateForm: updateForm,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
});
;
