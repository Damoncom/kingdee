<template>
    <div class="threeImg">
        <div class="Containt">
            <ul :style="{ left: calleft + 'px', width: dataleng + 'px' }" v-on:mouseover="stopmove()"
                v-on:mouseout="move()" class="imgBoxoul">
                <li v-for="(item, index) in dataList" :key="index" @click="gotodetails(item.id)" ref="lis">
                    <img :src="item.thumb" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {
        reactive,
        onMounted,
        toRefs
    } from "vue";
    import logo from '@/assets/info_img1.jpg';
    export default {
        setup() {
            const user = reactive({
                calleft: 0,
                timer: null,
                dataLeng: 0,
                dataList: [{
                        thumb: logo,
                        id: 0,
                    },
                    {
                        thumb: logo,
                        id: 1,
                    },
                    {
                        thumb: logo,
                        id: 2,
                    },
                    {
                        thumb: logo,
                        id: 3,
                    },
                    {
                        thumb: logo,
                        id: 1,
                    }
                ],
            });

            function imgbox() {
                var imgBox = document.getElementsByClassName("imgBoxoul")[0];
                imgBox.innerHTML += imgBox.innerHTML;
            }

            function move() {
                user.timer = setInterval(() => {
                    starmove()
                }, 20)
            }

            function datalen() {
                user.dataleng = 240 * Number(user.dataList.length * 2);
            }

            function starmove() {
                user.calleft -= 1.2;
                if (user.calleft <= -1200 + -24) {
                    user.calleft = -23;
                }
            }

            function stopmove() {
                clearInterval(user.timer);
            }

            onMounted(() => {
                move();
                imgbox();
                datalen();
            });

            return {
                ...toRefs(user),
                stopmove,
                move
            };
        },
    };
</script>

<style scoped>
    .threeImg {
        position: relative;
        margin-top: -100px;
        height: 200px;
    }

    .threeImg .Containt ul {
        margin: 0 auto;
        width: 2400px;
        position: absolute;
        left: 0px;
        cursor: pointer;
        height: 100%;
        z-index: 10;
    }

    .threeImg .Containt ul li {
        float: left;
        width: 191px;
        height: 45px;
        margin-right: 20px;
        border-radius: 10px;
        overflow: hidden;
        background-color: #ffffff;
    }

    .threeImg .Containt ul li img {
        width: 191px;
        height: 45px;
    }

    .Containt {
        position: relative;
        padding: 60px 0;
        overflow-y: auto;
        width: 1200px;
        height: 365px;
        overflow: hidden;
        margin: 0 auto;
    }
</style>