<script>
import SetupFormComponent from '@/features/SetupFormComponent'
import { getID } from '@/features/UniqueID'

export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        error: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        }
    },
    setup(props, context) {
        const { updateValue } = SetupFormComponent(props, context)
        const uuid = getID()

        return {
            updateValue,
            uuid
        }
    }
}
</script>

<template>
    <label v-if="label" :for="uuid">
        {{ label }}
    </label>
    <input v-bind="{ ...$attrs, onInput: updateValue }" :id="uuid" class="field" :value="modelValue"
        :placeholder="label" :aria-describedby="error ? `${uuid}-error` : null" :aria-invalid="error ? true : false"
        :class="{ error }">
    <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
        {{ error }}
    </BaseErrorMessage>
</template>
