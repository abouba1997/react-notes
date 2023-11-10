import { SidebarIconProps } from "./SidebarIcon.type";

const SidebarIcon = ({ icon, text }: SidebarIconProps) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100 ">{text}</span>
    </div>
  );
};

export default SidebarIcon;
