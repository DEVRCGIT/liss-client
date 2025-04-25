<template>
  <v-card
    v-touch="{
      right: () => this.$emit('update:modelValue', val),
    }"
  >
    <header>
      <div class="header-container">
        <button
          class="btn-reset close__card flex"
          @click="this.$emit('update:modelValue', val)"
        >
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2.28571L3.75 8L10 13.7143L8.75 16L0 8L8.75 0L10 2.28571Z"
              fill="#9299AA"
            />
          </svg>
        </button>
        <nav class="menu">
          <a class="menu-triger" href="#"></a>
          <div class="menu-popup">
            <a class="menu-close" href="#"></a>
            <ul class="nav__list">
              <li class="nav__item">
                <a class="navbar__link list-reset" href="#apartments">Общее</a>
              </li>
              <li class="nav__item">
                <a class="navbar__link list-reset" href="#object"
                  >Дополнительно</a
                >
              </li>
              <!-- <li class="nav__item">
                <a class="navbar__link list-reset" href="#contacts">Контакты</a>
              </li>-->
            </ul>
          </div>
        </nav>
        <div class="logo">
          <svg
            width="91"
            height="61"
            viewBox="0 0 91 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6636 10.0818C18.4274 10.8166 17.0504 11.8013 15.5673 13.0715C14.7721 11.384 14.1089 9.31932 13.6248 7.13278C16.2403 3.74972 18.532 2.39111 18.532 2.39111C18.5618 4.07253 18.837 7.06864 19.6636 10.0818Z"
              fill="#EC4900"
            />
            <path
              d="M19.6636 10.0818C18.4274 10.8166 17.0504 11.8013 15.5673 13.0715C14.7721 11.384 14.1089 9.31932 13.6248 7.13278C16.2403 3.74972 18.532 2.39111 18.532 2.39111C18.5618 4.07253 18.837 7.06864 19.6636 10.0818Z"
              fill="url(#paint0_linear_223_1209)"
            />
            <path
              d="M18.4072 10.4464C17.7358 8.44881 17.4361 6.44165 17.352 5.31006C17.352 5.31006 15.8604 6.31258 14.2279 8.69046L15.2605 12.5079L18.4871 11.2339"
              fill="url(#paint1_linear_223_1209)"
            />
            <path
              d="M29.2122 60.1947C28.8912 60.1947 28.5705 60.191 28.2576 60.1833C-0.956757 59.5222 -4.86064 29.9872 5.33992 17.0654C8.01481 13.6794 6.2948 5.83281 14.551 0C14.4118 1.56938 14.3964 3.22764 14.497 4.83162C14.613 6.7797 14.8991 8.65061 15.3513 10.216C16.8046 9.32685 18.1305 8.66604 19.294 8.2059C21.2615 7.41363 22.7843 7.17012 23.7546 7.23186C24.9259 7.31303 26.1589 8.42626 28.0992 8.89784C32.1849 8.2059 35.4511 7.02321 39.5714 4.94739C43.4638 15.6001 33.2361 21.6418 24.6589 32.0973C17.3148 41.0652 16.5454 54.331 29.2122 60.1947Z"
              fill="url(#paint2_linear_223_1209)"
            />
            <path
              d="M28.2572 60.183L25.7362 60.0856C24.8984 60.0143 24.0627 59.9081 23.2249 59.8208C22.393 59.6936 21.5664 59.5273 20.7358 59.382C19.9191 59.1757 19.0986 58.9748 18.2871 58.7446C15.063 57.7452 12.0056 56.1668 9.36242 54.0407C8.07381 52.9442 6.82937 51.7746 5.79891 50.4234C5.24296 49.7802 4.79533 49.0568 4.30645 48.3636C4.07624 48.0078 3.87318 47.6344 3.65549 47.2706L3.334 46.7213C3.23101 46.536 3.14372 46.3423 3.04765 46.1533L2.48451 45.0122L2.00068 43.8356C1.92191 43.6387 1.83568 43.4447 1.76329 43.2456L1.5613 42.6425C1.43063 42.2393 1.28319 41.841 1.16636 41.4335C0.953987 40.6128 0.711009 39.7987 0.568362 38.9619L0.44461 38.3381L0.383135 38.0262L0.340287 37.7111L0.169165 36.4507C-0.177605 33.0794 -0.000894719 29.6465 0.788718 26.3473C1.18259 24.7002 1.69649 23.0747 2.41159 21.5346C3.1187 19.9955 3.94717 18.4977 5.01143 17.1695C6.0733 15.9006 6.45386 14.2317 6.86557 12.6144C7.26424 10.9846 7.66423 9.33563 8.29124 7.76173C8.91505 6.18916 9.76241 4.70281 10.824 3.38865C11.3576 2.73397 11.9447 2.12559 12.5658 1.55687C13.1891 0.988945 13.8643 0.48436 14.5509 0C13.1987 0.99826 11.9628 2.1538 10.9347 3.47621C9.91384 4.80368 9.11358 6.28949 8.53475 7.85567C7.94234 9.41946 7.56736 11.0538 7.19264 12.6926C7.00289 13.512 6.80622 14.3352 6.53397 15.1442C6.39292 15.5469 6.24096 15.9493 6.03737 16.3325C5.94449 16.5276 5.82473 16.7115 5.70896 16.8956L5.33611 17.4186L4.6101 18.4331L3.96287 19.5L3.8008 19.7664L3.65629 20.0429L3.36966 20.5973L3.08277 21.1516C2.99335 21.3395 2.91564 21.5327 2.83128 21.723C2.13668 23.237 1.63954 24.837 1.2603 26.4577C0.498901 29.7043 0.343481 33.0823 0.697436 36.3927L0.859777 37.6315L0.900229 37.9413L0.95931 38.2479L1.078 38.8613C1.21373 39.6845 1.44899 40.4845 1.65338 41.2919C1.76595 41.6927 1.9094 42.0842 2.03555 42.481L2.23089 43.0742C2.30088 43.2701 2.38498 43.4609 2.46136 43.6544L2.93081 44.812L3.47825 45.9346C3.57139 46.1206 3.65602 46.3114 3.75635 46.4937L4.06932 47.034C4.28143 47.3919 4.47863 47.7595 4.70298 48.11C5.17989 48.7918 5.61528 49.5047 6.15819 50.1379C7.16736 51.4651 8.37188 52.6275 9.62163 53.7269C12.1898 55.8552 15.1848 57.4557 18.3649 58.4973C21.5459 59.5579 24.9018 60.0342 28.2572 60.183Z"
              fill="url(#paint3_linear_223_1209)"
            />
            <path
              d="M29.2122 60.1946C-0.253119 56.9826 2.51066 24.8462 14.9763 18.9245C13.2996 18.6296 10.2072 18.6624 10.2072 18.6624C14.4179 13.7937 34.2873 13.728 39.5711 4.94727C43.4635 15.6 33.2358 21.6417 24.6587 32.0972C17.3148 41.0651 16.5454 54.3309 29.2122 60.1946Z"
              fill="url(#paint4_linear_223_1209)"
            />
            <path
              d="M29.4671 23.799C27.3758 25.9868 25.2191 28.2479 23.1047 30.8262C18.3774 36.5933 16.3945 43.6899 17.7938 49.8048C18.416 52.5066 19.6492 54.9185 21.4504 56.9827C15.2272 54.8877 10.3996 44.5674 11.9418 35.9322C10.8903 37.5556 10.0169 39.3222 9.41781 41.1619C7.17964 18.7276 34.179 17.4443 38.2686 7.8042C39.1963 13.2623 35.5474 17.4328 29.4671 23.799Z"
              fill="url(#paint5_linear_223_1209)"
            />
            <path
              d="M29.4672 23.799C27.3759 25.9868 25.2192 28.2479 23.1048 30.8262C18.3775 36.5933 16.3945 43.6899 17.7939 49.8048C18.4161 52.5066 19.6493 54.9185 21.4505 56.9827C12.0036 49.6771 14.228 35.1109 19.6637 28.2027C18.0866 28.5968 15.4774 30.3852 15.4774 30.3852C19.6637 21.2287 38.4119 17.0656 38.2687 7.8042C39.1964 13.2623 35.5475 17.4328 29.4672 23.799Z"
              fill="url(#paint6_linear_223_1209)"
            />
            <path
              d="M11.9418 35.9322C10.9321 37.5891 10.0908 39.3498 9.52744 41.1976L9.36483 41.7309L9.30282 41.1734C9.1937 40.194 9.13276 39.2083 9.13569 38.2204C9.14527 37.2328 9.21101 36.2444 9.34726 35.2634C9.62404 33.3025 10.2074 31.3757 11.108 29.6025C11.9998 27.8247 13.1889 26.2051 14.5571 24.7709C15.2405 24.0523 15.9676 23.3769 16.7244 22.7395C17.485 22.1061 18.277 21.5129 19.0869 20.9487C22.3358 18.6962 25.8522 16.9083 29.3146 15.0781C31.0415 14.1538 32.7511 13.1947 34.349 12.0711C35.1423 11.504 35.9093 10.8935 36.5872 10.1909C36.9297 9.84277 37.2373 9.463 37.5285 9.07072C37.8111 8.67205 38.0591 8.24891 38.2678 7.8042C38.0812 8.25822 37.8529 8.69547 37.5876 9.1109C37.3134 9.51995 37.0127 9.91276 36.6806 10.2779C36.0211 11.0129 35.2685 11.6583 34.4877 12.26C32.913 13.451 31.2036 14.4394 29.4958 15.4086L24.3504 18.264C22.6475 19.2292 20.9727 20.2416 19.3802 21.3673C18.5839 21.9299 17.8097 22.5218 17.0648 23.147C16.3165 23.7678 15.599 24.4249 14.9248 25.1232C13.5756 26.5175 12.4054 28.0882 11.5237 29.8141C10.6444 31.5394 10.0344 33.4018 9.71639 35.3198C9.5615 36.2795 9.47554 37.2509 9.4444 38.2249C9.41859 39.1997 9.46489 40.1751 9.53196 41.1502L9.30735 41.126C9.94899 39.2814 10.8435 37.533 11.9418 35.9322Z"
              fill="url(#paint7_linear_223_1209)"
            />
            <path
              d="M29.2122 60.1947C26.8327 59.9762 24.462 59.5518 22.1703 58.8343C19.8768 58.1274 17.6759 57.1002 15.6613 55.7769C14.6537 55.1153 13.7028 54.3654 12.8185 53.5436C11.9384 52.717 11.1264 51.8166 10.3964 50.8538C8.93428 48.9288 7.80695 46.7538 7.04368 44.4613C6.27217 42.1694 5.88601 39.7566 5.82799 37.3452C5.77078 34.9325 6.04622 32.5125 6.66045 30.1791C7.27309 27.8478 8.23888 25.5979 9.59668 23.6011C10.9393 21.607 12.7402 19.8606 14.9395 18.8483L14.9611 19.0074C14.184 18.8661 13.3883 18.8027 12.5947 18.7535C11.8 18.7064 11.0037 18.6737 10.2069 18.6622C11.0037 18.6425 11.8013 18.6364 12.5989 18.6588C13.3965 18.6838 14.1944 18.7218 14.9906 18.8413L15.2501 18.8802L15.0122 19.0005C13.9541 19.5359 12.9827 20.2335 12.1335 21.0574C11.2746 21.8715 10.5255 22.7979 9.88118 23.7906C8.5782 25.7719 7.69757 28.005 7.1041 30.2935C5.92779 34.8827 6.07496 39.8035 7.53443 44.2987C8.26682 46.5451 9.35557 48.6773 10.7738 50.5687C11.482 51.5148 12.2708 52.4005 13.1277 53.2154C13.9815 54.0332 14.8983 54.7891 15.8774 55.4573C17.8321 56.7994 19.991 57.8432 22.2454 58.6049C24.495 59.3926 26.8457 59.8669 29.2122 60.1947Z"
              fill="url(#paint8_linear_223_1209)"
            />
            <path
              d="M46.2088 49.2377H44.8374C44.2755 49.2377 43.8183 49.0663 43.466 48.7234C43.1136 48.371 42.9374 47.871 42.9374 47.2234V29.7234L43.1231 29.5377H44.3517C45.0183 29.5377 45.4945 29.7091 45.7802 30.052C46.066 30.3853 46.2088 30.9139 46.2088 31.6377V49.2377ZM54.3374 46.3948C54.3374 47.4805 54.166 48.2282 53.8231 48.6377C53.4898 49.0377 52.9279 49.2377 52.1374 49.2377H44.8374L43.1374 46.8377C44.0707 46.6853 45.0374 46.5758 46.0374 46.5091C47.0374 46.4329 47.9469 46.3948 48.766 46.3948H54.3374ZM60.5776 49.1948C60.1204 49.2805 59.5918 49.3234 58.9918 49.3234C58.3918 49.3234 57.8633 49.2805 57.4061 49.1948V38.8663C57.4061 38.371 57.3157 37.9996 57.1347 37.752C56.9538 37.4948 56.6252 37.3663 56.149 37.3663H55.8061C55.7204 37.0043 55.6776 36.6329 55.6776 36.252C55.6776 36.071 55.6871 35.8853 55.7061 35.6948C55.7252 35.4948 55.7585 35.2948 55.8061 35.0948C56.1776 35.0472 56.5347 35.0139 56.8776 34.9948C57.2204 34.9758 57.5014 34.9663 57.7204 34.9663H58.149C58.9014 34.9663 59.4918 35.2043 59.9204 35.6805C60.3585 36.1567 60.5776 36.8091 60.5776 37.6377V49.1948ZM56.5204 31.2234C56.5204 30.7282 56.6109 30.2853 56.7918 29.8948C56.9823 29.7901 57.2299 29.7043 57.5347 29.6377C57.849 29.5615 58.1538 29.5234 58.449 29.5234C58.7252 29.5234 59.0299 29.5615 59.3633 29.6377C59.6966 29.7043 59.9442 29.7901 60.1061 29.8948C60.1823 30.0758 60.2442 30.2901 60.2918 30.5377C60.349 30.7853 60.3776 31.0139 60.3776 31.2234C60.3776 31.7186 60.2871 32.1663 60.1061 32.5663C59.9538 32.671 59.7061 32.7567 59.3633 32.8234C59.0299 32.8901 58.7252 32.9234 58.449 32.9234C58.1538 32.9234 57.8442 32.8901 57.5204 32.8234C57.2061 32.7567 56.9633 32.671 56.7918 32.5663C56.6109 32.1663 56.5204 31.7186 56.5204 31.2234ZM63.5173 48.1663C63.5363 47.8043 63.6459 47.4091 63.8459 46.9805C64.0459 46.5424 64.2744 46.1996 64.5316 45.952C65.1411 46.2758 65.7887 46.5663 66.4744 46.8234C67.1601 47.0805 67.8506 47.2091 68.5459 47.2091C69.2887 47.2091 69.8744 47.052 70.303 46.7377C70.7411 46.4234 70.9601 46.0234 70.9601 45.5377C70.9601 45.1567 70.8173 44.8091 70.5316 44.4948C70.2459 44.171 69.8173 43.9043 69.2459 43.6948L67.5887 43.0805C66.9316 42.8424 66.3268 42.5424 65.7744 42.1805C65.2316 41.8186 64.7935 41.3758 64.4601 40.852C64.1363 40.3282 63.9744 39.7043 63.9744 38.9805C63.9744 38.0948 64.1935 37.3329 64.6316 36.6948C65.0792 36.0472 65.6887 35.552 66.4601 35.2091C67.2411 34.8567 68.1221 34.6805 69.103 34.6805C69.8935 34.6805 70.7316 34.7901 71.6173 35.0091C72.5125 35.2186 73.2554 35.4615 73.8459 35.7377C73.8649 36.1282 73.784 36.552 73.603 37.0091C73.4316 37.4663 73.2078 37.8091 72.9316 38.0377C72.4173 37.8091 71.8221 37.5948 71.1459 37.3948C70.4792 37.1853 69.7935 37.0805 69.0887 37.0805C68.5078 37.0805 68.0411 37.2234 67.6887 37.5091C67.3363 37.7948 67.1601 38.171 67.1601 38.6377C67.1601 39.0091 67.2982 39.3234 67.5744 39.5805C67.8506 39.8282 68.2697 40.0567 68.8316 40.2663L70.5887 40.9234C71.6649 41.3043 72.5411 41.8424 73.2173 42.5377C73.903 43.2329 74.2459 44.1424 74.2459 45.2663C74.2459 46.5996 73.7268 47.652 72.6887 48.4234C71.6506 49.1948 70.2744 49.5805 68.5601 49.5805C67.5506 49.5805 66.6125 49.4377 65.7459 49.152C64.8887 48.8663 64.1459 48.5377 63.5173 48.1663ZM76.0452 48.1663C76.0642 47.8043 76.1738 47.4091 76.3738 46.9805C76.5738 46.5424 76.8023 46.1996 77.0595 45.952C77.669 46.2758 78.3166 46.5663 79.0023 46.8234C79.6881 47.0805 80.3785 47.2091 81.0738 47.2091C81.8166 47.2091 82.4023 47.052 82.8309 46.7377C83.269 46.4234 83.4881 46.0234 83.4881 45.5377C83.4881 45.1567 83.3452 44.8091 83.0595 44.4948C82.7738 44.171 82.3452 43.9043 81.7738 43.6948L80.1166 43.0805C79.4595 42.8424 78.8547 42.5424 78.3023 42.1805C77.7595 41.8186 77.3214 41.3758 76.9881 40.852C76.6642 40.3282 76.5023 39.7043 76.5023 38.9805C76.5023 38.0948 76.7214 37.3329 77.1595 36.6948C77.6071 36.0472 78.2166 35.552 78.988 35.2091C79.769 34.8567 80.65 34.6805 81.6309 34.6805C82.4214 34.6805 83.2595 34.7901 84.1452 35.0091C85.0404 35.2186 85.7833 35.4615 86.3738 35.7377C86.3928 36.1282 86.3119 36.552 86.1309 37.0091C85.9595 37.4663 85.7357 37.8091 85.4595 38.0377C84.9452 37.8091 84.35 37.5948 83.6738 37.3948C83.0071 37.1853 82.3214 37.0805 81.6166 37.0805C81.0357 37.0805 80.569 37.2234 80.2166 37.5091C79.8642 37.7948 79.6881 38.171 79.6881 38.6377C79.6881 39.0091 79.8261 39.3234 80.1023 39.5805C80.3785 39.8282 80.7976 40.0567 81.3595 40.2663L83.1166 40.9234C84.1928 41.3043 85.069 41.8424 85.7452 42.5377C86.4309 43.2329 86.7738 44.1424 86.7738 45.2663C86.7738 46.5996 86.2547 47.652 85.2166 48.4234C84.1785 49.1948 82.8023 49.5805 81.0881 49.5805C80.0785 49.5805 79.1404 49.4377 78.2738 49.152C77.4166 48.8663 76.6738 48.5377 76.0452 48.1663Z"
              fill="black"
            />
            <defs>
              <linearGradient
                id="paint0_linear_223_1209"
                x1="16.4896"
                y1="-1.59022"
                x2="16.6837"
                y2="11.2205"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF6624" />
                <stop offset="0.1843" stop-color="#EE5E1F" />
                <stop offset="0.5478" stop-color="#C34712" />
                <stop offset="1" stop-color="#852800" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_223_1209"
                x1="16.5669"
                y1="4.83012"
                x2="16.3695"
                y2="9.66589"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="0.495" stop-color="#EEEEEE" />
                <stop offset="1" stop-color="#C3C3C3" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_223_1209"
                x1="18.2813"
                y1="-0.346876"
                x2="23.9585"
                y2="60.6834"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF8351" />
                <stop offset="0.595" stop-color="#EE5C1D" />
                <stop offset="1" stop-color="#C3440B" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_223_1209"
                x1="9.73803"
                y1="0.215939"
                x2="15.4518"
                y2="61.6397"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A83400" />
                <stop offset="0.2731" stop-color="#C3440B" />
                <stop offset="0.7546" stop-color="#EE5C1D" />
                <stop offset="1" stop-color="#FF6624" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_223_1209"
                x1="22.6591"
                y1="-15.5779"
                x2="23.6646"
                y2="50.7788"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF6624" />
                <stop offset="0.385" stop-color="#EE5E1F" />
                <stop offset="1" stop-color="#C34712" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_223_1209"
                x1="27.8737"
                y1="3.67078"
                x2="16.0312"
                y2="61.6994"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="0.2101" stop-color="#EEEEEE" />
                <stop offset="0.6219" stop-color="#C3C3C3" />
                <stop offset="1" stop-color="#969696" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_223_1209"
                x1="32.2812"
                y1="-0.757973"
                x2="19.3529"
                y2="50.7578"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="0.625" stop-color="#EEEEEE" />
                <stop offset="1" stop-color="#C3C3C3" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_223_1209"
                x1="22.3571"
                y1="9.1575"
                x2="25.3152"
                y2="40.9567"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF6624" />
                <stop offset="0.2454" stop-color="#EE5C1D" />
                <stop offset="0.7269" stop-color="#C3440B" />
                <stop offset="1" stop-color="#A83400" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_223_1209"
                x1="14.6254"
                y1="17.9854"
                x2="18.6675"
                y2="61.4376"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF6624" />
                <stop offset="0.2454" stop-color="#EE5C1D" />
                <stop offset="0.7269" stop-color="#C3440B" />
                <stop offset="1" stop-color="#A83400" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </header>
    <main>
      <section
        class="banner"
        :style="`background-image: url('${item.photos[0]}')`"
      >
        <div class="banner__details">
          <div class="banner__text">
            <div class="banner__title">
              <h1>{{ item.title }}</h1>
            </div>
          </div>
        </div>
      </section>
      <section id="apartments" class="apartments">
        <div class="title__section">
          <h2 class="title">Квартира</h2>
          <div class="title__section-line"></div>
        </div>
        <div class="apartments__information">
          <div class="apartments__information-plan">
            <img :src="item.photos[1]" class="plan" alt="План апартаментов" />
          </div>
          <div class="apartments__details">
            <div class="apartments__details-title">
              <h3>{{ item.address }}</h3>
            </div>
            <div class="apartments__icon-list">
              <div class="apartments__icon-item">
                <img
                  src="https://spa-bitrix.ru/masthev_selections/img/ico_area.png"
                  class="apartments__icon"
                  alt=""
                />
                <span class="apartments__icon-description"
                  >Общая площадь: <strong>{{ item.square }}</strong></span
                >
              </div>
              <div class="apartments__icon-item">
                <img
                  src="https://spa-bitrix.ru/masthev_selections/img/ico_floor.png"
                  class="apartments__icon"
                  alt=""
                />
                <span class="apartments__icon-description"
                  >Этажность: <strong>{{ item.floor }}</strong></span
                >
              </div>
              <div class="apartments__icon-item">
                <img
                  src="https://spa-bitrix.ru/masthev_selections/img/ico_bedroom.png"
                  class="apartments__icon"
                  alt=""
                />
                <span class="apartments__icon-description"
                  >Количество спален: <strong>{{ item.rooms }}</strong></span
                >
              </div>
              <div class="apartments__icon-item">
                <img
                  src="https://spa-bitrix.ru/masthev_selections/img/otd.png"
                  class="apartments__icon"
                  alt=""
                />
                <span class="apartments__icon-description"
                  >Тип отделки: <strong>{{ item.otc }}</strong></span
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="object" class="object">
        <div class="title__section">
          <h2 class="title">Дополнительно</h2>
          <div class="title__section-line"></div>
        </div>
        <div class="object__gallery">
          <v-carousel
            show-arrows="hover"
            cycle
            cover
            draggable
            transition
            hide-delimiter-background
          >
            <v-carousel-item
              class="object__gallery-item"
              v-for="(slide, i) in item.photos.filter(
                (e, index) => index !== 0 || index !== 1
              )"
              :key="i"
              :src="slide"
            >
            </v-carousel-item>
          </v-carousel>
        </div>
        <div class="object__information">
          <div class="object__information-line"></div>
          <div class="object__information-description">
            <p>
              {{ item.discriptions }}
            </p>
          </div>
          <div class="object__information-line"></div>
        </div>
      </section>
      <section class="object__map mb-5">
        <yandex-map
          v-if="modelValue == true"
          :key="item.id"
          cursor-grab
          :settings="{
            location: {
              center: item.coordinates,
              zoom: 15,
            },
          }"
          width="90%"
          height="55vh"
        >
          <yandex-map-default-scheme-layer />
          <yandex-map-default-features-layer />
          <yandex-map-controls :settings="{ position: 'top left' }">
          </yandex-map-controls>
          <yandex-map-controls
            :settings="{ position: 'bottom left', orientation: 'vertical' }"
          >
          </yandex-map-controls>
          <yandex-map-controls :settings="{ position: 'right' }">
            <yandex-map-zoom-control />
          </yandex-map-controls>
          <YandexMapMarker
            :marker-id="item.id"
            :settings="{
              position: 'top left-center',
              coordinates: item.coordinates,
              properties: { item },
            }"
          >
            <div class="marker__container">
              <div class="clip">{{ `${item.mapPrice} ${item.currency}` }}</div>
              <div class="marker" />
            </div>
          </YandexMapMarker>
        </yandex-map>
      </section>
      <!-- <section id="contacts" class="contacts">
        <div class="title__section">
          <h2 class="title">Контакты</h2>
          <div class="title__section-line"></div>
        </div>
        <div class="contact__information">
          <div class="contact__details">
            <div class="contacts__title">
              <span>Контакты</span>
            </div>
            <div class="contacts__phone">
              <span class="contacts__sub-name">{{ item.assigned.name }}</span>
              <div class="contacts__phone-details">
                <div class="icon__phone">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.40894 3.94106C7.73727 3.44593 7.28496 3.33414 7.04226 3.38151C6.04101 3.57691 5.44749 3.96667 4.64337 4.77079C3.54575 5.86839 3.01318 6.68796 3.24513 7.93058C3.51219 9.36125 4.81689 11.5448 8.41291 15.1408C12.0087 18.7366 14.2054 20.055 15.6441 20.3277C16.3108 20.4541 16.8185 20.3553 17.2741 20.1309C17.7612 19.891 18.2302 19.4872 18.7681 18.9257C19.2452 18.4279 19.5347 18.0804 19.7373 17.7385C19.9303 17.4128 20.0671 17.0527 20.1728 16.5118C20.2202 16.2691 20.1084 15.8168 19.6132 15.145C19.1513 14.5185 18.4997 13.8963 17.8973 13.3883C17.4998 13.0532 16.8848 13.0318 16.388 13.4037L14.8697 14.5403C13.5001 15.5656 11.5864 15.4187 10.3781 14.2104L9.34333 13.1757C8.13502 11.9674 7.98816 10.0536 9.0134 8.68408L10.15 7.1658C10.5219 6.66899 10.5005 6.05399 10.1653 5.65648C9.65746 5.05422 9.03533 4.4028 8.40894 3.94106ZM9.59567 2.33119C10.4051 2.92787 11.1441 3.71475 11.6943 4.36717C12.6971 5.55639 12.6153 7.20989 11.7511 8.36437L10.6145 9.88265C10.191 10.4483 10.2458 11.2497 10.7575 11.7614L11.7923 12.7962C12.3041 13.308 13.1054 13.3627 13.6711 12.9393L15.1894 11.8026C16.3439 10.9384 17.9973 10.8566 19.1865 11.8593C19.8391 12.4095 20.6262 13.1486 21.223 13.9582C21.7864 14.7224 22.3533 15.7809 22.1357 16.8952C21.9959 17.6108 21.7906 18.1964 21.4579 18.758C21.1348 19.3034 20.715 19.7847 20.2122 20.3094C19.6296 20.9175 18.9653 21.5274 18.1578 21.9251C17.3189 22.3383 16.3708 22.501 15.2716 22.2927C13.1786 21.896 10.6038 20.1601 6.99869 16.555C3.39388 12.9502 1.66901 10.3864 1.27909 8.29757C0.854079 6.02068 2.03716 4.54855 3.22916 3.35656C4.21375 2.37199 5.14736 1.71358 6.65918 1.41854C7.7733 1.20111 8.83152 1.76789 9.59567 2.33119Z"
                      fill="#263C44"
                    />
                  </svg>
                </div>
                <a href="tel:+79255024106">{{ item.assigned.phone }}</a>
              </div>
            </div>
            <div class="contacts__time">
              <div class="icon__time">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6335 12.0001C22.6335 10.6869 22.3749 9.38654 21.8723 8.17329C21.3698 6.96003 20.6332 5.85764 19.7046 4.92905C17.8292 3.05369 15.2857 2.00012 12.6335 2.00012C9.98138 2.00012 7.43784 3.05369 5.56248 4.92905C4.63389 5.85764 3.8973 6.96003 3.39475 8.17329C2.8922 9.38654 2.63355 10.6869 2.63355 12.0001C2.63355 14.6523 3.68711 17.1958 5.56248 19.0712C7.43784 20.9466 9.98138 22.0001 12.6335 22.0001C13.9468 22.0001 15.2471 21.7415 16.4604 21.2389C17.6736 20.7364 18.776 19.9998 19.7046 19.0712C20.6332 18.1426 21.3698 17.0402 21.8723 15.827C22.3749 14.6137 22.6335 13.3133 22.6335 12.0001ZM8.43355 16.2001L11.6335 11.0001L17.6335 11.0001L17.6335 12.5001L12.4335 12.5001L9.73355 17.0001L8.43355 16.2001Z"
                    fill="#263C44"
                  />
                </svg>
              </div>
              <span class="contacts__sub-name">
                Время работы: с 10:00 до 19:00
              </span>
            </div>
          </div>
          <div class="contact__form">
           
          </div>
        </div>
      </section>-->
    </main>
    <footer>
      <div class="footer-section">
        <div class="footer-section__copyright">
          <span>© 2024 Liss.</span>
        </div>
      </div>
    </footer>
  </v-card>
