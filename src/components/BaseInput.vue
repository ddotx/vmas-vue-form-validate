<template>
    <label v-if="label" :for="uuid">
        {{ label }}
    </label>
    <input class="field" v-bind="$attrs" :type="type" :id="uuid" :value="modelValue" @input="updateValue"
        :placeholder="label" :aria-describedby="error ? `${uuid}-error` : null" :aria-invalid="error ? true : false"
        :class="{ error }">
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
    error: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: [String, Number],
        default: ''
    }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    const value = event.target.value
    // console.warn('updateValue', value)
    emit('update:modelValue', value)
}

const uuid = UniqueID().getID()

</script>