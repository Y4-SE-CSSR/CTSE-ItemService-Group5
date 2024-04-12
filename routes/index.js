import itemRouter from "./routers/item.js";
import categoryRouter from "./routers/category.js"
import reviewRouter from "./routers/review.js"
import wishListRouter from "./routers/wishList.js"

function routers(app) {
    app.use("/items", itemRouter);
    app.use("/categories", categoryRouter);
    app.use("/reviews", reviewRouter);
    app.use("/wishLists", wishListRouter);
}

export default routers;