</template>
<script>
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapZoomControl,
  YandexMapControls,
  YandexMapMarker,
} from "vue-yandex-maps";

export default {
  name: "selection-vue",
  components: {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultFeaturesLayer,
    YandexMapZoomControl,
    YandexMapControls,
    YandexMapMarker,
  },
  props: {
    item: Object,
    modelValue: Boolean,
  },
  mounted() {
    const images = this.item.photos.filter(function (element, index) {
      return index !== 0 || index !== 1;
    });
    console.log({ images });
    console.log(this.item);
  },
};
</script>
<style scoped>
.object__map {
  display: flex;
  justify-content: center;
}
.clip {
  z-index: 10 !important;
  cursor: pointer;
  bottom: 22px;
  right: -36px;
  padding: 2px;
  position: fixed !important;
  background-color: #ff8152;
  border-radius: 13px;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  text-align: center;
  min-width: 120px;
}

.clip::after {
  content: url("data:image/svg+xml;charset=UTF-8,%3csvg width='60' height='12' viewBox='0 0 60 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M59.3047 0H0.74414C1.58674 0.199128 2.46227 0.314337 3.36157 0.336229L17.7819 0.687281C23.6216 0.829443 28.6091 4.94152 29.8619 10.647C29.9967 11.2607 30.8624 11.2863 31.0331 10.6816L31.0768 10.5267C32.688 4.81974 37.8274 0.826804 43.7555 0.676281L56.6451 0.348997C57.5595 0.32578 58.4493 0.206156 59.3047 0Z' fill='%23FF8351'/%3e%3c/svg%3e ");
  position: fixed;
  bottom: 3px;
  right: 25px;
  display: grid;
  justify-items: center;
  width: 100%;
}

