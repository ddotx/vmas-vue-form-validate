<template>
    <div>
        <h1>ViewBaseForm</h1>



        <BaseCheckbox label="Check1" v-model="state.stateCheckedOne" />
        <BaseCheckbox label="Check2" v-model="state.stateCheckedTwo" />
    </div>
</template>
  
<script setup>

import BaseCheckbox from '@/components/BaseCheckbox.vue'
import state from '@/state'


</script>