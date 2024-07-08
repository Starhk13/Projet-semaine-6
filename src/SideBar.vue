<script></script>

<template>
    <aside>
        <img src="./img/TESLA.png" alt="titre">
        <ul>
            <li class="active">Reports</li> 
            <li class="library">Library</li>    
            <li class="people">People</li>  
            <li class="activities">Activities</li>    
        </ul>
        <h2>Support</h2>
        <ul>
            <li class="started">Get Started</li>    
            <li class="settings">Settings</li>  
        </ul>
        <footer class="footer-aside">
            <img src="./img/sam.png" alt="">
            <p>Sam Wheeler</p>
            <div class="mail">samwheeler@example.com</div>
        </footer>
    </aside>
</template>

<style lang="scss">
    aside {
        position: relative;
        flex: 0 0 16%;
        color: rgba(0, 0, 0, 0.7);
        text-align: center;
        background-color: white;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
        height: 1246px;

        img {
            margin: 40px 0;
    }
        li {
            font-size: 13px;
            font-weight: 500;
            height: 30px;
            max-width: 162px;
            margin-right: auto;
            margin-left: auto;
            padding-top: 10px;
            border: solid 1px rgba(27, 89, 248, 0);
            text-align:start;

            &::before {
                content: '';
                display: inline-block;
                width: 24px;
                height: 24px;
                margin-right: 16px;
                margin-left: 20px;
                margin-top: -1px;
                vertical-align: middle;
                opacity: 0.7;
            }

            &:hover::before {
                    opacity: 1;
                }

            &:hover {
                border-radius: 9px;
                max-width: 162px;
                margin-right: auto;
                margin-left: auto;
                border: solid 1px rgba(27, 89, 248, 0.1);
                background-color: rgba(27, 89, 248, 0.1);
                color: rgba(27, 89, 248, 1);
                cursor: pointer;   
            }
        }

        .active {
            border-radius: 9px;
            max-width: 162px;
            margin-right: auto;
            margin-left: auto;
            border: solid 1px blue;
            background-color: rgba(27, 89, 248, 0.1);
            color: rgba(27, 89, 248, 1);

            &::before {
                
                background: url(img/image.png) center center / contain no-repeat;
                opacity: 1;
            }
        }

        .library::before{
            background: url(img/librairie.svg) center center / contain no-repeat;
        }
        .people::before {
            background: url(img/people.svg) center center / contain no-repeat;
        }
        .activities::before{
            background: url(img/actus.svg) center center / contain no-repeat;
        }
        .started::before {
            background: url(img/getStarted.svg) center center / contain no-repeat;
        }
        .settings::before {
            background: url(img/setting.svg) center center / contain no-repeat;
        }

        h2 {
            margin-top: 35px;
            color: rgba(0, 0, 0, 0.5);
            font-weight: 600;
            font-size: 15px;
            margin-bottom: 10px;
            
        }
    }

    .footer-aside {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        max-width: 162px;
        text-align: start;
        margin-left: auto;
        margin-right: auto;
        border-top: solid 1px rgba(229, 229, 229, 1) ;

        p {
           color: black; 
           font-size: 14px;
           font-weight: 600;
           margin-left: 9px;
           margin-bottom: 2px;
        }

        div {
            color: rgba(0, 0, 0, 0.5);
            font-size: 12px;
            font-weight: 400;
            margin-bottom: 40px;
            margin-left: 10px;
        }
        

        img {
            margin: 18px 11px 9px 10px;
        }
    }
</style>