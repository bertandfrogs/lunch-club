<template>
    <Member :member="cooper"/>
</template>

<script>
    import Member from "../components/Member.vue"
    import memberData from "../members.js"
    export default {
        name: 'Cooper',
        components: {
            Member
        },
        data() {
            return {
                cooper: memberData.find(memberData => memberData.name === "Cooper")
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        background-color: #495139;
        /* background-color: black; */
        color: white;
    }
</style>