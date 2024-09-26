export default function ConnectLine({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width="147"
      height="16"
      viewBox="0 0 147 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`md:w-[102.41px] xl:w-[140px] max-sm:rotate-90 w-[63px] shrink-0 ${className}`}
    >
      <path
        d="M0.226497 8L6 13.7735L11.7735 8L6 2.2265L0.226497 8ZM146.707 8.70711C147.098 8.31658 147.098 7.68342 146.707 7.29289L140.343 0.928932C139.953 0.538408 139.319 0.538408 138.929 0.928932C138.538 1.31946 138.538 1.95262 138.929 2.34315L144.586 8L138.929 13.6569C138.538 14.0474 138.538 14.6805 138.929 15.0711C139.319 15.4616 139.953 15.4616 140.343 15.0711L146.707 8.70711ZM6 9H7.94444V7H6V9ZM11.8333 9H15.7222V7H11.8333V9ZM19.6111 9H23.5V7H19.6111V9ZM27.3889 9H31.2778V7H27.3889V9ZM35.1667 9H39.0556V7H35.1667V9ZM42.9444 9H46.8333V7H42.9444V9ZM50.7222 9H54.6111V7H50.7222V9ZM58.5 9H62.3889V7H58.5V9ZM66.2778 9H70.1667V7H66.2778V9ZM74.0556 9H77.9444V7H74.0556V9ZM81.8333 9H85.7222V7H81.8333V9ZM89.6111 9H93.5V7H89.6111V9ZM97.3889 9H101.278V7H97.3889V9ZM105.167 9H109.056V7H105.167V9ZM112.944 9H116.833V7H112.944V9ZM120.722 9H124.611V7H120.722V9ZM128.5 9H132.389V7H128.5V9ZM136.278 9H140.167V7H136.278V9ZM144.055 9H146V7H144.055V9ZM0.226497 8L6 13.7735L11.7735 8L6 2.2265L0.226497 8ZM146.707 8.70711C147.098 8.31658 147.098 7.68342 146.707 7.29289L140.343 0.928932C139.953 0.538408 139.319 0.538408 138.929 0.928932C138.538 1.31946 138.538 1.95262 138.929 2.34315L144.586 8L138.929 13.6569C138.538 14.0474 138.538 14.6805 138.929 15.0711C139.319 15.4616 139.953 15.4616 140.343 15.0711L146.707 8.70711ZM6 9H7.94444V7H6V9ZM11.8333 9H15.7222V7H11.8333V9ZM19.6111 9H23.5V7H19.6111V9ZM27.3889 9H31.2778V7H27.3889V9ZM35.1667 9H39.0556V7H35.1667V9ZM42.9444 9H46.8333V7H42.9444V9ZM50.7222 9H54.6111V7H50.7222V9ZM58.5 9H62.3889V7H58.5V9ZM66.2778 9H70.1667V7H66.2778V9ZM74.0556 9H77.9444V7H74.0556V9ZM81.8333 9H85.7222V7H81.8333V9ZM89.6111 9H93.5V7H89.6111V9ZM97.3889 9H101.278V7H97.3889V9ZM105.167 9H109.056V7H105.167V9ZM112.944 9H116.833V7H112.944V9ZM120.722 9H124.611V7H120.722V9ZM128.5 9H132.389V7H128.5V9ZM136.278 9H140.167V7H136.278V9ZM144.055 9H146V7H144.055V9Z"
        fill={color || "#019D45"}
      />
    </svg>
  );
}
