import "./Portfolio.scss";

export default function Portfolio() {
  const data = [
    {
      id: 1,
      name: "Movie Madness",
      title: "Javascript App",
      img:
        "https://lh4.googleusercontent.com/proxy/2egT_ohsE80HCVHUv5C_Pa5Uq4yxiriUQP95MAI1c0e0F7skWXBMoHkp3ktKwp9jvYM7JAlzzJiXg1Ksjm9YCcKU-TNeLwOBqAqvKMoD=s0-d",
      icon: "./images/clapperboard.png",
      desc:
        "Ever wanted to watch a movie or TV Show but didn't know what streaming service was streaming it?  Well look no further, with Movie Madness you can search movie, tv shows and movie listing date and times.  Check us out HERE.",
    },
    {
      id: 2,
      name: "Well Rounded Fitness",
      title: "React App",
      img:
        "https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-HD-Fitness-Wallpapers-768x480.jpeg",
      icon: "images/dumbbell.png",
      desc:
        "In these hard times during the pandemic, its hard to keep track and stay motivated with your health and fitness.  Allow us to provide you the aide that you're looking for.  WRF provides workout routines for your fitness, nutrition plans for your health and journal to log the day for your peace of mind. Check us out HERE.",
      featured: true,
    },
    {
      id: 3,
      name: "Bits N Bytes",
      title: "Javascript App",
      img:
        "https://wallpaperboat.com/wp-content/uploads/2020/08/21/53277/food-21-920x1636.jpg",
      icon: "images/food.png",
      desc:
        "Dine in at Bits-N-Bytes, an All American Food Resturant.  We allow you to track resturant wait times, convert currencies, place online orders. Check us out HERE.",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}