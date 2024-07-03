<script setup ></script>

<template>
    <div class="card-strongest">
    <h3>Strongest Topics</h3>
    <div class="strongest-content">
        <div>
            <img src="./img/covid.png" alt="covid">
        </div> 
        <div class="bar" >
            <p>Covid Protocols</p>
            <div class="progress-bar-strongest">
                <span style="width: 95%;"></span> 
            </div>
        </div>
        <div class="score" >
            <p><span>95% </span>Correct</p>
        </div>
    </div>
    <div class="strongest-content">
        <div>
            <img src="./img/cyber.png" alt="">
        </div> 
        <div class="bar" >
            <p>Cyber Security Basics</p>
            <div class="progress-bar-strongest">
                <span style="width: 92%;"></span> 
            </div>
        </div>
        <div class="score" >
            <p><span>92% </span>Correct</p>
        </div>
    </div>
    <div class="strongest-content">
        <div>
            <img src="./img/social-media.png" alt="">
        </div> 
        <div class="bar" >
            <p>Social Media Policies</p>
            <div class="progress-bar-strongest">
                <span style="width: 89%;"></span> 
            </div>
        </div>
        <div class="score" >
            <p><span>89% </span>Correct</p>
        </div>
    </div>
</div>
</template>

<style lang="scss" >

    .card-strongest {
        background-color: white;
        width: 546px;
        border-radius: 20px;
        margin-bottom: 17px;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);

        h3 {
            font-size: 14px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.5);
            margin: 25px 0 35px 25px;
        }
    }

    .strongest-content {
        display: flex;
        justify-content: space-between;
        margin: 0 25px 32px 25px;

        &:last-child {
            margin-bottom: 49px;
        }
    }

    .progress-bar-strongest {
    height: 10px; 
    width: 310px; 
    background: linear-gradient(to right, rgba(47, 234, 155, 0.2) 0%, rgba(127, 221, 83, 0.2) 100%);
    border-radius: 5px; 
    position: relative;

}

.progress-bar-strongest span {
    position: absolute; 
    bottom: 0; 
    height: 100%; 
    background: linear-gradient(to right, rgba(47, 234, 155, 1) 0%, rgba(127, 221, 83, 1) 100%);
    border-radius: 5px; 
}

.score {
    transform: translateY(19px);

    p {
    color: rgba(0, 0, 0, 0.3);
    font-size: 14px;
    font-weight: 600;
    }

    span {
    color: rgba(0, 0, 0, 0.7);
    }
}

.bar p {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
}

</style>