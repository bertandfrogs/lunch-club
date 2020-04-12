<template>
    <Member :member="noah"/>
</template>

<script>
    import Member from "../components/Member.vue"
    import memberData from "../members.js"
    export default {
        name: 'Noah',
        components: {
            Member
        },
        data() {
            return {
                noah: memberData.find(memberData => memberData.name === "Noah")
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        background-color: black;
        color: white;
    }
</style>