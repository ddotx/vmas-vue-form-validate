<template>
    <p aria-live="assertive" class="errorMessage" :id="id">
        <slot />
    </p>
</template>
  
<script setup>

defineProps({
    id: {
        type: [String, Number],
        required: true
    }
})

</script>