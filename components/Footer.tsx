function FooterLogo() {
  return (
    <div className="relative h-[122px] w-[122px] shrink-0">
      {/* Верхняя форма */}
      <div className="absolute left-0 top-[8px] h-[56px] w-[92px] rounded-r-full border border-current bg-current" />

      {/* Квадрат */}
      <div className="absolute bottom-0 left-0 h-[50px] w-[50px] border border-current bg-current" />

      {/* Треугольник */}
      <svg
        className="absolute bottom-[1px] left-[54px]"
        width="50"
        height="49"
        viewBox="0 0 50 49"
        fill="currentColor"
      >
        <path
          d="M1 48V1L49 48H1Z"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
