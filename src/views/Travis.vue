<template>
    <Member :member="travis"/>
</template>

<script>
    import Member from "../components/Member.vue"
    import memberData from "../members.js"
    export default {
        name: 'Travis',
        components: {
            Member
        },
        data() {
            return {
                travis: memberData.find(memberData => memberData.name === "Travis")
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        background-color: #EF7165;
        color: white;
    }
</style>