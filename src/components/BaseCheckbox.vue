<template>
    <input v-bind="$attrs" :checked="modelValue" @change="updateValue" :id="uuid" type="checkbox" class="field" />
    <label :for="uuid" v-if="label">
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
        type: Boolean
    },
    error: {
        type: String,
        default: ''
    }
})

const uuid = UniqueID().getID()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    const value = event.target.checked
    emit('update:modelValue', value)
}


</script>