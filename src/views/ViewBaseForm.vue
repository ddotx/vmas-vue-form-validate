<template>
    <div>
        <h1>ViewBaseForm</h1>



        <BaseCheckbox label="Ca" v-model="state.stateChecked" />
    </div>
</template>
  
<script setup>

import BaseCheckbox from '@/components/BaseCheckbox.vue'
import state from '@/state'


</script>