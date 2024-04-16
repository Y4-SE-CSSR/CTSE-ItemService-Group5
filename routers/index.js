import itemRouter from "./routes/item.js";
import categoryRouter from "./routes/category.js"
import reviewRouter from "./routes/review.js"
import wishListRouter from "./routes/wishList.js"

function routers(app) {
    app.use("/api/items", itemRouter);
    app.use("/api/categories", categoryRouter);
    app.use("/api/reviews", reviewRouter);
    app.use("/api/wishLists", wishListRouter);
}

export default routers;