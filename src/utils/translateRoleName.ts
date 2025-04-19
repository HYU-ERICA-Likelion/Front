const translateRoleName = (role: string): string => {
  const roleMapping: Record<string, string> = {
    design: "디자인",
    frontend: "프론트엔드",
    backend: "백엔드",
  };

  return roleMapping[role] || role; // 매핑된 값이 없으면 원래 값 반환
};

export { translateRoleName };
