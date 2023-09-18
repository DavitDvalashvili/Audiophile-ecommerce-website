export interface navType {
  handleClick: () => void;
}

export interface BadgeContextType {
  showBadge: boolean;
  setShowBadge: React.Dispatch<React.SetStateAction<boolean>>;
  updateBadge: boolean;
  setUpdateBadge: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface cartType {
  setHideCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface formType {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  zipCode: number;
  city: string;
  country: string;
  payType: string;
  eMoneyNumber: number;
  eMoneyPin: number;
}

export interface totalPriceType {
  totalPrice: number;
  setHideCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}
