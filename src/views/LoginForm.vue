<template>
    <form @submit.prevent="onSubmit">
        <!-- <BaseInput label="Email" type="email" v-model="email" :error="emailError" /> -->
        <BaseInput label="Email" type="email" :modelValue="email" @change="handleChange" :error="emailError" />

        <BaseInput label="Password" type="password" v-model="password" :error="passwordError" />

        <BaseButton type="submit" class="-fill-gradient">
            Submit
        </BaseButton>
    </form>
    <!-- <pre>{{ value }}</pre> -->
</template>
  
<script setup>
import { useField, useForm } from 'vee-validate'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

function onSubmit() {
    alert('Submitted')
}

/* const { value: email, errorMessage: emailError } = useField('email', function (value) {
    if (!value) return 'This field is required'

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regex.test(String(value).toLowerCase())) {
        return 'Please enter a valid email address'
    }

    return true // ? Field is valid ✅
}) */

const validations = {
    email: value => {
        if (!value) return 'This field is required'

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regex.test(String(value).toLowerCase())) {
            return 'Please enter a valid email address'
        }

        return true // ? Field is valid ✅
    },
    password: value => {
        const requiredMessage = 'This field is required'
        if (value === undefined || value === null) return requiredMessage
        if (!String(value).length) return requiredMessage

        return true // ? Field is valid ✅
    }
}

const { setFieldValue } = useForm({
    validationSchema: validations
})


const { value: email, errorMessage: emailError } = useField('email')
// const { value: email, errorMessage: emailError, handleChange } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')

// REVIEW: Lazy Validation
const handleChange = (event) => {
    setFieldValue('email', event.target.value)
}

</script>