.clip span {
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 23px;
  padding: 0 10px;
  width: 100%;
}
.cluster__marker {
  z-index: -1 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  border: 2px white solid;
  width: 25px;
  height: 25px;
  color: #fff;
  background-color: #ff8152;
}
.marker {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  border: 2px white solid;
  width: 12px;
  height: 12px;
  background-color: #ff8152;
}

.marker span {
  font-size: 10px;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  width: 21px;
  height: 21px;
  display: grid;
  justify-items: center;
  align-items: center;
}

img {
  max-width: 100%;
}

.list-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}

header {
  background-color: #ffffff;
  position: fixed;
  width: 100%;
}
.header-container {
  width: 70%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 1.78571rem 0;
}

.nav__list {
  display: flex;
  gap: 40px;
}

.navbar__link {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 0.92857rem !important;
  text-transform: uppercase;
  color: black;
  transition: 0.3s;
  letter-spacing: 3px;
}

.navbar__link:hover {
  color: #ff8152;
  transition: 0.3s;
}

.banner {
  background-color: rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
  background-blend-mode: color;
  height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
  background-size: cover;
  background-position: center center;
}

.banner__details {
  display: grid;
  gap: 35px;
  justify-items: center;
  width: 50%;
}

.banner__text {
  display: grid;
  gap: 20px;
  justify-items: center;
}

