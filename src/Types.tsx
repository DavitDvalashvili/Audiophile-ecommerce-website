export interface navType {
  handleClick: () => void;
}

export interface BadgeContextType {
  showBadge: boolean;
  setShowBadge: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface cartType {
  setHideCart: React.Dispatch<React.SetStateAction<boolean>>;
}
