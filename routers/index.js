import itemRouter from "./routes/item.js";
import categoryRouter from "./routes/category.js"
import reviewRouter from "./routes/review.js"
import wishListRouter from "./routes/wishList.js"

function routers(app) {
    app.use("/items", itemRouter);
    app.use("/categories", categoryRouter);
    app.use("/reviews", reviewRouter);
    app.use("/wishLists", wishListRouter);
}

export default routers;