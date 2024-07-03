<script setup ></script>

<template>
    <div class="card-weakest">
    <h3>Weakest Topics</h3>
    <div class="weakest-content">
        <div>
            <img src="./img/food-safety.png" alt="food">
        </div> 
        <div class="bar" >
            <p>Food Safety</p>
            <div class="progress-bar-weakest">
                <span style="width: 74%;"></span> 
            </div>
        </div>
        <div class="score" >
            <p><span>74% </span>Correct</p>
        </div>
    </div>
    <div class="weakest-content">
        <div>
            <img src="./img/basic-procedures.png" alt="basic">
        </div> 
        <div class="bar" >
            <p>Compliance Basics Procedures </p>
            <div class="progress-bar-weakest">
                <span style="width: 52%;"></span> 
            </div>
        </div>
        <div class="score" >
            <p><span>52% </span>Correct</p>
        </div>
    </div>
    <div class="weakest-content">
        <div>
            <img src="./img/company-net.png" alt="company">
        </div> 
        <div class="bar" >
            <p>Company Networking</p>
            <div class="progress-bar-weakest">
                <span style="width: 36%;"></span> 
            </div>
        </div>
        <div class="score" >
            <p><span>36% </span>Correct</p>
        </div>
    </div>
</div>
</template>

<style lang="scss" >

    .card-weakest {
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

    .weakest-content {
        display: flex;
        justify-content: space-between;
        margin: 0 25px 32px 25px;

        &:last-child {
            margin-bottom: 49px;
        }
    }

    .progress-bar-weakest {
    height: 10px; 
    width: 310px; 
    background: linear-gradient(to right, rgba(255, 191, 26, 0.2) 0%, rgba(255, 64, 128, 0.2) 100%);
    border-radius: 5px; 
    position: relative;

}

.progress-bar-weakest span {
    position: absolute; 
    bottom: 0; 
    height: 100%; 
    background: linear-gradient(to right, rgba(255, 191, 26, 1) 0%, rgba(255, 64, 128, 1) 100%);
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