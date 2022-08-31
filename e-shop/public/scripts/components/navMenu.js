const nav_menu = Vue.component('nav_menu', {
    template: `
    <nav class="header_chapter-info ">
        <div class="chapter container">
            <h4 class="chapter_title textLargeRegular">NEW ARRIVALS</h4>

            <ul class="chapter_menu text">
                <li class="chapter_menu_li"><a href="#" class="chapter_menu_link">HOME</a></li>
                <li>&frasl;</li>
                <li class="chapter_menu_li"><a href="#" class="chapter_menu_link">MEN</a></li>
                <li>&frasl;</li>
                <li class="chapter_menu_li"><a href="#" class="chapter_menu_link">NEW ARRIVALS</a></li>
            </ul>
        </div>
    </nav> `
});

export default {
    nav_menu
};