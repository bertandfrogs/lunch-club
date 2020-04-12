<template>
    <div class="wrapper">
        <div class="title">
            <h1>{{ member.name }}</h1>
        </div>
        <div class="pictures">
            <img v-for="picture in member.gallery" :key="picture" v-bind:src="picture"/>
        </div>
        <div class="socialCard">
            <img class="socialImg" :src="member.youtubeImg" />
            <div class="socialCardRight">
                <a class="socialLink" :href="member.youtubeLink" target="blank">
                    <img class="socialLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/YouTube_logo_%282013-2015%29.png/220px-YouTube_logo_%282013-2015%29.png"/>
                    <h2 class="socialName">{{ member.youtubeName }}</h2>
                </a>
                <a class="socialLink" :href="member.twitchLink" target="blank">
                    <img class="socialLogo" src="https://cdn.discordapp.com/attachments/461174335567298571/698774915632988190/580b57fcd9996e24bc43c540.png"/>
                    <h2 class="socialName">{{ member.twitchName }}</h2>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Member",
    props: {
        member: {
            name: String,
            gallery: Array,
            youtubeName: String,
            youtubeImg: String,
            youtubeLink: String,
            twitchName: String,
            twitchLink: String
        }
    }
}
</script>

<style scoped>
    .wrapper {
        width: calc(100vw - 15px);
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .pictures {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .pictures img {
        width: 24%;
        min-width: 200px;
        object-fit: cover;
        margin: 5px;
    }
    h1 {
        font-size: 40px;
    }
    .socialCard {
        color: black;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        border-radius: 5px;
        background-color: white;
        width: 600px;
        max-width: 80%;
        margin: 20px;
        padding: 20px
    }
    .socialImg {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
    .socialLogo {
        width: 40px;
        object-fit: contain;
        margin: 20px;
    }
    .socialLink {
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
        margin: 0 20px;
    }
    @media screen and (max-width: 700px) {
        .pictures img {
            width: 48%;
        }
    }
    @media screen and (max-width: 500px) {
        .pictures img {
            width: 80%;
        }
    }
</style>