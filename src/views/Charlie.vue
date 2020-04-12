<template>
    <Member :member="charlie"/>
</template>

<script>
    import Member from "../components/Member.vue"
    import memberData from "../members.js"
    export default {
        name: 'Charlie',
        components: {
            Member
        },
        data() {
            return {
                charlie: memberData.find(memberData => memberData.name === "Charlie")
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        background-color: #75ED24;
        /* background-color: black; */
        color: black;
    }
</style>