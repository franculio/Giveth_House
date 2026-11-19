export const SITE: {
  title: string;
  description: string;
  defaultLanguage: string;
  url: string;
  author: string;
  ogImage: string;
  houseHandle: string;
  houseTelegram: string;
  neighborhood: string;
  givethDonation: string;
  monthlyCost: number;
  monthlyDonated: number;
  monthlyDonatedUsd: number;
  usdPerEur: number;
  exchangeRateDate: string;
};

export type SiteConfig = typeof SITE;
