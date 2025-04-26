<template>
    <!-- Textarea -->
    <textarea
        v-if="type == 'textarea'"
        :placeholder="placeholder"
        class="form-inp form-text"
        :class="className"
        :value="value"
        @input="(e) => {$emit('update:value', e.target.value)}"
    ></textarea>
    <!-- Phone input -->
    <input 
        v-if="type == 'phone'"
        v-model="maskedValue"
        v-maska="bindedObject"
        data-maska="+7(###) ###-##-##"
        :placeholder="placeholder"
        class="form-inp"
        :class="className"
        autofocus
        @maska="$emit('update:value', bindedObject['masked'])"
    >
    <!-- Input -->
    <input
        v-if="type != 'textarea' && type != 'phone'"
        :type="type" 
        :placeholder="placeholder"
        class="form-inp"
        :class="className"
        :value="value"
        @input="(e) => {$emit('update:value', e.target.value)}"
    >
</template>

<script>
import { vMaska } from "maska";

export default {
    name: 'Form Inp',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: String,
        },
        className: {
            type: String,
            default: ""
        }
    },
    emits: ["update:value"],
    directives: { maska: vMaska },
    data () {
        return {
            maskedValue: this.value,
            bindedObject: {
                masked: "",
                unmasked: "",
                completed: false,
            },
        }
    }
}
</script>

<style>

</style>