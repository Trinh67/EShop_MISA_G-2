<template>
    <div id="snackbar"></div>
</template>
<script>
export default {
    name: 'ToggleMess', 
    methods: {
        /**
         * Thông báo cho người dùng
         * Created by: TXTrinh (16/03/2021)
        */
        HandleAlert(Alert) {
        var x = document.getElementById("snackbar");
        x.innerHTML = Alert.Text;
        if(Alert.Success == false) x.className = "showError";
        else x.className = "showCorrect";
        console.log(Alert.Success);
        setTimeout(() => {
            x.className = x.className.replace("showCorrect", "");
            x.className = x.className.replace("showError", "");
        }, 2000);
        if(Alert.Success == true) {
            setTimeout(() => {reloadData()}, 0);
        }
        },
    }
}
</script>
<style scoped>
#snackbar {
    visibility: hidden;
    min-width: 250px;
    max-width: 400px;
    margin-left: -125px;
    background-color: rgba(0, 148, 7, 0.753);
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 5;
    right: 5%;
    top: 40px;
    font-size: 17px;
}
#snackbar.showCorrect {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
#snackbar.showError{
    background-color: #cf0000;
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
  
</style>