.banner__title h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 2rem;
  text-align: center;
}

.banner__description p {
  color: rgba(255, 255, 255, 0.7);
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.21429rem;
  text-align: center;
}

.title__section {
  display: grid;
  gap: 20px;
  justify-items: center;
  padding: 9.28571rem 0;
}

.title {
  color: #263c44;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-style: normal;
  line-height: 1.4;
  font-size: 2.14286rem;
  letter-spacing: 0.71429rem;
  text-transform: uppercase;
}

.title__section-line {
  height: 1px;
  width: 70px;
  background-color: #263c44;
}

.apartments {
  display: grid;
  gap: 30px;
}
.apartments__information {
  display: flex;
  gap: 20px;
  width: 70%;
  margin: 0 auto;
  padding-bottom: 9.28571rem;
}
.apartments__details {
  width: 50%;
  display: grid;
  gap: 30px;
}
.apartments__information-plan {
  width: 50%;
}
.apartments__details-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-style: normal;
  line-height: 1.4;
  color: #111111;
  font-size: 2.14286rem;
}

.apartments__details-description {
  color: #6c7072;
  font-size: 1.21429rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.6;

  display: grid;
  gap: 15px;
}
.apartments__icon-list {
  display: grid;
  gap: 30px;
}
.apartments__icon-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.apartments__icon-description {
  color: #6c7072;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.21429rem;
}
.apartments__gallery {
  width: 100%;
}
.apartments__gallery-list {
  display: flex;
}
.object__gallery {
  width: 100%;
}
.object__gallery-list {
  display: flex;
}
.object__information {
  width: 70%;
  margin: 0 auto;
  display: grid;
  gap: 30px;
  padding: 60px 0;
  justify-items: center;
}
.object__information-line {
  height: 1px;
  width: 70%;
  background-color: #263c44;
}
.object__information-description {
  color: #6c7072;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.14286rem;
  line-height: 1.6;
}
.contact__information {
  width: 70%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
}
.contacts {
  padding-bottom: 9.28571rem;
}

