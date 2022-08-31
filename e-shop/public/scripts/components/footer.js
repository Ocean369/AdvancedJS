const footer_block = {
    template: `
        <div>
            <div class="customer-box">
                <div class=" customer container">
                    <div class="customer-info">
                        <img src="./image/delivery.svg" alt="delivery" class="customer-info_img">
                        <h4 class="customer-info_title textBig">Free Delivery</h4>
                        <p class="customer-info_text text">Worldwide delivery on all. Authorit tively morph next-generation
                            innov
                            tion with extensive models.</p>
                    </div>
                    <div class="customer-info">
                        <img src="./image/sales.svg" alt="sales" class="customer-info_img">
                        <h4 class="customer-info_title textBig">Sales & discounts</h4>
                        <p class="customer-info_text text">Worldwide delivery on all. Authorit tively morph next-generation
                        innov
                        tion with extensive models.</p>
                    </div>
                    <div class="customer-info">
                        <img src="./image/quality.svg" alt="quality" class="customer-info_img">
                        <h4 class="customer-info_title textBig">Quality assurance</h4>
                        <p class="customer-info_text text">Worldwide delivery on all. Authorit tively morph next-generation
                        innov
                        tion with extensive models.</p>
                    </div>
                </div>
            </div>
            <div class="subscribe-box">
                <div class="shadow"></div>
                <div class="container subscribe">
                    <div class="subscribe-speak">
                        <img class="subscribe-speak_img" src="./image/lady-speak.svg" alt="lady speak">
                        <p class="subscribe-speak_info textBig">&ldquo;Vestibulum quis porttitor dui! Quisque viverra nunc
                         mi, <i>a
                        pulvinar
                        purus condimentum</i>&rdquo;</p>
                    </div>
                    <div class="subscribe-mail">
                        <h4 class="subscribe-mail_title">SUBSCRIBE </h4>
                        <p class="subscribe-mail_text">FOR OUR NEWLETTER AND PROMOTION</p>
                        <form class="mail" action="push_mail">
                            <input  class="field_mail textRegular" placeholder="Enter Your Email" id="mail"
                            name="email" type="email" value="">
                            <input type="button" class="button_mail textRegular" id="button" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>

            <footer class="footer-box">
                <div class="footer container">
                    <p class="footer_text textMiddle">&copy; 2021 Brand All Rights Reserved.</p>
                    <div class="footer_link">
                        <a href="#" class="link-FIPTBox">
                             <svg class="FIPT-image" width="11" height="16" viewBox="0 0 11 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M9.08836 8.28L9.50686 5.61602H6.89022V3.88729C6.89022 3.15848 7.25574 2.44806 8.42765 2.44806H9.61722V0.179975C9.61722 0.179975 8.53772 0 7.50561 0C5.35073 0 3.9422 1.27593 3.9422 3.5857V5.61602H1.54688V8.28H3.9422V14.72H6.89022V8.28H9.08836Z"
                                fill="black" />
                            </svg>
                        </a>
                        <a href="#" class="link-FIPTBox">
                            <svg class="FIPT-image" width="16" height="17" viewBox="0 0 16 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_128_234)">
                                    <path
                                    d="M8.13897 4.68159C6.02383 4.68159 4.31774 6.38491 4.31774 8.49663C4.31774 10.6083 6.02383 12.3117 8.13897 12.3117C10.2541 12.3117 11.9602 10.6083 11.9602 8.49663C11.9602 6.38491 10.2541 4.68159 8.13897 4.68159ZM8.13897 10.9769C6.77211 10.9769 5.65467 9.8646 5.65467 8.49663C5.65467 7.12866 6.76878 6.01636 8.13897 6.01636C9.50915 6.01636 10.6233 7.12866 10.6233 8.49663C10.6233 9.8646 9.50583 10.9769 8.13897 10.9769V10.9769ZM13.0078 4.52554C13.0078 5.02026 12.6087 5.41538 12.1165 5.41538C11.621 5.41538 11.2252 5.01694 11.2252 4.52554C11.2252 4.03413 11.6243 3.63569 12.1165 3.63569C12.6087 3.63569 13.0078 4.03413 13.0078 4.52554ZM15.5386 5.42866C15.4821 4.23667 15.2094 3.18081 14.3347 2.31089C13.4634 1.44097 12.4058 1.1687 11.2119 1.10894C9.9814 1.03921 6.29321 1.03921 5.0627 1.10894C3.8721 1.16538 2.81453 1.43765 1.93987 2.30757C1.06522 3.17749 0.795836 4.23335 0.735973 5.42534C0.666134 6.65386 0.666134 10.3361 0.735973 11.5646C0.79251 12.7566 1.06522 13.8124 1.93987 14.6824C2.81453 15.5523 3.86878 15.8246 5.0627 15.8843C6.29321 15.9541 9.9814 15.9541 11.2119 15.8843C12.4058 15.8279 13.4634 15.5556 14.3347 14.6824C15.2061 13.8124 15.4788 12.7566 15.5386 11.5646C15.6085 10.3361 15.6085 6.65718 15.5386 5.42866V5.42866ZM13.949 12.8828C13.6895 13.5335 13.1874 14.0349 12.5322 14.2972C11.5511 14.6857 9.22314 14.596 8.13897 14.596C7.05479 14.596 4.72348 14.6824 3.74573 14.2972C3.09389 14.0382 2.59171 13.5369 2.32898 12.8828C1.93987 11.9033 2.02967 9.57905 2.02967 8.49663C2.02967 7.41421 1.9432 5.08667 2.32898 4.1105C2.58838 3.45972 3.09056 2.95835 3.74573 2.69604C4.7268 2.30757 7.05479 2.39722 8.13897 2.39722C9.22314 2.39722 11.5545 2.31089 12.5322 2.69604C13.184 2.95503 13.6862 3.4564 13.949 4.1105C14.3381 5.08999 14.2483 7.41421 14.2483 8.49663C14.2483 9.57905 14.3381 11.9066 13.949 12.8828Z"
                                    fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_128_234">
                                         <rect width="14.8991" height="17" fill="white" transform="translate(0.685547)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="#" class="link-FIPTBox">
                            <svg class="FIPT-image" width="13" height="16" viewBox="0 0 13 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_128_242)">
                                    <path
                                    d="M6.74032 0.203125C3.55564 0.203125 0.408203 2.34063 0.408203 5.8C0.408203 8 1.63738 9.25 2.38233 9.25C2.68963 9.25 2.86655 8.3875 2.86655 8.14375C2.86655 7.85313 2.13091 7.23438 2.13091 6.025C2.13091 3.5125 4.03055 1.73125 6.4889 1.73125C8.60271 1.73125 10.1671 2.94062 10.1671 5.1625C10.1671 6.82187 9.50597 9.93437 7.36422 9.93437C6.59133 9.93437 5.93018 9.37187 5.93018 8.56563C5.93018 7.38438 6.74963 6.24062 6.74963 5.02187C6.74963 2.95312 3.835 3.32812 3.835 5.82812C3.835 6.35313 3.90018 6.93437 4.13298 7.4125C3.70463 9.26875 2.82931 12.0344 2.82931 13.9469C2.82931 14.5375 2.91311 15.1188 2.96899 15.7094C3.07452 15.8281 3.02175 15.8156 3.18316 15.7563C4.74757 13.6 4.69169 13.1781 5.3994 10.3562C5.78119 11.0875 6.76826 11.4812 7.55046 11.4812C10.8469 11.4812 12.3275 8.24688 12.3275 5.33125C12.3275 2.22813 9.66427 0.203125 6.74032 0.203125Z"
                                    fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_128_242">
                                        <rect width="11.9193" height="16" fill="white" transform="translate(0.408203)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="#" class="link-FIPTBox">
                            <svg class="FIPT-image" width="17" height="16" viewBox="0 0 17 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_128_238)">
                                    <path
                                    d="M14.417 4.74052C14.427 4.88264 14.427 5.0248 14.427 5.16692C14.427 9.50192 11.1498 14.4969 5.15986 14.4969C3.31448 14.4969 1.60022 13.9588 0.158203 13.0248C0.420396 13.0552 0.67247 13.0654 0.944752 13.0654C2.46741 13.0654 3.8691 12.5476 4.98843 11.6644C3.5565 11.6339 2.3565 10.6898 1.94305 9.39027C2.14475 9.4207 2.34642 9.44102 2.5582 9.44102C2.85063 9.44102 3.14308 9.40039 3.41533 9.32936C1.92291 9.02477 0.803551 7.70498 0.803551 6.11108V6.07048C1.23715 6.31414 1.74139 6.46642 2.2758 6.4867C1.39849 5.89786 0.823727 4.8928 0.823727 3.75573C0.823727 3.14661 0.985041 2.58823 1.26741 2.10092C2.87077 4.09077 5.28086 5.39023 7.98334 5.53239C7.93293 5.28873 7.90266 5.03495 7.90266 4.78114C7.90266 2.97402 9.35477 1.50195 11.1598 1.50195C12.0976 1.50195 12.9446 1.89789 13.5396 2.53748C14.2757 2.39536 14.9816 2.12123 15.6068 1.74561C15.3648 2.50705 14.8505 3.14664 14.1749 3.5527C14.8304 3.48167 15.4657 3.29889 16.0505 3.04511C15.6069 3.69483 15.0522 4.27348 14.417 4.74052Z"
                                    fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_128_238">
                                        <rect width="15.8924" height="16" fill="white" transform="translate(0.158203)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>            
    `
};

export default {
    footer_block
};