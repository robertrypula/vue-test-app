<script>
import { getID } from '@/features/UniqueID'
import SetupFormComponent from '@/features/SetupFormComponent'

export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number]
        },
        value: {
            type: [String, Number]
        },
        error: {
            type: String,
            default: ''
        }
    },
    setup(props, context) {
        const uuid = getID()
        const { updateValue } = SetupFormComponent(props, context)

        return {
            updateValue,
            uuid
        }
    }
}
</script>

<template>
    <input v-bind="{ ...$attrs, onChange: updateValue }" :id="uuid" type="radio" :checked="modelValue === value" />
    <label v-if="label" :for="uuid">
        {{ label }}
    </label>
    <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
        {{ error }}
    </BaseErrorMessage>
</template>
