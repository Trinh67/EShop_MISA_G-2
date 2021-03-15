<template>
     <div class="header">
         <!-- Title -->
        <div class="menu-title">
            {{title}}
        </div>
        
        <div class="header-right">
            <div class="link-home">
                <a href="">
                <div class="icon-back"></div>
                    Quay lại trang bắt đầu sử dụng
                </a>
            </div>
            <div class="shop-info">
                <select>
                    <option>txt</option>
                </select>
            </div>
            <div class="account-info">
                <div class="account-avatar"></div>
                <div class="account-name">Trình Trịnh Xuân</div>
                <div class="account-option icon-option-default-16"></div>
            </div>
            <div class="items-header icons-phone"></div>
            <div class="items-header icons-notification"></div>
            <div class="items-header icons-support"></div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
};
</script>