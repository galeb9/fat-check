<template>
    <div class="barcode-scanner__container">
        <div class="barcode-scanner">
            <BaseInput 
                v-model="textBarcode" 
                label="Barcode"
            />
            <BaseIcon icon="loupe" @click="searchForFood" />
            <BaseIcon icon="barcode" @click="initScanning" />
        </div>
        <div class="barcode-scanner__result" v-if="food">
            <img class="result__image" v-if="food.image_front_small_url" :src="food.image_front_small_url" alt="Food image">
            <div class="info-item__container">
                <div class="info-item">
                    <span class="info-item__name">Brand:</span>
                    <span class="info-item__data">{{ food.brands }}</span>
                </div>
                <div class="info-item">
                    <span class="info-item__name">Category:</span>
                    <span class="info-item__data">{{ food.compared_to_category }}</span>
                </div>
                <div class="info-item">
                    <span class="info-item__name">Fat (100g):</span>
                    <span class="info-item__data">{{ food.nutriments.fat_100g + " g" }}</span>
                </div>
                <div class="info-item">
                    <span class="info-item__name">Sugar (100g):</span>
                    <span class="info-item__data">{{ food.nutriments.sugars_100g + " g" }}</span>
                </div>
            </div>
        </div>
        <div v-if="videoAllowed" class="barcode__scanners">
            <StreamBarcodeReader @decode="onDecode" @loaded="videoAllowed ? onLoaded : null"></StreamBarcodeReader>
            <!-- <ImageBarcodeReader @decode="onDecode" @error="onError"></ImageBarcodeReader> -->
            <BaseIcon class="barcode__scanners-close-btn" icon="cancel" @click="videoAllowed = false" />
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { StreamBarcodeReader, ImageBarcodeReader } from "vue-barcode-reader";

export default {
    name: "BarcodeScanner",
    components: {
        StreamBarcodeReader,
        // ImageBarcodeReader
    },
    data () {
        return {
            textBarcode: "5000159384476",
            food: null,
            videoAllowed: false,
            videoOpen: false
        }
    },
    methods: {
        searchForFood() {
            if(this.textBarcode) {
                fetch(`https://world.openfoodfacts.org/api/v0/product/${this.textBarcode}.json`)
                    .then((response) => response.json())
                    .then((data) => {
                        if(data.status_verbose === "product found"){
                            this.food = data.product
                            console.log(this.food)
                        } else {
                            alert("Product not found :(")
                        }
                    })
            }
        },
        async initScanning() {
            if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
                console.log("Let's get this party started")
            }
            this.videoAllowed = true;
        },
        onDecode (result) { 
            if(result) {
                this.textBarcode = result
                this.searchForFood(result)
            } 
        },
        onLoaded() {
            console.log(`Ready to start scanning barcodes`)
        },
        onError() {
            console.log("some error happened")
        }
    }
}
</script>

<style lang="scss">
    .barcode-scanner__container {
        .barcode-scanner {
            display: flex;
            align-items: flex-end;
            gap: 20px;
            margin-bottom: 30px;
        }
        .barcode-scanner__result {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            margin-bottom: 30px;
            .result__image {
                border-radius: var(--radius);
            }
            .info-item__container {
                flex: 1;
                .info-item {
                    display: flex;
                    margin-bottom: 10px;
                    gap: 20px;
                    .info-item__name {
                        flex: 1;
                        flex-basis: 80px;
                    }
                    .info-item__data {
                        flex: 10;
                        word-break: break-word;
                        min-width: 100px;
                    }
                }
            }
        }
        .barcode__scanners {
            max-width: 640px;
            position: fixed;
            top: 0;
            right: 0;
            .barcode__scanners-close-btn {
                position: absolute;
            }
        }
    }   
</style>