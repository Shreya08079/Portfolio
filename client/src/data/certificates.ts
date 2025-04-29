export interface Certificate {
  title: string;
  issuer: string;
  date: string;
}

export const certificatesList: Certificate[] = [
  {
    title: "Google Cloud-Certificate",
    issuer: "Introduction to Generative AI",
    date: "January 2024"
  },
  {
    title: "Coursera University of Colorado Boulder",
    issuer: "Dynamic Programming, Greedy Algorithms",
    date: "May 2024"
  },
  {
    title: "NPTEL Certified",
    issuer: "Cloud Computing",
    date: "Jul-Oct 2024"
  }
];
