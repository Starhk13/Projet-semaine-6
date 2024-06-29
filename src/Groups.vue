<script setup ></script>

<template>
    <div class="groups-lead">
    <h3>Groups Leaderboard</h3>
    <div class="groups-lead-content">
        <div class="groups">
            <p>Houston Facility</p>
            <p>52 Points / User - 97% Correct</p>
        </div>
        <div class="position">
            <span class="up" >1</span>
        </div>
    </div>
    <div class="groups-lead-content">
        <div class="groups" >
            <p>Test Group</p>
            <p>52 Points / User - 95% Correct</p>
        </div>
        <div class="position" >
            <span class="down">2</span>
        </div>
    </div>
    <div class="groups-lead-content">
        <div class="groups" >
            <p>Sales Leadership</p>
            <p>52 Points / User -  87% Correct</p>
        </div>
        <div class="position">
            <span class="up" >3</span>
        </div>
    </div>
    <div class="groups-lead-content">
        <div class="groups" >
            <p>Northeast Region</p>
            <p>52 Points / User</p>
        </div>
        <div class="position">
            <span class="up" >4</span>
        </div>
    </div>
</div>
</template>

<style lang="scss" >

    .groups-lead {
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

    .groups-lead-content {
        display: flex;
        justify-content: space-between;
        margin: 0 58px 46px 25px;
    }

    .groups-lead p{

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