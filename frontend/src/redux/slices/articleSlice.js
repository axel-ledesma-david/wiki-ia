import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [
    {
      id: "2r3H54#$f",
      title: "Software",
      content:
        "Qui soluta internos vel exercitationem cupiditate ad ipsam rerum eum voluptas quia eum asperiores mollitia aut consequatur corrupti ad recusandae nihil. Est minima temporibus et quae provident sit aliquid quis! Et accusamus laborum quo ratione suscipit non rerum natus sit ullam deserunt non quis earum!",
      categories: ["Informática", "Computación"],
      cover:
        "https://images.pexels.com/photos/270700/pexels-photo-270700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "2r3Gt5$%eR",
      title: "Psicoanálisis",
      content:
        "Lorem ipsum dolor sit amet. Aut voluptatem maiores eum excepturi voluptatem est alias laborum. Ut incidunt quam sit voluptas sunt qui optio aperiam et nisi laboriosam qui minima omnis quo consectetur animi aut asperiores iusto. Non voluptatum voluptatem et dignissimos nihil et nesciunt rerum ex tempora autem.",
      categories: ["Psicología"],
      cover:
        "https://images.pexels.com/photos/5699496/pexels-photo-5699496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "3f8Rf!t/j6",
      title: "El sistema solar",
      content:
        "Lorem ipsum dolor sit amet. Aut rerum dolor ut dolorem inventore et ipsa voluptatem id ducimus enim rem dolores aliquam. A itaque blanditiis in dignissimos voluptas et quis facilis ut labore molestiae. Quo repellendus tempore sed quae vero est rerum consectetur sit voluptatem beatae in minima dolores eum laudantium possimus et saepe praesentium? Qui iste ducimus quo autem consequatur id exercitationem sunt est quae animi qui ducimus cupiditate sed incidunt omnis ab asperiores ullam.",
      categories: ["Astronomía"],
      cover:
        "https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "hT2s7$(sr5",
      title: "Las bactéreas",
      content:
        "Lorem ipsum dolor sit amet. Et quibusdam voluptate cum similique atque sed quia omnis aut iusto soluta ex adipisci iure eos enim quae. Et libero debitis sit enim neque sit quia culpa! 33 nulla natus est voluptate dolorem et nesciunt adipisci. Qui voluptas corporis in dolores dolorem ea dolore necessitatibus aut saepe quaerat non tenetur dicta quo voluptas voluptas eum molestias fuga.",
      categories: ["Biología"],
      cover:
        "https://images.pexels.com/photos/3992943/pexels-photo-3992943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "f5RgY%&423s",
      title: "La revolución francesa",
      content: "Rem repellat autem ex internos omnis et beatae officia aut quasi quia aut accusamus quibusdam aut quos quaerat qui aliquam accusantium. Eos quibusdam eius 33 consequatur consequuntur vel tenetur reiciendis 33 maxime facilis. Et fuga maxime ut tempora galisum qui dicta labore. Qui praesentium nostrum ut odio sunt est sequi voluptatem sed sequi eaque ut fugit voluptate!",
      categories: ["Historia"],
      cover: "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2019/08/06/5f15f06fb5e9a.r_d.516-211-0.jpeg"
    },
  ],
  inputValue: "",
};

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    getArticles: (state) => {
      return state;
    },
    getArticlesSearch: (state, action) => {
      let filterData = state.articles.filter((art) =>
        art.title.toLowerCase().includes(action.payload)
      );

      const inputValue = action.payload;

      console.log({
        value: inputValue,
        dataFiltered: filterData,
      });

      return {
        ...state,
        filterData,
        inputValue: inputValue,
      };
    },
    resetSearch: (state) => {
      return {
        ...state,
        inputValue: "",
      };
    },
  },
});

export default articleSlice.reducer;

export const { getArticles, getArticlesSearch, resetSearch } =
  articleSlice.actions;
