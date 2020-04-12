<template>
    <Member :member="schlatt"/>
</template>

<script>
    import Member from "../components/Member.vue"
    import memberData from "../members.js"
    export default {
        name: 'Schlatt',
        components: {
            Member
        },
        data() {
            return {
                schlatt: memberData.find(memberData => memberData.name === "Schlatt")
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        background-color: #BADAFF;
        color: black;
    }
</style>