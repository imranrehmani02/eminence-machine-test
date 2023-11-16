const express = require('express');
const userRouter = require('./routes/users.router');
const productRouter = require('./routes/products.router');
const utility = require('./core/utility');
require("./database");
const app = express();
const PORT = utility.PORT || 3000;

app.use('/user', userRouter);
app.use('/product', productRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