.contacts__title {
  text-align: left;
  color: #263c44;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 2rem;
  line-height: 1.4;
}
.contacts__phone-details {
  display: flex;
  gap: 20px;
  align-items: center;
}
.contacts__phone {
  display: grid;
  gap: 15px;
}
.contacts__time {
  display: flex;
  gap: 20px;
  align-items: center;
}
.contacts__sub-name {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #263c44;
  font-size: 1.14286rem;
}
.contacts__phone-details a {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #263c44;
  font-size: 1.21429rem;
}
.contact__details {
  width: 50%;
  display: grid;
  gap: 30px;
}

footer {
  background-color: #263c44;
}
.footer-section {
  width: 70%;
  margin: 0 auto;
  padding: 2.85714rem 0;
}
.footer-section__copyright {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #999;
  line-height: 1.6;
  font-size: 1rem;
  text-align: center;
}
@media (max-width: 760px) {
  .header-container {
    width: 90%;
  }
  body {
    overflow-x: hidden;
  }
  .menu-triger {
    display: grid;
    width: 25px;
    height: 100%;
    background: url("") 0 0 no-repeat;
    position: absolute;
    right: 10px;
    top: 0;
    background-position: center;
  }
  .menu-close {
    display: block;
    width: 28px;
    height: 28px;
    background: url("") 0 0 repeat;
    position: absolute;
    right: 10px;
    top: 30px;
    z-index: 100;
  }
  header {
    position: fixed;
  }
  .menu-popup {
    display: none;
    background: #ffffff;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0;
    box-sizing: border-box;
    padding: 50px 20px;
    z-index: 9999;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  .nav__list {
    flex-direction: column;
  }
  .body_pointer * {
    cursor: pointer;
  }
  .logo {
    width: 25%;
  }
  .navbar__link {
    font-size: 0.92857rem;
  }
  .banner__details {
    width: 95%;
  }
  .banner__description p {
    line-height: 1.5;
    font-size: 17px;
  }
  .banner__title h1 {
    font-size: 1.8rem;
  }
  .title__section {
    padding: 3.57143rem 0;
  }
  .title {
    font-size: 1.4111rem;
    line-height: 1.4;
  }
  .apartments__information {
    width: 90%;
    flex-direction: column-reverse;
    align-items: center;
  }
  .apartments__information-plan {
    width: 100%;
  }
  .apartments__details {
    width: 100%;
  }
  .apartments__details-title {
    line-height: 1.4;
    font-size: 28px;
    text-transform: uppercase;
    text-align: center;
  }
  .apartments__details-description {
    text-align: center;
    font-size: 16px;
  }
  .apartments__icon-description {
    font-size: 16px;
  }
  .apartments__icon-list {
    gap: 14px;
  }
  .apartments__information {
    gap: 30px;
    padding-bottom: 30px;
  }
  .apartments__gallery-list {
    flex-direction: column;
    gap: 15px;
    padding: 30px 15px 0 15px;
  }
  .object__gallery-list {
    flex-direction: column;
    gap: 15px;
    padding: 30px 15px 0 15px;
  }
  .object__information {
    width: 90%;
    padding: 60px 0 30px 0;
  }
  .apartments__details-description {
    font-size: 16px;
  }
  .contact__information {
    width: 90%;
    flex-direction: column;
  }
  .contact__details {
    width: 100%;
  }
  .contacts__sub-name {
    font-size: 16px;
  }
  .contacts__phone-details a {
    font-size: 16px;
  }
  .contact__details {
    gap: 20px;
  }
  .contacts__phone {
    gap: 10px;
  }
}
</style>
