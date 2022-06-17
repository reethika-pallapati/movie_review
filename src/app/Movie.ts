export class Movie {
  public name: string;
  public gerner: string;
  public cast: string;
  public type: string;
  public rating: number;
  public date: string;
  public review: string;
  constructor(
    name: string,
    gerner: string,
    cast: string,
    type: string,
    rating: number,
    date: string,
    review: string
  ) {
    this.name = name;
    this.gerner = gerner;
    this.cast = cast;
    this.type = type;
    this.rating = rating;
    this.date = date;
    this.review = review;
  }
}
