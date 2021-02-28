<template>
    <div class="preview-container">
        <div class="preview" :style="{backgroundImage: `url(${Background})`}">
            <div class="preview__gradient"></div>
            <div class="preview__description">
                <div class="preview-text" v-for="(d,index) in previewStrings.descriptions" :key="index">
                    {{d}}
                </div>
        </div>

        </div>
        <div class="advantages-container">
            <div class="advantages">
                <div class="advantage" v-for="(a,index) in previewStrings.advantages" :key="index">
                    <div class="advantage__icon" :style="{backgroundImage: `url(${a.image})`}"></div>
                    <div class="advantage__text">{{a.text}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Background from '../../assets/Preview/Background.png';
import {previewStrings} from '../../tools/strings';
export default {
    name: 'Preview',
    data () {
        return {
            Background, previewStrings
        }
    },

}
</script>

<style lang="scss">
.preview-container {
    width: 100%;
    height: 840px;
    background-color: $bgwhite;
    display: flex;
    flex-direction: column;
    align-items: center;

    .preview {
        width: 100%;
        height: 660px;
        display: flex;
        justify-content: center;
        background-position: center;
        background: no-repeat;
        background-size: cover;
        
        &__gradient {
            width: 100%;
            height: 800px;
            top: 0;
            left: 0;
            position: absolute;
            background: linear-gradient(180deg, #FFFFFF 14.24%, rgba(255, 255, 255, 0) 80.19%);
        }

        &__description {
            width: 1267px;
            height: 660px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 199px 0px 214px 0; 
            z-index: 2;
            
            .preview-text {
                height: fit-content;
                width: 100%;
                font-size: 24px;

                &:first-child {
                    font-size: 64px;
                    margin-bottom: 75px;
                }
            }


        }
    }
    .advantages-container {
        width: 100%;
        height: 180px;
        background-color: $bggreen;
        display: flex;
        justify-content: center;

        .advantages {
            width: 1267px;
            height: 100%;
            font-size: 18px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-top: 15px;
            padding-bottom: 15px;

            .advantage {
                height: 100%;
                width: 170px;
                display: flex;
                flex-direction: column;
                align-items: center;
                

                &__icon {
                    width: 60px;
                    height: 64px;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: contain;
                    margin-bottom: 26px;
                }

                &__text {
                    font-size: 18px;
                    text-align: center;
                    // color: white;

                }
            }
        }
    }  
}





 



</style>