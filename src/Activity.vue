<script setup></script>

<template>
    <div class="card-activity">
        <header class="header-activity">
            <h3>Activity</h3>
            <div>Month</div>
        </header>
        <main class="body-activity" >
            <div class="nombre">
                <span>400</span><br>
                <span>300</span><br>
                <span>200</span><br>
                <span>100</span><br>
                <span>0</span>
            </div>
            <div>
                <div class="progress-bar-month">
                    <span style="height: 25%;"></span> 
                </div>
                <p>JAN</p>
            </div>
            <div>
                <div class="progress-bar-month">
                    <span style="height: 30%;"></span> 
                </div>
                <p>FEB</p>
            </div>
            <div>
                <div class="progress-bar-month">
                    <span style="height: 30%;"></span> 
                </div>
                <p>MAR</p>
            </div>
            <div>
                <div class="progress-bar-month">
                    <span style="height: 66%;"></span> 
                </div>
                <p>APR</p>
            </div>
            <div>
                <div class="progress-bar-month">
                    <span style="height: 70%;"></span> 
                </div>
                <p>MAY</p>
            </div>
            <div>
                <div class="progress-bar-month">
                    <span style="height: 50%;"></span> 
                </div>
                <p>JUN</p>
            </div>
            <div>
                <div class="progress-bar-month">
                    <span style="height: 66%;"></span> 
                </div>
                <p>JUL</p>
            </div>
            <div>
                <div class="progress-bar-month">
                    <span style="height: 20%;"></span> 
                </div>
                <p>AUG</p>
            </div>
            <div>
                <div class="progress-bar-month">
                    <span style="height: 70%;"></span> 
                </div>
                <p>SEP</p>
            </div>
            <div>
                <div class="progress-bar-month">
                    <span style="height: 80%;"></span> 
                </div>
                <p>OCT</p>
            </div>
            <div>
                <div class="progress-bar-month">
                    <span style="height: 90%;"></span> 
                </div>
                <p>NOV</p>
            </div>
            <div>
                <div class="progress-bar-month">
                    <span style="height: 100%;"></span> 
                </div>
                <p>DEC</p>
            </div>
        </main>

    </div>
</template>

<style lang="scss" >
.card-activity {
    background-color: white;
    width: 543px; 
    border-radius: 20px;
    margin-bottom: 17px;   
}

.header-activity {
    display: flex;
    width: 511px;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    margin-bottom: 27px;

    h3 {
        color: rgba(77, 77, 77, 1);
        font-size: 14px;
        font-weight: 500;
        padding: 15px 0 15px 0px
    }

    div {
        color: rgba(15, 37, 82, 1);
        font-size: 12px;
        font-weight: 600;
        padding: 15px 3px 15px 0px;

        &::after {
            content: '';
            display: inline-block;
            width: 11px;
            height: 11px;
            margin-top: -1px;
            vertical-align: middle;
            background: url(img/month.svg) center center / contain no-repeat;
            transform: translate(3px, 0px);
        }
    }
}

.body-activity {
    background-color: white;
    display: flex;
    justify-content: space-between;
    width: 511px;
    margin-right: auto;
    margin-left: auto;
    
    p {
        color: rgba(131, 131, 131, 1);
        font-size: 9px;
        font-weight: 500;
        margin-top: 15px;
        transform: translateX(-4px);
     }
    
}

.progress-bar-month {
    height: 199px; 
    width: 10px; 
    background-color: rgba(242, 247, 255, 1); 
    border-radius: 5px; 
    position: relative;

}

.progress-bar-month span {
    position: absolute; 
    bottom: 0; 
    width: 100%; 
    background-color: rgba(27, 89, 248, 1);
    border-radius: 5px; 
}

.nombre span {
    display: inline-block;
    color: rgba(0, 0, 0, 0.5);
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 33px;
    transform: translateY(-4px);
}

.nombre span:last-child {
    margin-bottom: 0;
}

</style>