<template>
    <div class="wrapper">
        <div class="overlay">
            <img src="../assets/lunchClubBeach.jpeg" draggable="false"/>
        </div>
    </div>
</template>

<style>
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