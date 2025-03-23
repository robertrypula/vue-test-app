<script>
import SetupFormComponent from '@/features/SetupFormComponent'
import { getID } from '@/features/UniqueID'

export default {
    props: {
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
    <select v-bind="{ ...$attrs, onChange: updateValue }" :id="uuid" class="field" :value="modelValue"
        :aria-describedby="error ? `${uuid}-error` : null" :aria-invalid="error ? true : false" :class="{ error }">
        <option v-for="option in options" :key="option" :value="option" :selected="option === modelValue">
            {{ option }}
        </option>
    </select>
    <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
        {{ error }}
    </BaseErrorMessage>
</template>
