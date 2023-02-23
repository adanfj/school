<script>
export default {
    props: ['name','life','victory']
}
</script>

<template>
    <h2>{{ name }}{{ victory?" Won!":":" }}</h2>
    <div class="progress mb-4">
        <div class="progress-bar bg-success" role="progressbar" :aria-valuenow="life" aria-valuemin="0" aria-valuemax="100"
        :style="{
            width: `${Math.max(life,0)}%`
        }"></div>
    </div>
</template>