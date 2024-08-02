const express = require("express");
const app = express();
app.use(express.json())
const PORT = 6000;
app.post("/bfhl",(req,res)=>{
    
    const data=req.body.data;
    var highest=[];
    const alpha=[];
    const num=[];
    const is_success=true;
    data.forEach((item )=> {
        if (!isNaN(item)) {
            num.push(item);
        }else{
            alpha.push(item);
            if (highest.length === 0 ||item.localeCompare(highest[0]) > 0 ) {
                highest = [item];
            }
        }
    });
    res.json({
        is_success: is_success,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        alphabets: alpha,
        numbers: num,
        highest_alphabet: highest,
    });
})
app.get("/bfhl", (req, res) => {
    res.json({"operation_code":1});
});
app.listen(PORT, () => {
    console.log(`listening on http:/127.0.0.1:${PORT}`);
});