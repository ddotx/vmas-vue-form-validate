<template>
    <div>
        <h1>Create an Event</h1>
        <form @submit.prevent="submit">
            <BaseSelect label="Select a category" :options="categories" v-model="category" :error="errors.category" />

            <h3>Name & describe your event</h3>
            <BaseInput label="Title" type="text" v-model="title" :error="errors.title" />

            <BaseInput label="Description" type="text" v-model="description" :error="errors.description" />

            <h3>Where is your event?</h3>
            <BaseInput label="Location" type="text" v-model="location" :error="errors.location" />

            <h3>Are pets allowed?</h3>
            <BaseRadioGroup name="pets" :options="[
                { value: 1, label: 'Yes' },
                { value: 0, label: 'No' }
            ]" v-model="pets" :error="errors.pets" />

            <h3>Extras</h3>
            <div>
                <BaseCheckbox label="Catering" v-model="catering" :error="errors.catering" />
            </div>

            <div>
                <BaseCheckbox label="Live music" v-model="music" :error="errors.music" />
            </div>

            <div>
                <BaseButton type="submit" class="-fill-gradient" something="else">
                    Submit
                </BaseButton>
            </div>
        </form>
    </div>
</template>
  
<script setup>
import { useField, useForm } from 'vee-validate'
import { object, string, number, boolean } from 'yup'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'

const categories = [
    'sustainability',
    'nature',
    'animal welfare',
    'housing',
    'education',
    'food',
    'community'
]

/* const required = value => {
    const requiredMessage = 'This field is required'
    if (value === undefined || value === null) return requiredMessage
    if (!String(value).length) return requiredMessage

    return true
}

const minLength = (number, value) => {
    if (String(value).length < number) return 'Please type at least ' + number + ' characters'

    return true
}

const anything = () => {
    return true
} */

/* const validationSchema = {
    category: required,
    title: value => {
        const req = required(value)
        if (req !== true) return req
        const min = minLength(5, value)
        if (min !== true) return min

        return true
    },
    description: required,
    location: undefined, // ? or use anything
    pets: anything,
    catering: anything,
    music: anything
} */

/* const validationSchema = yup.object({
    category: yup.string().required(),
    title: yup.string().required('A cool title is required').min(3),
    description: yup.string().required(),
    location: yup.string(),
    pets: yup.number(),
    catering: yup.boolean(),
    music: yup.boolean()
}) */

const validationSchema = object({
    category: string().required(),
    title: string().required('A cool title is required').min(3),
    description: string().required(),
    location: string(),
    pets: number(),
    catering: boolean(),
    music: boolean()
})

const { handleSubmit, errors } = useForm({
    validationSchema,
    initialValues: {
        pets: 1,
        catering: false,
        music: false
    }
})

/* const { value: category, errorMessage: categoryError } = useField('category')
const { value: title, errorMessage: titleError } = useField('title')
const { value: description, errorMessage: descriptionError } = useField('description')
const { value: location, errorMessage: locationError } = useField('location')
const { value: pets, errorMessage: petsError } = useField('pets', undefined, { initialValue: 1 })
const { value: catering, errorMessage: cateringError } = useField('catering', undefined, { initialValue: false })
const { value: music, errorMessage: musicError } = useField('music', undefined, { initialValue: false })
 */

const { value: category } = useField('category')
const { value: title } = useField('title')
const { value: description } = useField('description')
const { value: location } = useField('location')
const { value: pets } = useField('pets')
const { value: catering } = useField('catering')
const { value: music } = useField('music')



const submit = handleSubmit(values => {
    console.log('submit', values)
})


</script>