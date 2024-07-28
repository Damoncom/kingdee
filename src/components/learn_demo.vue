<template>
    <div class="box">
        <h1>三级导航栏</h1>

        <!-- 一级导航栏 -->
        <ul class="first_list"
            @mouseover="showSecond"
            @mouseleave="notShowSecond"
        >
            <li class="first_item"
                v-for="(first,first_index) of firstList"
                :key="first_index"
                :class="navActiveIndex == first_index ? 'first_item_actived' : 'first_item'"
            >
                <div class="first_name"
                    :data-name="first.name"
                    :data-index="first_index"
                >{{ first.name }}</div>

                <!-- 二级导航栏 -->
                <ul class="second_list" 
                    v-show="navActiveIndex == first_index"
                    @mouseover="showThird"
                >
                    <li class="second_item"
                        v-for="(second,second_index) of first.secondList"
                        :key="second_index"
                        :class="secActiveIndex == second_index ? 'second_item_actived' : 'second_item' "
                    >
                        <div class="second_name"
                            :data-name="second.name"
                            :data-index="second_index"
                        >{{ second.name }}</div>

                        <!-- 三级导航栏 -->
                        <ul class="third_list" v-show="secActiveIndex == second_index">
                            <li class="third_item"
                                v-for="(third,third_index) of second.thirdList"
                                :key="third_index"
                            >
                                <div class="third_name">{{ third.name }}</div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import { debounce, throttle } from 'lodash'

    const firstList = [
        {
            id:'1',
            name:'一',
            secondList:[
                {
                    id:'1-1',
                    name:'11',
                    thirdList:[
                        {
                           id:'1-1-1',
                            name:'111', 
                        },
                        {
                           id:'1-1-2',
                            name:'112', 
                        },
                        {
                           id:'1-1-3',
                            name:'113', 
                        },   
                    ],
                },
                {
                    id:'1-2',
                    name:'12',
                    thirdList:[
                        {
                           id:'1-2-1',
                            name:'121', 
                        },
                        {
                           id:'1-2-2',
                            name:'122', 
                        },
                        {
                           id:'1-2-3',
                            name:'123', 
                        },   
                    ],
                },
                {
                    id:'1-3',
                    name:'13',
                    thirdList:[
                        {
                           id:'1-3-1',
                            name:'131', 
                        },
                        {
                           id:'1-3-2',
                            name:'132', 
                        },
                        {
                           id:'1-3-3',
                            name:'133', 
                        },   
                    ],
                },
            ]
        },
        {
            id:'2',
            name:'二',
            secondList:[
                {
                    id:'2-1',
                    name:'21',
                    thirdList:[
                        {
                           id:'2-1-1',
                            name:'211', 
                        },
                        {
                           id:'2-1-2',
                            name:'212', 
                        },
                        {
                           id:'2-1-3',
                            name:'213', 
                        },   
                    ],
                },
                {
                    id:'2-2',
                    name:'22',
                    thirdList:[
                        {
                           id:'2-2-1',
                            name:'221', 
                        },
                        {
                           id:'2-2-2',
                            name:'222', 
                        },
                        {
                           id:'2-2-3',
                            name:'223', 
                        },   
                    ],
                },
                {
                    id:'2-3',
                    name:'23',
                    thirdList:[
                        {
                           id:'2-3-1',
                            name:'231', 
                        },
                        {
                           id:'2-3-2',
                            name:'232', 
                        },
                        {
                           id:'2-3-3',
                            name:'233', 
                        },   
                    ],
                },
            ]
        },
        {
            id:'3',
            name:'三',
            secondList:[
                {
                    id:'3-1',
                    name:'31',
                    thirdList:[
                        {
                           id:'3-1-1',
                            name:'311', 
                        },
                        {
                           id:'3-1-2',
                            name:'312', 
                        },
                        {
                           id:'3-1-3',
                            name:'313', 
                        },   
                    ],
                },
                {
                    id:'3-2',
                    name:'32',
                    thirdList:[
                        {
                           id:'3-2-1',
                            name:'321', 
                        },
                        {
                           id:'3-2-2',
                            name:'322', 
                        },
                        {
                           id:'3-2-3',
                            name:'323', 
                        },   
                    ],
                },
                {
                    id:'3-3',
                    name:'33',
                    thirdList:[
                        {
                           id:'3-3-1',
                            name:'331', 
                        },
                        {
                           id:'3-3-2',
                            name:'332', 
                        },
                        {
                           id:'3-3-3',
                            name:'333', 
                        },   
                    ],
                },
            ]
        },
    ]

    
    // 一级导航栏-->二级导航栏
    let navActiveIndex = ref(-1);
    let hoverNavIndex;
    let navClassName;

    const notShowSecond = () => {
        navActiveIndex.value = -1;
    }
 
    const showSecond = debounce((event) => {
        hoverNavIndex = event.target.dataset.index;
        navClassName = event.target.className;
        if( +hoverNavIndex >=0 && navClassName == 'first_name'){
            navActiveIndex.value = +hoverNavIndex;
            secActiveIndex.value = 0;
        }
    },100)

    // 二级导航栏-->三级导航栏
    let secActiveIndex = ref(0);
    let hoverSecIndex;
    let secClassName;
    const showThird = throttle((event) => {
        hoverSecIndex = event.target.dataset.index;
        secClassName = event.target.className;
        if( +hoverSecIndex != NaN && secClassName == 'second_name'){
            secActiveIndex.value = +hoverSecIndex;
        }
    },100)

</script>

<style  lang="scss" scoped>
    .box{
        padding: 20px;

        h1{
            text-align: center;
        }

        .first_list{
            .first_item{
                background-color: rgb(255, 0, 0);
                display: inline-block;
                width: 200px;
                position: relative;

                .first_name{

                }
                .second_list{
                    position: absolute;
                    width: 50px;
                    .second_item{
                        background-color: rgb(0, 255, 229);
                        line-height: 30px;
                        position: relative;

                        .second_name{

                        }
                        .third_list{
                            margin-left: 50px;
                            margin-top: -30px;
                            width: 150px;
                            .third_item{
                                background-color: rgb(195, 34, 253);
                                
                            }
                        }
                    }
                    .second_item_actived{
                        
                    }
                }
            }
            .first_item_actived{
                background-color: rgb(253, 124, 124);
            }
        }
    }
    

</style>