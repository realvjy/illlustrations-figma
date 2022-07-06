import * as React from "react";

// uilogologo
export const Logo = ({
  width = "64px",
  height = "13px",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 64 13"
    {...props}
  >
    <path
      d="M1.20478 3.85143C1.64549 3.85143 2.11068 3.58269 2.11068 2.9719C2.11068 2.48326 1.81687 2.14122 1.25375 2.14122C0.666142 2.14122 0.323371 2.55656 0.347855 2.94746V2.9719C0.372339 3.53382 0.764077 3.85143 1.20478 3.85143Z"
      fill="black"
    />
    <path
      d="M21.9661 5.46408C21.9171 5.1709 22.4068 5.12204 22.3578 4.87772C22.3089 4.53568 22.0151 4.53568 21.8192 4.56011C20.7175 4.68227 20.4972 5.04874 20.3992 5.75726C20.3503 6.1726 20.6196 6.53907 20.8889 6.85668C20.9134 7.22316 20.8154 7.85838 20.693 8.51803C20.5951 8.5669 20.5217 8.64019 20.4972 8.73792C20.3992 9.10439 20.1789 10.2038 19.8361 11.1078C19.7382 11.2544 19.5913 11.4498 19.5913 11.572C19.5913 11.6209 19.5913 11.6697 19.5913 11.6941C19.3465 12.1583 19.0772 12.5004 18.7589 12.5004C18.612 12.5004 18.5631 12.1095 18.5631 11.5964C18.5631 10.6924 19.0282 8.17599 19.0282 7.6385C19.0282 6.92998 19.1506 6.31919 19.1506 5.73283C19.1506 5.48851 18.9793 5.41522 18.7589 5.41522C18.5876 5.41522 18.4896 5.53737 18.3182 5.53737C17.6083 5.53737 17.5103 5.92828 17.5103 6.51464C17.5103 6.75896 17.5103 10.2282 17.4614 10.668C17.4124 11.401 16.9962 12.3049 16.2128 12.3049C15.5028 12.3049 15.16 11.3277 15.16 10.2771C15.16 9.32428 15.3314 8.12713 15.4538 7.71179C15.5273 7.46747 15.8455 6.34362 15.8455 6.19703C15.8455 5.92828 15.8211 5.85499 15.5273 5.85499C14.4011 5.87942 14.1807 5.97714 14.0094 6.58794C13.838 7.29645 13.6421 8.46917 13.6421 9.61746C13.6421 9.71518 13.6421 9.83734 13.6421 9.93507C13.3728 10.7657 13.079 11.6941 12.3201 11.743C11.806 11.7674 11.6346 10.4726 11.6346 9.12882C11.6346 6.46578 12.3935 3.87602 12.4915 1.21298C12.5159 0.968659 12.3446 0.797638 12.0508 0.797638C11.6591 0.846501 11.5366 0.82207 11.3653 0.82207C11.0715 0.82207 10.9491 0.944228 10.9246 1.23741C10.6798 3.90046 10.1412 7.14986 10.1412 9.73962C10.1412 9.76405 10.1412 9.76405 10.1412 9.78848C9.87185 10.6436 9.57806 11.743 8.77015 11.7919C8.25602 11.8163 8.08464 10.5214 8.08464 9.17769C8.08464 6.51464 8.8436 3.92489 8.94152 1.26184C8.96601 1.01752 8.79463 0.846501 8.50084 0.846501C8.10913 0.846501 7.98671 0.82207 7.79086 0.82207C7.49707 0.82207 7.37466 0.944228 7.35017 1.23741C7.10535 3.90046 6.56674 7.14986 6.56674 9.73962C6.56674 9.76405 6.56674 9.76405 6.56674 9.78848C6.29744 10.6436 6.00365 11.743 5.19573 11.7919C4.6816 11.8163 4.51023 10.5214 4.51023 9.17769C4.51023 6.51464 5.26918 3.92489 5.36711 1.26184C5.39159 1.01752 5.22021 0.846501 4.92643 0.846501C4.51023 0.846501 4.38782 0.82207 4.19196 0.82207C3.89817 0.82207 3.77576 0.944228 3.75128 1.23741C3.50645 3.90046 2.96784 7.14986 2.96784 9.73962C2.96784 9.86177 2.96784 9.98393 2.96784 10.1305C2.72302 10.9856 2.35579 11.914 1.89062 11.914C1.67028 11.8896 1.4989 11.572 1.4989 10.839C1.4989 9.4953 1.62132 7.6385 1.74373 6.22146C1.76821 6.05044 1.69476 5.87942 1.4989 5.87942C1.32753 5.85499 0.788918 5.80612 0.593059 5.80612C0.299272 5.80612 0.17686 5.97714 0.17686 6.29476V6.78339C0.201342 8.42031 0.0299664 9.71518 0.0299664 11.2544C0.0299664 12.3538 0.617542 13.1112 1.35201 13.1112C2.13544 13.1112 2.7475 12.4515 3.1637 11.6697C3.38404 12.5004 3.80024 13.2333 4.63264 13.2333C5.41607 13.2333 6.17502 12.3782 6.68915 11.4254C6.88501 12.3538 7.30121 13.2333 8.20706 13.2333C8.99049 13.2333 9.74944 12.3782 10.2636 11.4254C10.4594 12.3538 10.8756 13.2333 11.7815 13.2333C12.5404 13.2333 13.2994 12.4027 13.8135 11.4987C14.0828 12.5981 14.6949 13.4288 15.8455 13.4288C16.8003 13.4288 17.0696 13.0379 17.6817 12.1583C17.8776 12.647 17.951 13.5754 18.5141 13.5754C19.2975 13.5754 19.9586 12.6714 20.3992 11.6453C20.8644 12.4515 21.9906 13.0135 22.8475 13.0135C24.1695 13.0135 25.2957 12.0606 25.1978 10.6192C25.0754 8.66462 22.1864 6.5635 21.9661 5.46408ZM22.3089 12.0362C21.9171 12.0362 21.3051 11.7919 21.2806 11.2788C21.2561 10.9856 21.9416 10.839 22.1864 10.6924C22.3823 10.5703 22.4313 10.4726 22.4313 10.3993C22.4068 10.2282 22.162 10.1061 21.8927 10.1061C21.6723 10.1061 21.3541 10.1794 20.9868 10.4237C21.0603 10.0817 21.5744 8.32258 21.6968 7.46747C22.6516 8.17599 23.533 9.78848 23.6309 10.9856C23.7044 11.9385 22.6271 12.0362 22.3089 12.0362Z"
      fill="black"
    />
    <path
      d="M44.2452 3.85143C44.6859 3.85143 45.1511 3.58269 45.1511 2.9719C45.1511 2.48326 44.8573 2.14122 44.2941 2.14122C43.7065 2.14122 43.3638 2.55656 43.3882 2.94746V2.9719C43.4127 3.53382 43.8045 3.85143 44.2452 3.85143Z"
      fill="black"
    />
    <path
      d="M58.3957 13.4777C57.955 13.1845 57.6368 12.7203 57.7102 10.8146C57.7592 9.59305 58.004 7.90727 58.004 6.71012C58.004 6.17262 57.7592 5.56183 57.0737 5.56183C56.2168 5.56183 54.9682 7.32091 54.5765 8.10272C54.6255 7.63852 54.7723 6.27035 54.7968 5.80615C54.8213 5.34195 54.8213 5.31751 54.0134 5.31751C53.4748 5.31751 53.4258 5.41524 53.4258 5.61069C53.4258 6.73455 53.3279 8.02943 53.23 9.3243C52.9362 9.95952 52.5445 10.5947 51.9814 10.5947C51.81 10.5947 51.6386 10.5459 51.4917 10.4726C51.7365 10.1061 51.9079 9.27544 51.9079 8.83567C51.9079 8.15158 51.4183 7.61409 50.7328 7.61409C49.8269 7.61409 49.2883 8.24931 49.2883 9.12885C49.2883 9.81293 49.9983 10.5947 50.5369 10.9612C50.2186 11.5964 49.5821 11.9874 48.8476 11.9874C47.7949 11.9874 47.4277 10.0573 47.4277 9.34873C47.4277 7.98056 47.9173 6.44137 49.5331 6.44137C50.6348 6.44137 50.6348 7.17432 51.1 7.17432C51.149 7.17432 51.2959 7.10102 51.2959 7.02773C51.2959 6.22148 50.0228 5.56183 49.3618 5.56183C47.1094 5.56183 45.5425 7.34534 45.5425 9.56862C45.5425 10.0084 45.616 10.4726 45.7629 10.9124C45.5425 11.4743 45.2732 11.9141 44.9305 11.9141C44.7101 11.9141 44.5387 11.5964 44.5387 10.8635C44.5387 9.51975 44.6612 7.66295 44.7836 6.24592C44.808 6.0749 44.7346 5.90387 44.5387 5.90387C44.3674 5.87944 43.8288 5.83058 43.6329 5.83058C43.3391 5.83058 43.2167 6.0016 43.2167 6.31921V6.80784C43.2167 7.66295 43.1677 8.3959 43.1432 9.12885C43.1188 9.15328 43.0943 9.20214 43.0698 9.25101C42.8005 9.98396 42.4577 12.0118 41.6498 12.0118C41.405 12.0118 40.8909 11.6697 40.8909 10.7169C40.8909 9.17771 41.405 6.09933 41.4785 5.56183C42.2619 5.39081 42.9474 5.43967 43.8777 5.17092C44.2939 5.04877 44.0491 4.56013 43.5839 4.609C43.3146 4.63343 42.5802 4.68229 41.5519 4.609C41.5764 3.80275 41.7722 3.28969 41.7722 2.45901V2.38572C41.7722 2.16583 41.6743 1.99481 41.454 1.99481C41.0133 1.99481 40.3278 2.1414 40.3278 2.75219C40.3278 3.38742 40.2054 3.94934 40.2299 4.58456C39.7892 4.609 39.3975 4.48684 38.9568 4.48684C38.6385 4.48684 38.5651 5.0732 38.5651 5.29308C38.5651 5.5374 38.5895 5.70842 38.7364 5.70842C39.3485 5.70842 39.8871 5.61069 40.1319 5.58626C40.0095 7.19875 39.8137 8.10272 39.6912 9.22658C39.6912 9.29987 39.6668 9.3976 39.6668 9.49532C39.3975 10.3504 38.8833 11.6697 38.4671 11.6697C38.2957 11.6697 38.0509 11.401 38.0509 11.2055C38.0509 10.0084 38.1733 8.51806 38.4916 7.32091C38.5651 7.07659 38.7364 6.63682 38.7364 6.36807C38.7364 6.05046 38.2223 5.87944 37.953 5.87944C37.5123 5.87944 37.5368 6.12376 37.3654 6.51466C37.0472 6.27035 36.9737 5.83058 36.1168 5.83058C34.55 5.83058 33.5951 8.37147 33.5951 9.95952C33.5951 10.2283 33.5707 10.3749 33.5707 10.5215C33.5707 11.4254 33.0565 12.5493 32.5179 12.5493C32.0528 12.5493 31.9059 11.2788 31.9059 10.7413C31.9059 9.98396 32.2486 8.29817 32.5424 7.56522C32.6648 7.29648 32.8852 7.0033 32.8852 6.71012C32.8852 6.36807 32.4934 5.80615 32.1017 5.80615C31.661 5.80615 31.3917 6.05046 30.9266 6.05046C30.1921 6.05046 29.7025 5.58626 29.2863 5.58626C29.017 5.58626 28.8701 5.75728 28.8701 6.0016C28.8701 6.66125 29.58 6.5391 29.4087 7.36977C29.2373 8.15158 28.7232 10.2771 28.4294 11.0834C28.4049 11.1078 28.4049 11.1567 28.4049 11.2055C28.4049 11.3033 28.4294 11.3766 28.4539 11.4499C28.2825 11.743 28.0866 11.9385 27.8418 11.9385C27.597 11.9385 27.0828 11.5964 27.0828 10.6436C27.0828 9.10442 27.597 6.02603 27.6704 5.48854C28.4539 5.31751 29.1394 5.36638 30.0697 5.09763C30.4859 4.97547 30.2411 4.48684 29.7759 4.5357C29.5066 4.56013 28.7721 4.609 27.7439 4.5357C27.7684 3.72946 27.9642 3.21639 27.9642 2.38572V2.38572C27.9642 2.16583 27.8663 1.99481 27.6459 1.99481C27.2053 1.99481 26.5198 2.1414 26.5198 2.75219C26.5198 3.38742 26.3973 3.94934 26.4218 4.58456C25.9811 4.609 25.5894 4.48684 25.1487 4.48684C24.8305 4.48684 24.757 5.0732 24.757 5.29308C24.757 5.5374 24.7815 5.70842 24.9284 5.70842C25.5405 5.70842 26.0791 5.61069 26.3239 5.58626C26.2015 7.19875 26.0056 8.10272 25.8832 9.22658C25.8098 9.81293 25.7118 10.7413 25.7118 11.3277C25.7118 12.3783 26.6177 13.2334 27.3766 13.2334C28.7232 13.2334 29.8249 10.497 29.8249 9.37317C29.8249 9.3243 29.8249 9.27544 29.8249 9.22658C29.9718 8.56692 30.0697 7.90727 30.1921 7.34534C30.2166 7.27204 30.29 7.05216 30.4859 7.05216C30.9266 7.05216 30.9755 7.36977 30.9755 7.71181C30.9755 8.61578 30.6573 10.2283 30.6573 11.1811C30.6573 12.1095 30.9021 13.2578 31.9793 13.2578C32.8852 13.2578 33.6196 12.6714 34.0358 11.8896C34.3296 12.5981 34.8193 13.1601 35.5048 13.1601C36.1658 13.1601 36.7289 12.6714 37.1206 12.2072C37.2185 12.4516 37.3654 13.1112 38.0754 13.1112C38.7364 13.1112 39.2506 12.5493 39.6423 11.8408C39.8626 12.6714 40.5971 13.2578 41.2336 13.2578C41.9926 13.2578 42.7026 12.3538 43.1432 11.3766C43.1922 12.4027 43.7553 13.0868 44.4653 13.0868C45.1998 13.0868 45.8118 12.5004 46.228 11.7675C46.6932 12.5248 47.4277 13.0379 48.3825 13.0379C49.729 13.0379 50.5369 12.1584 51.2469 11.1078C51.4917 11.1567 51.7121 11.23 51.9324 11.23C52.3976 11.23 52.8627 10.9124 53.23 10.4726C53.181 11.2544 53.132 12.0118 53.132 12.6959C53.132 12.9402 53.181 13.0379 53.3524 13.0868C53.5238 13.1601 53.842 13.1112 54.0379 13.1112C54.2827 13.1112 54.3317 13.1356 54.3806 12.818C54.4051 12.5981 54.552 9.98396 54.552 9.7885C54.552 9.25101 55.8496 6.97887 56.4861 6.97887C56.6085 6.97887 56.7065 7.19875 56.7065 7.34534C56.7065 8.51806 56.3392 10.4237 56.3392 11.6453C56.3392 12.9402 56.9758 13.38 57.2451 13.5265C57.4409 13.6487 58.004 13.8197 58.2978 13.7953C58.3957 13.722 58.5671 13.5754 58.3957 13.4777ZM36.9003 10.9857C36.8758 11.3277 36.2637 12.2072 35.7986 12.2072C35.2844 12.2072 35.0641 10.7413 35.0886 9.76407C35.113 8.61578 35.6761 6.56353 36.2148 6.56353C36.9247 6.56353 37.0227 8.27374 37.0227 8.81124C37.0227 9.42203 36.9492 10.3749 36.9003 10.9857ZM50.9531 10.1794C50.6348 9.98396 50.439 9.37317 50.439 9.00669C50.439 8.78681 50.5124 8.29817 50.8307 8.29817C51.1245 8.29817 51.2224 8.83567 51.2224 9.05555C51.2224 9.34873 51.051 9.93509 50.9531 10.1794Z"
      fill="black"
    />
    <path
      d="M64.0265 10.5946C63.9041 8.66453 60.9907 6.56341 60.7949 5.46399C60.7459 5.17081 61.2356 5.12194 61.1866 4.87763C61.1376 4.53558 60.8438 4.53558 60.648 4.56001C59.5463 4.68217 59.3259 5.04865 59.228 5.75717C59.179 6.1725 59.4484 6.53898 59.7177 6.85659C59.7421 7.7117 59.277 10.0816 58.7384 11.01C58.616 11.181 58.4446 11.4253 58.4201 11.5719C58.3711 11.8651 58.5915 12.0117 58.7873 11.8162C58.9587 11.6696 58.9342 11.5719 59.1056 11.4497C59.4973 12.3537 60.7214 12.9889 61.6518 12.9889C62.9983 12.9889 64.1 12.0361 64.0265 10.5946ZM61.1376 12.0361C60.7459 12.0361 60.1339 11.7918 60.1094 11.2787C60.0849 10.9855 60.7704 10.8389 61.0152 10.6924C61.2111 10.5702 61.26 10.4725 61.26 10.3992C61.2356 10.2282 60.9907 10.106 60.7214 10.106C60.5011 10.106 60.1828 10.1793 59.8156 10.4236C59.889 10.0816 60.4032 8.32249 60.5256 7.46738C61.4804 8.1759 62.3617 9.78838 62.4597 10.9855C62.5331 11.9384 61.4559 12.0361 61.1376 12.0361Z"
      fill="black"
    />
  </svg>
);

export default Logo;