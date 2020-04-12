<template>
    <Member :member="ted"/>
</template>

<script>
    import Member from "../components/Member.vue"
    import memberData from "../members.js"
    export default {
        name: 'Ted',
        components: {
            Member
        },
        data() {
            return {
                ted: memberData.find(memberData => memberData.name === "Ted")
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        background: rgb(156,219,231);
        background: linear-gradient(119deg, rgba(156,219,231,1) 21%, rgba(245,134,141,1) 89%);
        color: black;
    }
</style>