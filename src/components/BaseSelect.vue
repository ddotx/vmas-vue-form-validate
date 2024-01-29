<template>
    <label v-if="label" :for="uuid">
        {{ label }}
    </label>
    <select class="field" v-bind="$attrs" :value="modelValue" @change="updateValue" :id="uuid"
        :aria-describedby="error ? `${uuid}-error` : null" :aria-invalid="error ? true : false" :class="{ error }">
        <option v-for="option in options" :value="option" :key="option" :selected="option === modelValue">
            {{ option }}
        </option>
    </select>
    <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
        {{ error }}
    </BaseErrorMessage>
</template>
  
<script setup>
import UniqueID from '@/features/UniqueID'
import BaseErrorMessage from '@/components/BaseErrorMessage.vue';

defineProps({
    options: {
        type: Array,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    error: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number]
    }
})


const uuid = UniqueID().getID()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    const value = event.target.value
    emit('update:modelValue', value)
}


</script>