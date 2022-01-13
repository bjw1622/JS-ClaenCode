/**
 * 전역 공간이란??
 * 최상위 공간 
 * 브라우저(window), nodeJS(global)로 나뉜다.
 */

// 전역 공간을 더럽히지 않기
// 이유?? 어디서나 접근 가능 (코더 입장에서는 분리 됨 but runtime 환경에선 분리x)
// 애초에  1. 전역변수 만들지 않기
//        2. 지역변수 O 
//        3. window global을 조작 x
//        4. const,let OK
//        5. IIFE, MDOULEM CLOSURE 등 스코프 나누는 방법 고민해보기