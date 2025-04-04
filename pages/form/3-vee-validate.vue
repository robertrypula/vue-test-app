<script>
import { useField, useForm } from 'vee-validate'

export default {
    setup() {
        const required = value => {
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
        }

        const validationSchema = {
            category: required,
            title: value => {
                const req = required(value)
                if (req !== true) return req

                const min = minLength(3, value)
                if (min !== true) return min

                return true
            },
            description: required,
            location: undefined,
            pets: anything,
            catering: anything,
            music: anything
        }

        const { handleSubmit, errors } = useForm({
            validationSchema,
            initialValues: {
                pets: 1,
                catering: false,
                music: false
            }
        })

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

        return {
            category,
            title,
            description,
            location,
            pets,
            catering,
            music,
            submit,
            errors
        }
    },
    data() {
        return {
            categories: [
                'sustainability',
                'nature',
                'animal welfare',
                'housing',
                'education',
                'food',
                'community'
            ]
        }
    }
}
</script>

<template>
    <div>
        <h1>Create an Event</h1>
        <form @submit.prevent="submit">
            <BaseSelect v-model="category" label="Select a category" :options="categories" :error="errors.category" />

            <h3>Name & describe your event</h3>
            <BaseInput v-model="title" label="Title" type="text" :error="errors.title" />

            <BaseInput v-model="description" label="Description" type="text" :error="errors.description" />

            <h3>Where is your event?</h3>
            <BaseInput v-model="location" label="Location" type="text" :error="errors.location" />

            <h3>Are pets allowed?</h3>
            <BaseRadioGroup v-model="pets" name="pets" :options="[
                { value: 1, label: 'Yes' },
                { value: 0, label: 'No' }
            ]" :error="errors.pets" />

            <h3>Extras</h3>
            <div>
                <BaseCheckbox v-model="catering" label="Catering" :error="errors.catering" />
            </div>

            <div>
                <BaseCheckbox v-model="music" label="Live music" :error="errors.music" />
            </div>

            <div>
                <BaseButton type="submit" class="-fill-gradient" something="else">
                    Submit
                </BaseButton>
            </div>
        </form>
    </div>
</template>