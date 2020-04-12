<template>
    <div>
        <div class="overlay">
            <img src="../assets/lunchClubHomeEdited3.jpg" draggable="false"/>
        </div>
        <h2>“we make the funny we do the thing”</h2>
        <h4>“a buncha guys bein' pals”</h4>
        <footer>
            <span>Sarah Smalley, April 12, 2020</span>
            <a href="https://github.com/bertandfrogs/lunch-club">GitHub</a>
        </footer>
    </div>
</template>

<style scoped>
    h2, h4 {
        text-align: center;
    }
    .overlay img {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
</style>