const express = require("express")
const {WomenModel} = require("../modul/women.model")

const womenRouter = express.Router()

womenRouter.get("/",async (req,res)=>{
    const query = req.query
    try {
        const note = await WomenModel.find(query)
        res.send(note)
    } catch (error) {
        console.log(error);
        res.send({"msg":"Something went wrong"})
    }
})

womenRouter.post("/create",async (req,res)=>{
    const payload = req.body
    try {
        await WomenModel.insertMany([
            {
                "name": "Katie D'Amore",
                "avatar": "https://images.asos-media.com/products/nike-jordan-flight-mock-neck-long-sleeve-top-in-beige/203332445-1-beige?$n_640w$&wid=634&fit=constrain",
                "price": 87,
                "rating": 9.4,
                "id": "1"
            },
            {
                "name": "Anne Witting",
                "avatar": "https://images.asos-media.com/products/nike-tech-high-neck-bodysuit-in-black/203283606-1-black?$n_640w$&wid=634&fit=constrain",
                "price": 40,
                "rating": 7.0,
                "id": "2"
            },
            {
                "name": "Stephanie Kulas",
                "avatar": "https://images.asos-media.com/products/nike-tennis-dri-fit-slam-tank-in-white-and-red/202770987-1-white?$n_640w$&wid=634&fit=constrain",
                "price": 52,
                "rating": 9.0,
                "id": "3"
            },
            {
                "name": "Eduardo Thompson",
                "avatar": "https://images.asos-media.com/products/topshop-canvas-tote-in-cream/204093617-1-cream?$n_640w$&wid=634&fit=constrain",
                "price": 50,
                "rating": 9.8,
                "id": "4"
            },
            {
                "name": "Mr. Jonathon Oberbrunner",
                "avatar": "https://images.asos-media.com/products/topshop-canvas-tote-in-black/204093614-1-black?$n_640w$&wid=634&fit=constrain",
                "price": 48,
                "rating": 9.6,
                "id": "5"
            },
            {
                "name": "Loren Brown",
                "avatar": "https://images.asos-media.com/products/asos-design-curve-herringbone-shacket-in-oatmeal/203826951-1-oatmeal?$n_640w$&wid=634&fit=constrain",
                "price": 26,
                "rating": 8.7,
                "id": "6"
            },
            {
                "name": "Allen Casper",
                "avatar": "https://images.asos-media.com/products/asos-design-tall-herringbone-shacket-in-oatmeal/203826882-1-oatmeal?$n_640w$&wid=634&fit=constrain",
                "price": 41,
                "rating": 7.1,
                "id": "7"
            },
            {
                "name": "Courtney Carter",
                "avatar": "https://images.asos-media.com/products/lindex-cable-knit-tights-in-rust/203018023-1-rust?$n_480w$&wid=476&fit=constrain",
                "price": 22,
                "rating": 8.3,
                "id": "8"
            },
            {
                "name": "Joy Satterfield I",
                "avatar": "https://images.asos-media.com/products/wednesdays-girl-maternity-relaxed-midi-smock-dress-in-pink-red-zebra/204340257-1-pinkzebra?$n_480w$&wid=476&fit=constrain",
                "price": 55,
                "rating": 6.5,
                "id": "9"
            },
            {
                "name": "Robyn Ondricka",
                "avatar": "https://images.asos-media.com/products/envii-racer-midi-tank-dress-in-black/203971569-1-black?$n_480w$&wid=476&fit=constrain",
                "price": 43,
                "rating": 8.2,
                "id": "10"
            },
            {
                "name": "Blake Larkin",
                "avatar": "https://images.asos-media.com/products/whistles-cotton-high-neck-smock-dress-in-mini-cord-floral/203815601-1-darkfloral?$n_480w$&wid=476&fit=constrain",
                "price": 97,
                "rating": 8.1,
                "id": "11"
            },
            {
                "name": "Vicki Ward",
                "avatar": "https://images.asos-media.com/products/pretty-lavish-curve-tie-waist-blazer-mini-dress-in-oyster/203572503-1-oyster?$n_480w$&wid=476&fit=constrain",
                "price": 77,
                "rating": 9.3,
                "id": "12"
            },
            {
                "name": "Ann Marvin",
                "avatar": "https://images.asos-media.com/products/river-island-geo-chiffon-belted-shirt-midi-dress-in-green/204405770-1-green?$n_480w$&wid=476&fit=constrain",
                "price": 44,
                "rating": 8.7,
                "id": "13"
            },
            {
                "name": "Edmund Botsford",
                "avatar": "https://images.asos-media.com/products/river-island-mini-shirt-dress-in-beige-leopard-print/204365885-1-beige?$n_480w$&wid=476&fit=constrain",
                "price": 78,
                "rating": 7.4,
                "id": "14"
            },
            {
                "name": "Thomas O'Conner",
                "avatar": "https://images.asos-media.com/products/river-island-vinyl-boxy-jacket-in-brown/204356094-1-brownamber?$n_480w$&wid=476&fit=constrain",
                "price": 95,
                "rating": 8.7,
                "id": "15"
            },
            {
                "name": "Mark Smitham",
                "avatar": "https://images.asos-media.com/products/river-island-embossed-envelope-cross-body-bag-with-contrast-strap-in-black/204265040-1-black?$n_480w$&wid=476&fit=constrain",
                "price": 35,
                "rating": 7.9,
                "id": "16"
            },
            {
                "name": "Deborah Koch",
                "avatar": "https://images.asos-media.com/products/river-island-embossed-chain-crossbody-bag-in-cream/204265032-1-cream?$n_480w$&wid=476&fit=constrain",
                "price": 96,
                "rating": 9.6,
                "id": "17"
            },
            {
                "name": "Hugo Dicki II",
                "avatar": "https://images.asos-media.com/products/river-island-cut-out-slim-fit-sweater-in-pink/204265006-1-brightpink?$n_480w$&wid=476&fit=constrain",
                "price": 37,
                "rating": 8.0,
                "id": "18"
            },
            {
                "name": "Ms. Judith Lesch V",
                "avatar": "https://images.asos-media.com/products/river-island-cutwork-detail-knit-top-in-white/204265005-1-white?$n_480w$&wid=476&fit=constrain",
                "price": 31,
                "rating": 6.9,
                "id": "19"
            },
            {
                "name": "Doreen O'Conner",
                "avatar": "https://images.asos-media.com/products/river-island-balloon-sleeve-smock-mini-shirt-dress-in-black/204264927-1-black?$n_480w$&wid=476&fit=constrain",
                "price": 37,
                "rating": 9.5,
                "id": "20"
            },
            {
                "name": "Angie Bergnaum",
                "avatar": "https://images.asos-media.com/products/new-look-quilted-faux-fur-shoulder-bag-in-black/204192239-1-black?$n_480w$&wid=476&fit=constrain",
                "price": 24,
                "rating": 6.1,
                "id": "21"
            },
            {
                "name": "Julia Crona",
                "avatar": "https://images.asos-media.com/products/new-look-lift-and-shape-high-waisted-skinny-jeans-in-authentic-blue-wash/204140027-1-blue?$n_480w$&wid=476&fit=constrain",
                "price": 20,
                "rating": 6.4,
                "id": "22"
            },
            {
                "name": "Edna Nikolaus",
                "avatar": "https://images.asos-media.com/products/new-look-ribbed-crew-neck-knitted-sweater-in-burgundy/204106000-1-red?$n_480w$&wid=476&fit=constrain",
                "price": 19,
                "rating": 8.7,
                "id": "23"
            },
            {
                "name": "Mr. Claudia Labadie",
                "avatar": "https://images.asos-media.com/products/river-island-quilted-buckle-high-leg-boot-in-black/204083795-1-black?$n_480w$&wid=476&fit=constrain",
                "price": 5,
                "rating": 9.0,
                "id": "24"
            },
            {
                "name": "Jerome Hintz",
                "avatar": "https://images.asos-media.com/products/river-island-monogram-scoop-handbag-in-brown/204083771-1-brown?$n_480w$&wid=476&fit=constrain",
                "price": 47,
                "rating": 8.8,
                "id": "25"
            },
            {
                "name": "Margarita Rempel",
                "avatar": "https://images.asos-media.com/products/river-island-velvet-satchel-handbag-in-bright-pink/204083766-1-brightpink?$n_480w$&wid=476&fit=constrain",
                "price": 18,
                "rating": 7.6,
                "id": "26"
            },
            {
                "name": "Angelo Bogan",
                "avatar": "https://images.asos-media.com/products/new-look-satin-cargo-trousers-in-black/204074934-1-black?$n_480w$&wid=476&fit=constrain",
                "price": 35,
                "rating": 8.2,
                "id": "27"
            },
            {
                "name": "Jack Casper",
                "avatar": "https://images.asos-media.com/products/new-look-tall-wide-leg-cargo-pants-in-khaki/204061531-1-khaki?$n_480w$&wid=476&fit=constrain",
                "price": 61,
                "rating": 9.2,
                "id": "28"
            },
            {
                "name": "Megan Gibson",
                "avatar": "https://images.asos-media.com/products/new-look-petite-coated-skinny-jeans-in-off-white/204061427-1-white?$n_480w$&wid=476&fit=constrain",
                "price": 46,
                "rating": 8.0,
                "id": "29"
            },
            {
                "name": "Cristina Herzog",
                "avatar": "https://images.asos-media.com/products/river-island-fairisle-sweater-in-cream/204037851-1-cream?$n_480w$&wid=476&fit=constrain",
                "price": 56,
                "rating": 9.0,
                "id": "30"
            }
        ])
        // const new_note = new WomenModel(payload)
        // await new_note.save()
        res.send("Women Product has been Created")
    } catch (error) {
        console.log(error);
        res.send({"msg":"Something went wrong"})
    }
})

womenRouter.patch("/update/:id",async (req,res)=>{
    const id = req.params.id
    const payload = req.body
    try {
        await WomenModel.findByIdAndUpdate({_id:id},payload)
        res.send("Women Product has been Updated")
    } catch (error) {
        console.log(error);
        res.send({"msg":"Something went wrong"})
    }
})

womenRouter.delete("/delete/:id",async (req,res)=>{
    const id = req.params.id
    try {
        await WomenModel.findByIdAndDelete({_id:id})
        res.send("Women Product has been deleted")
    } catch (error) {
        console.log(error);
        res.send({"msg":"Something went wrong"})
    }
})

module.exports = {womenRouter}