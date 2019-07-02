
function createBook (id1, title1, author1, price1) {
    return {
      id: id1,
      title: title1,
      author: author1,
      price: price1,
      rating: [],
      getPrice() {
        return price1;
      },
      getInfo(){
        return title1 + " by " + author1;
      },
      addRating(rate){
        rating.push(rate);
        return rating;
      }
    }
  }