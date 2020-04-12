<template>
    <Member :member="carson"/>
</template>

<script>
    import Member from "../components/Member.vue"
    import memberData from "../members.js"
    export default {
        name: 'Carson',
        components: {
            Member
        },
        data() {
            return {
                carson: memberData.find(memberData => memberData.name === "Carson")
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        background-color: #2A5786;
        /* background-color: black; */
        color: white;
    }
</style>