export interface Rating {
  Count: number;
  Average: number;
  StarRating: number;
}
export interface Cuisine {
  Id: number;
  isTopCuisine: boolean;
  Name: string;
  SeoName: string;
}

export interface Deal {
  Description: string;
  DiscountPercent: number;
  QualifyingPrice: number;
  OfferType: string;
  OfferId: string;
  CampaignId: string;
  ConsumerSegment: string;
}

export interface Restaurant {
  Id: number;
  Name: string;
  Rating: Rating;
  CuisineTypes?: [Cuisine];
  LogoUrl: string;
  Deals?: [Deal];
}
