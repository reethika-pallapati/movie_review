export class Movie {
 
  constructor(
    public name: string,
    public gerner: string,
    public cast: string,
    public type: string,
    public rating: number,
    public date: string,
    public review: string
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
