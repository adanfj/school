<script>
export default {
    props: {
        action: String,
        onSubmit: Function,
        fields: Array
    },
}
</script>
<template>
    <form class="" :action="action" @submit.prevent="onSubmit">
        <fieldset v-for="fieldset in fields">
            <legend>{{ fieldset.legend }}</legend>
            <div class="mb-3" v-for="field in fieldset.fields">
                <label v-if="field.type != 'checkbox'" for="exampleInputEmail1" class="form-label col-form-label-lg">{{
                    field.label
                }}</label>
                <textarea v-if="field.type == 'textarea'" cols="30" rows="10" v-model="field.value"></textarea>
                <div v-else-if="field.type == 'checkbox'" class="form-check">
                    <label class="form-check-label col-form-label-lg">
                        <input class="form-check-input" type="checkbox" v-model="field.value">
                        {{ field.label }}
                    </label>
                </div>
                <select v-if="field.type == 'select'" class="form-select form-select-sm" v-model="field.value">
                    <option v-for="option in field.options" :value="option">{{ option }}</option>
                </select>
                <input v-else :type="field.type" class="form-control" :aria-describedby="field.label + 'Help'"
                    v-model="field.value">
                <div v-if="field.help" :id="field.label + 'Help'" class="form-text">{{ field.help }}</div>
            </div>
        </fieldset>
        <hr v-for="_ in fields">
    </form>
</template>