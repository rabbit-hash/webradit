export interface StatusCard {
  label: string;
  title: string;
  subtitle: string;
}

export interface ProfileInfo {
  name: string;
  fullName: string;
  role: string;
  headline: string;
  tagline: string;
  bioParagraph1: string;
  bioParagraph2: string;
  statusCards: StatusCard[];
}
