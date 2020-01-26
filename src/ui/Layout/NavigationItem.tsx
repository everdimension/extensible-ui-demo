import React from "react";
import { useLocation } from "react-router-dom";
import { MenuItem } from "@blueprintjs/core";
import { FeatherIcon } from "../../ui/FeatherIcon";

export function NavigationItem({
  onNavigate,
  featherIcon,
  icon,
  iconColor,
  href,
  ...props
}: {
  onNavigate: (pathname: string) => void;
  featherIcon?: string;
  iconColor?: string;
} & MenuItem["props"]) {
  const location = useLocation();
  const active = location.pathname === href;
  return (
    <MenuItem
      {...props}
      href={href}
      active={active}
      icon={
        icon ? (
          icon
        ) : featherIcon ? (
          <FeatherIcon
            style={{ marginTop: 2 }}
            name={featherIcon}
            svgAttrs={{
              width: 16,
              height: 16,
              color: active ? "#e91e63" : "inherit",
              'stroke-width': active ? 3 : 2,
            }}
          ></FeatherIcon>
        ) : (
          undefined
        )
      }
      onClick={event => {
        event.preventDefault();
        onNavigate(event.currentTarget.pathname);
        // history.push(event.currentTarget.pathname);
      }}
    />
  );
}
