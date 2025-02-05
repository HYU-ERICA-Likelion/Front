const generations = ["12기", "13기"] as const;

const crewMember_12th = [
  {
    generation: "12기",
    role: "12기 대표",
    name: "음상훈",
    imgUrl: "/assets/images/members/eumsanghoon.jpg",
  },
  {
    generation: "12기",
    role: "12기 운영진",
    name: "김선후",
    imgUrl: "/assets/images/members/kimseonhu.jpg",
  },
  {
    generation: "12기",
    role: "12기 운영진",
    name: "송재현",
    imgUrl: "/assets/images/members/songjaehyeon.jpg",
  },
  {
    generation: "12기",
    role: "12기 운영진",
    name: "오승아",
    imgUrl: "/assets/images/members/ohseunga.jpg",
  },
  {
    generation: "12기",
    role: "12기 운영진",
    name: "윤현주",
    imgUrl: "/assets/images/members/yoonhyeonju.jpg",
  },
];

const crewMember_13th = [
  // 13기
  {
    generation: "13기",
    role: "대표",
    name: "이종원",
    imgUrl: "/assets/images/members/leejongwon.jpg",
  },
  {
    generation: "13기",
    role: "부대표",
    name: "윤현주",
    imgUrl: "/assets/images/members/yoonhyeonju.jpg",
  },
  {
    generation: "13기",
    role: "기획/디자인",
    name: "송현서",
    imgUrl: "/assets/images/members/songhyeonse.jpg",
  },
  {
    generation: "13기",
    role: "기획/디자인",
    name: "정재민",
    imgUrl: "/assets/images/members/jeongjaemin.jpg",
  },
  {
    generation: "13기",
    role: "프론트엔드",
    name: "김세현",
    imgUrl: "/assets/images/members/kimsehyun.png",
  },
  {
    generation: "13기",
    role: "프론트엔드",
    name: "송가은",
    imgUrl: "/assets/images/members/songgaeun.jpg",
  },
  {
    generation: "13기",
    role: "프론트엔드",
    name: "이가은",
    imgUrl: "/assets/images/members/leegaeun.jpg",
  },
  {
    generation: "13기",
    role: "백엔드",
    name: "송재현",
    imgUrl: "/assets/images/members/songjaehyeon.jpg",
  },
  {
    generation: "13기",
    role: "백엔드",
    name: "김승민",
    imgUrl: "/assets/images/members/kimseungmin.jpg",
  },
  {
    generation: "13기",
    role: "백엔드",
    name: "김선후",
    imgUrl: "/assets/images/members/kimseonhu.jpg",
  },
];

const crewMembers = {
  "12기": crewMember_12th,
  "13기": crewMember_13th,
};

export { generations, crewMembers };
