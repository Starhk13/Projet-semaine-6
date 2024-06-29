<script setup ></script>

<template>
    <div class="user-lead">
    <h3>User Leaderboard</h3>
    <div class="user-lead-content">
        <div class="user-img" >
            <img src="./img/Thomas.png" alt="">
        </div> 
        <div class="user">
            <p>Jesse Thomas</p>
            <p>637 Points - 98% Correct</p>
        </div>
        <div class="position">
            <span class="up" >1</span>
        </div>
    </div>
    <div class="user-lead-content">
        <div class="user-img" >
            <img src="./img/thisal.png" alt="">
        </div> 
        <div class="user" >
            <p>Thisal Mathiyazhagan</p>
            <p>637 Points - 89% Correct</p>
        </div>
        <div class="position" >
            <span class="down">2</span>
        </div>
    </div>
    <div class="user-lead-content">
        <div class="user-img" >
            <img src="./img/helen.png" alt="">
        </div> 
        <div class="user" >
            <p>Helen Chuang</p>
            <p>637 Points - 88% Correct</p>
        </div>
        <div class="position">
            <span class="up" >3</span>
        </div>
    </div>
    <div class="user-lead-content">
        <div class="user-img" >
            <img src="./img/lura.png" alt="">
        </div> 
        <div class="user" >
            <p>Lura Silverman</p>
            <p>637 Points - 88% Correct</p>
        </div>
        <div class="position">
            <span class="up" >4</span>
        </div>
    </div>
</div>
</template>

<style lang="scss" >

    .user-lead {
        background-color: white;
        width: 546px;
        border-radius: 20px;
        margin-bottom: 17px;

        h3 {
            font-size: 14px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.5);
            margin: 25px 0 35px 25px;
        }
    } 

    .user-img {
        transform: translateY(-5px);
    }

    .user-lead-content {
        display: flex;
        justify-content: space-between;
        margin: 0 58px 32px 25px;
    }

    .user-lead p{
        transform: translateX(-100px);

        &:first-child {
            color: black;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 4px;
        }

        &:last-child {
            color: rgba(0, 0, 0, 0.5);
            font-size: 12px;
            font-weight: 500;
        }
    }

    .position span {
        color: rgba(21, 30, 35, 1);
        font-size: 16px;
        font-weight: 600;

        &.up::after {
            content: '';
                display: inline-block;
                width: 12px;
                height: 11px;
                margin-right: 16px;
                margin-left: 12px;
                margin-top: -1px;
                vertical-align: middle;
                background: url(img/green-arrow.png) center center / contain no-repeat;
        }

        &.down::after {
            content: '';
                display: inline-block;
                width: 12px;
                height: 11px;
                margin-right: 16px;
                margin-left: 12px;
                margin-top: -1px;
                vertical-align: middle;
                background: url(img/red-arrow.png) center center / contain no-repeat;
        }

    }
</style>