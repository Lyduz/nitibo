<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <NavigationButton text="Go Back"
                android.systemIcon="ic_menu_back"
                @tap="$router.push('/home')" />
            <Label text="NativeScript"
                style="font-size: 20%;" />
        </ActionBar>

        <StackLayout>
            <Title titleName="NativeScript-Vue-TypeScript"></Title>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import { mapState } from 'vuex'

    //components
    import Title from './Selection/Title.vue'

    @Component({
        components: {
            Title,
        },
        computed: {
            ...mapState('json_helper', [
                'loggedUsername'
            ])
        },
        mounted() {
            alert(`Message: ${this.loggedUsername}`)
                .then(() => {
                    console.log("Alert dialog closed.");
                });
        }
    })
    export default class Categories extends Vue {

    }
</script>

<style scoped>
    .button-categories-first {
        font-size: 38px;
        width: 80%;
        background-color: #5C7829;
    }
</style>