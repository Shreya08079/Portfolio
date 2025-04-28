export interface Certificate {
  title: string;
  issuer: string;
  date: string;
}

export const certificatesList: Certificate[] = [
  {
    title: "Google Cloud-Certificate",
    issuer: "Introduction to Generative AI",
    date: "March 2024"
  },
  {
    title: "Coursera University of Colorado Boulder",
    issuer: "Dynamic Programming, Greedy Algorithm",
    date: "July 2024"
  },
  {
    title: "NPTEL Certified",
    issuer: "Cloud Computing",
    date: "November 2024"
  }
];
