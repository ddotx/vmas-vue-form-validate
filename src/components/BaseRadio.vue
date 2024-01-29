<template>
    <input type="radio" v-bind="$attrs" @change="updateValue" :checked="modelValue === value" :id="uuid" />
    <label v-if="label" :for="uuid">
        {{ label }}
    </label>
    <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
        {{ error }}
    </BaseErrorMessage>
</template>
  
<script setup>
import UniqueID from '@/features/UniqueID'
import BaseErrorMessage from '@/components/BaseErrorMessage.vue';

defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number]
    },
    value: {
        type: [String, Number]
    },
    error: {
        type: String,
        default: ''
    }
})


const uuid = UniqueID().getID()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    const value = event.target.value
    emit('update:modelValue', value)
}


</script>